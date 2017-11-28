const express = require("express");
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const client = [];

module.exports = (socket) => {	
	console.log(socket.id + "is online");
	socket.on("send-client", data => {
		// socket.join(data);
	});
	socket.on("send-message", data => {
		// io.in(data.room).emit("sent-message",data.message);
	});
	socket.on("disconnect", ()=>{
		
	});
}