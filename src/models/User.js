// import { Schema, model } from 'mongoose';
// import bcryptjs from 'bcryptjs';

const { Schema, model } = require('mongoose');
const bcryptjs = require('bcryptjs');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    },
    token: {
        type: String,
        required: false
    },
    expiration: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

UserSchema.pre('save', async function () {
    this.password = await bcryptjs.hash(this.password, 8);
});

UserSchema.methods.show = function () {
    return {
        _id: this.id,
        name: this.name,
        email: this.email,
        deteled: this.deleted
    }
}

module.exports = model('User', UserSchema);
// export default model('User', UserSchema);