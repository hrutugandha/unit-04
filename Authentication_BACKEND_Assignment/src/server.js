const app = require('./index');

const connect = require('../src/configs/db')

app.listen('5600', async () =>{
    try{
        await connect();
        console.log("Listening on port 5600...")
    }catch(e){
        console.log(e.message)
    }
})