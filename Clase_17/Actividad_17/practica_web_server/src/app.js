//const {envs} = require('./config/env.js') 
//const {iniciarServidor} = require('./server/server.js')


import { envs } from "./config/env.js"
import { iniciarServidor } from "./server/server.js"


const main=() =>{
    //console.log(envs)
    iniciarServidor({
        port:envs.PORT,
        public_path:envs.PUBLIC_PATH

    })
}

//funcion amonima y autoconvocada

(async() =>{
    main()
})()