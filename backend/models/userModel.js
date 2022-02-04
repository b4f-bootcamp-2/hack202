import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: false,
        },
        companyName: {
            type: String,
            required: false,
        }, 
        email: {
            type: String,
            required: true,
            unique: false,
        }, 
        phoneNumber: {
            type: String,
            required: true,
            unique: false
        },
        moveInDate: {
            type: String,
            required: false,
        },
        peopleNumber: {
            type: String,
            required: false,
        },
        stayDuration: {
            type: String,
            required: false
        },
        roomType: {
            type: String,
            required: false
        },
        companySize: {
            type: String,
            required: false
        },
        additionalInfo: {
            type: String,
            required: false
        },
        offersAndCommunication: {
            type: Boolean,
            required: false,
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema)

export default User;