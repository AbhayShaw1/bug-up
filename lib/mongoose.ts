import mongoose, {Mongoose} from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) throw new Error("MONGODB_URI is not defined");

interface MongooseCache {
    connection: Mongoose | null;
    promise: Promise<Mongoose> | null

}

declare global {
    var mongoose: MongooseCache;
}

let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {connection: null, promise: null};
}

const dbConnect = async (): Promise<Mongoose> => {
    if (cached.connection) return cached.connection;
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: 'bugup',
        }).then((result) => {
            console.log("Connected to database");
            return result;
        }).catch((error) => {
            console.log('Error connecting to database', error);
            throw error;
        });
    }
    cached.connection = await cached.promise;
    return cached.connection;
}
export default dbConnect;