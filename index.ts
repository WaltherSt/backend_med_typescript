import express, {Express} from 'express';
import cors from 'cors';
import {connection} from "./src/database/conecction";
import {routerDoctor} from "./src/routes/doctor";
import {routerSpecialty} from "./src/routes/specialty";
import {routerPatient} from "./src/routes/patient";
import {routerMeet} from "./src/routes/meet";

const app: Express = express();
connection()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use('/api', routerDoctor, routerSpecialty, routerPatient, routerMeet);
app.listen(3900, () => {
    console.log('Servidor corriendo en el puerto 3900')
})

