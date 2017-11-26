module.exports = (socket) => {	
	// socket.join('room' + data.id);
	socket.on("hello", data => {
		console.log(data);
	});
	socket.on("disconnect", ()=>{
		
	});
}