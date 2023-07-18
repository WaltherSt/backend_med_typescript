import {Schema, model, Model, Types} from 'mongoose'; // Importa los módulos necesarios de Mongoose
import {Meet} from "../interfaces/Meet"; // Importa la interfaz Meet

const MeetSchema: Schema<Meet> = new Schema<Meet>({

    id: {
        type: Types.ObjectId
    },
    date: {
        required: true,
        type: String,
    },
    hour: {
        required: true,
        type: String
    },
    specialty: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Specialty' // Referencia a la colección 'Specialty' mediante el campo '_id'
    },
    doctor: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Doctor' // Referencia a la colección 'Doctor' mediante el campo '_id'
    },
    patient: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Patient' // Referencia a la colección 'Patient' mediante el campo '_id'
    }
});

const MeetModel: Model<Meet> = model<Meet>('Meet', MeetSchema, 'meets'); // Define el modelo Meet utilizando el esquema MeetSchema y la colección 'meets'

export default MeetModel; // Exporta el modelo MeetModel para su uso en otras partes del código
