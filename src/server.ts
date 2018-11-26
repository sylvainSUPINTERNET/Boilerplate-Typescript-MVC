'use strict';

//app
import app from "./app"; //instance express


//routes 
import AuthRouter from "./routes/AuthRouter";
AuthRouter.mount(app);



