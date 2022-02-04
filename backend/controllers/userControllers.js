import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { validateName, validateEmail, validatePhoneNumber } from "../useful/functionsRegex.js";

const registerQuote = asyncHandler(async (req, res) => {
    const { name, email, companyName, phoneNumber, moveInDate, peopleNumber, stayDuration, roomType, companySize, additionalInfo, offersAndCommunication } = req.body;

    
    if(validateEmail(email) && validateName(name) && validatePhoneNumber(phoneNumber)){
        const user = await User.create(req.body);
        res.status(201)
            .json({
                _id: user._id,
                name: user.name,
                companyName: user.companyName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                moveInDate: user.moveInDate,
                peopleNumber: user.peopleNumber,
                stayDuration: user.stayDuration,
                roomType: user.roomType,
                companySize: user.companySize,
                additionalInfo: user.additionalInfo,
                offersAndCommunication: user.offersAndCommunication
            })
    } else {
        if(name.length == 0){
            res.status(400);
            throw new Error ("Name not found. Please enter your name!")
        } 
        if(email.length === 0){
            res.status(400);
            throw new Error("Email not found. Please enter your Email address!")
        } 
        if(!validateEmail(email) && email.length !== 0){
            res.status(400);
            throw new Error ("Please enter a valid Email address!")
        }
        if(phoneNumber.length == 0){
            res.status(400);
            throw new Error ("Phone Number not found. Please enter your Phone Number!")
        }
        if(!validatePhoneNumber(phoneNumber) && phoneNumber.length !== 0){
            res.status(400);
            throw new Error ("Please enter a valid Phone Number!")
        }
    }  
    });


    const registerVisit = asyncHandler(async (req, res) => {
        const { name, email, phoneNumber, additionalInfo } = req.body;

        if(validateEmail(email) && validateName(name) && validatePhoneNumber(phoneNumber)){
            const user = await User.create(req.body);
            res.status(201)
                .json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    additionalInfo: user.additionalInfo
            })
        } else {
            if(name.length == 0){
                res.status(400);
                throw new Error ("Name not found. Please enter your name!")
            } 
            if(email.length === 0){
                res.status(400);
                throw new Error("Email not found. Please enter your Email address!")
            } 
            if(!validateEmail(email) && email.length !== 0){
                res.status(400);
                throw new Error ("Please enter a valid Email address!")
            }
            if(phoneNumber.length == 0){
                res.status(400);
                throw new Error ("Phone Number not found. Please enter your Phone Number!")
            }
            if(!validatePhoneNumber(phoneNumber) && phoneNumber.length !== 0){
                res.status(400);
                throw new Error ("Please enter a valid Phone Number!")
            }
        }
    });
export { registerQuote, registerVisit };