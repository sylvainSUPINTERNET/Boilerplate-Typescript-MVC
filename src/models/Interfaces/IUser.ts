'use strict';
import { Document, mongoose} from "mongoose";

export interface IUser extends mongoose.Document {
    email?: string,
    firstname?: string,
    lastname?: string,
    password?: string,
    createdAt?:Date
}

//use POJO interface to make it accessible in every functions (user: IUser) => {...} 


