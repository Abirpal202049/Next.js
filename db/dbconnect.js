import mongoose from 'mongoose'

const connection = {}

async function dbConnect(){
    if(connection.isConnected){
        console.log(connection);
        return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    // Setting the property of isConnected on the 'connections' Object
    connection.isConnected = db.connections[0].readyState
}

export default dbConnect