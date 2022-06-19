import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    timestamps: true
})

UserSchema.pre('save', function(next) {
    // faça alguma coisa em algum campo antes de SALVAR
})

const User = mongoose.model('User', UserSchema);

module.exports = User;