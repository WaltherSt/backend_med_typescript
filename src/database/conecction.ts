import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connection = async (): Promise<void> => {
    try {
        await mongoose.connect(
            `mongodb://${process.env.USER}:${process.env.PASS}@localhost:${process.env.PORT}/${process.env.DTANAME}?authSource=admin`);
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        throw new Error(`No se ha podido conectar con la base de datos: ${error}`);
    }
};
