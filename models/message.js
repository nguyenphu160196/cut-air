const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
	from: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	},
	to: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	},
    message: String,
    createAt: String
});

module.exports = mongoose.model('message', roomSchema);
