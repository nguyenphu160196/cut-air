const express = require("express");
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

module.exports = (socket) => {	
	socket.on("join-room", data => {
		socket.join(data);
		console.log("joined room " + data);
	});
	socket.on("send-message", data => {
		io.in(data.room).emit("sent-message",data.message);
		console.log("receive message " + data.room + " " + data.message);
	});
	socket.on("disconnect", ()=>{
		
	});
}