'use strict';
import { Request, Response, NextFunction } from 'express'; 

import {User} from '../models/User';
import {IUser} from '../models/Interfaces/IUser';

export default class AuthService {

    constructor(){}
    
    //using arrow method to avoid the context lost in callback and stuff like self = this;
    public getLogin = (req:Request, res: Response, next: NextFunction ):any => {
        console.log("CTRL getLoginAction -> service getLogin");
        res
        .status(200)
        .json({"login": "GET"});
    }


    public postLogin = (req:Request, res: Response, next: NextFunction ):any =>{
        res
        .status(200)
        .json({"login": "POST"});
    }


    public getRegister = (req:Request, res: Response, next: NextFunction ):any => {
        res
        .status(200)
        .json({"register": "GET"});
    }


    public postRegister = (req:Request, res: Response, next: NextFunction ):any => {
        let newUser = new User({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname,
            "email": req.body.email,
            "password" : req.body.password
        });
        newUser
        .save(function(err, user: IUser){
            if(err){
                res.status(400).json({error:true, data: err})
            } else {
                res.status(200).json({error:false, data: user})
            }
        })
    }

    public getLogout = (req:Request, res: Response, next: NextFunction ):any => {
        res
        .status(200)
        .json({"logout": "GET"});
    }

}
