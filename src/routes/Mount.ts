'use strict';

import { Application, Router } from 'express'; 

export default interface Mount {

    /**
     * Mount every routes from this router on app
     * @param app current express instance
     * @returns {Router}
     */
    mount(app: Application):Router
}