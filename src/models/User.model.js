import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    randomSecret: {
        type: String,
        required: true,
    },
})

export const User = mongoose.model("User", userSchema);