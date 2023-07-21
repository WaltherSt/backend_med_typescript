import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connection = async (): Promise<void> => {
    try {
        await mongoose.connect(`${process.env.DB_HOST}`)
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        throw new Error(`No se ha podido conectar con la base de datos: ${error}`);
    }
};
