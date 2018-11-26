'use strict';

import { Request, Response, NextFunction } from 'express'; 

import AuthService from '../services/AuthService';

class AuthController extends AuthService {

    constructor(){
        super();
    }

    
    public getLoginAction = (req:Request, res: Response, next: NextFunction ):any => { // use arrow method to use the right context this (else refer to Router class not AuthService)
        return this.getLogin(req,res,next);
    }


    public postLoginAction = (req:Request, res: Response, next: NextFunction ):any => {
        return this.postLogin
    }


    public getRegisterAction = (req:Request, res: Response, next: NextFunction ):any => {
       return this.getRegister
    }


    public postRegisterAction = (req:Request, res: Response, next: NextFunction ):any => { 
       return this.postRegister
    }

    public getLogoutAction = (req:Request, res: Response, next: NextFunction ):any => {
        return this.getLogout
    }

 
}

export default AuthController;