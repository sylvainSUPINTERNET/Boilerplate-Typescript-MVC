import * as express from "express";
import * as bodyParser from "body-parser";

//debug morgan
import  * as morgan from 'morgan'; 

//server config
import ServerConfig from "./config/ServerConfig";

//Mongoose 
import * as mongoose from "mongoose";

class App extends ServerConfig {

    public app: express.Application;
    public mongoUrl: string = 'mongodb://localhost:27017/mytssf';

    constructor() {
        super();    
        this.app = express();
        this.config();
        this.run();
        this.mongoSetup();    
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
        this.app.use(morgan('combined'));
    }

    private run(): void{
        this.app.listen(this.getPort(), () => {
            console.log('Express server listening on port ' + this.getPort());
        })
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, {useNewUrlParser: true});        
    }
}

export default new App().app;