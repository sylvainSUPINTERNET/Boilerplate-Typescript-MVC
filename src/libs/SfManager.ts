'use strict';
import {Response} from 'express'; 

//salesforce configuration
import SfConfig from "../config/SfConfig";
import * as jsforce from 'jsforce';

class SfManager extends SfConfig {
    constructor(){
        super();
    }

    getCurrentConn(): any{
        return this.conn
    }

    login(res:Response): any {
        this
        .getCurrentConn()
        .login(this.getCredentialUsername(), this.getpasswordTestEnv(), function(err,userInfos){
            if(err){
                res
                .status(400)
                .json({
                    error:true,
                    data: err
                })
            } else {
                res
                .status(200)
                .json({
                    error:false,
                    data: userInfos
                })
            }
         })

    }
}

export default new SfManager();


