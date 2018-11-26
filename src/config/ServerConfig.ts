'use strict';


class ServerConfig{

    port: number
    host: string


    constructor(){
        this.port = 3000,
        this.host = "127.0.0.1"
    }

    /**
     * Return port server 
     * @returns {number}
     */
    protected getPort(): number{
        return this.port;
    }

    /**
     * Return host 
     * @returns {string}
     */
    protected getHost(): string{
        return this.host;
    }
}

export default ServerConfig;