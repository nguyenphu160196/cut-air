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
	
	socket.on("send-message", data => {
		console.log("send-message:", data);
		socket.broadcast.to(data.socketId).emit("recieve-message", {userId: data.userId, text: data.text});
		socket.emit("recieve-message", {userId: data.userId,text: data.text});
	})
	socket.on("calling", data => {
		socket.broadcast.to(data.id).emit("answer", {dialog: data.dialog});
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