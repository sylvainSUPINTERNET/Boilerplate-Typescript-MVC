'use strict';


import * as jsforce from 'jsforce';

export default class SfConfig {

    loginURL : string
    credential_username: string
    credential_password: string
    token: string

    passwordTestEnv: string

    conn: any
    
    constructor(){
        this.loginURL = 'https://login.salesforce.com', //sandbox version salesforce
        this.credential_username = "" 
        this.credential_password = ""
        this.token = ""
        this.passwordTestEnv = `${this.credential_password}${this.token}`
        this.conn = this.initConn();
    }

    public getLoginURL():string {
        return this.loginURL
    }
    public getCredentialUsername():string {
        return this.credential_username
    }
    public getCredentialPassword():string { 
        return this.credential_password
    }
    public getpasswordTestEnv(): string {
        return this.passwordTestEnv
    }
    public getToken():string {
        return this.token;
    }

    //init connection
    public initConn() : any{
        return new jsforce.Connection({
            loginUrl: this.getLoginURL()
        });
    }
}