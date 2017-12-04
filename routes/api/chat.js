const express = require("express");
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const Message = require('../../models/message');

const client = [];

module.exports = (socket) => {	
	socket.on("send-client", data => {
		client.push({id: socket.id, user: data});
		socket.emit("friend-list", client);
		socket.broadcast.emit("friend-list", client);
	});
	//load tin nhắn
	socket.on("send-id", data => {
		Message.find({
			$or: [{
				from: data.ownId,
				to: data.friendId
			}, {
				from: data.friendId,
				to: data.ownId
			}]
		})
		.populate("from")
		.populate("to")
		.then(results => {
			// console.log("RESULTS: ", results);
			socket.emit("previous-message", results);
		})
		.catch(error => {
			socket.emit("previous-message", error);
		})
	})
	socket.on("send-message", data => {
		let newMessage = new Message({
			from: data.ownId,
			to: data.userId,
			text: data.text,
			createAt: Date.now()
		})

		newMessage.save()
			.then(message => {
				Message.findOne({_id: message._id})
					.populate("from")
					.populate("to")
					.then(message => {
						console.log("USER:" ,message);
						socket.broadcast.to(data.socketId).emit("recieve-message", message);
						socket.emit("recieve-message", message);
					})
					.catch(err => {
						socket.emit("recieve-message", {
							userId: message.from,
							text: null,
							errors: err
						});
					});
			})
			.catch(err => {
				socket.emit("recieve-message", {
					userId: message.from,
					text: null,
					errors: err
				});
			});
	})
	socket.on("calling", data => {
		socket.broadcast.to(data.id).emit("answer", {dialog: data.dialog, caller: data.caller, callerId: data.callerId});
	})
	socket.on("answered", data => {
		socket.broadcast.to(data.id).emit("access", data.dialog);
	})
	socket.on("disconnect", ()=>{
		client.map((data, i) => {
			if(data.id == socket.id){
				client.splice(i,1);			
			}
		})
		socket.emit("friend-list", client);
		socket.broadcast.emit("friend-list", client);
	});
}