import {Schema, model, Model, Types} from 'mongoose'
import {Doctor} from "../interfaces/Doctor";


const DoctorSchema: Schema<Doctor> = new Schema<Doctor>({

    id: {
        type: Types.ObjectId
    },

    name: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    specialty: {
        type: Schema.Types.ObjectId,
        ref: 'Specialty',
    },
    consultingRoom: {
        required: true,
        type: String,

    },
    email: {
        required: true,
        type: String,
        unique: true,
        match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    }


});

const DoctorModel: Model<Doctor> = model<Doctor>('Doctor', DoctorSchema, 'doctors')
export default DoctorModel;

