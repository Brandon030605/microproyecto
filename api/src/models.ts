import { model, Schema } from "mongoose";

interface User{
    name: String;
    email: String;
    password: String;
    rol: "administrador" | "cliente"

}

const UserSchema = new Schema <User> ({
    name: {
        type: String,
        required: true 
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    rol: {
        type: String,
        enum:["administrador", "cliente"],
        default: "cliente"
    }

});

export const usermodel = model("Users", UserSchema);