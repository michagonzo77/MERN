const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [2, '{PATH} must be at least {MINLENGTH} characters.']
        },
        position: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [6, '{PATH} must be at least {MINLENGTH} characters.']
        },
        over1mil: {
            type: Boolean,
            default: false
        },
        over10mil: {
            type: Boolean,
            default: false
        },
        over100mil: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

//  Register schema with mongoose and provide a string to name the collection. This also returns a reference to our model that we can use for DB operations.

const Player = mongoose.model("Player", PlayerSchema);

module.exports = { Player: Player };