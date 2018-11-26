'use strict';

import { Request, Response, NextFunction, Router, Application } from 'express'; 
import Mount from './Mount';

//Controller
import AuthController from "../controllers/AuthController";


class AuthRouter extends AuthController implements Mount {

    router: Router;

    constructor(){
        super();
        this.router = Router();
    }

    /**
     * Login 
     */
    public login(): void {
        this.router
        .get('/login', this.getLoginAction) // req,res,next passed automaticly into paramters  ==> function(req,res,next)

        this.router
        .post('/login',this.postLoginAction)
    }

    /**
     * Register 
     */
    public register(): void {
        this.router
        .get('/register', this.getRegister)

        this.router
        .post('/register', this.postRegister)
    }

    /**
     * Logout
     */
    public logout(): void {
        this.router
        .get('/logout', this.getLogout)
    }


    public mount(app:Application): Router{

        // Init routes for Auth
        this.register();
        this.login();
        this.logout();

        //set router to our current express instance
        app
        .use('/auth', this.router);
        
        return this.router;
    }

}

export default new AuthRouter();


