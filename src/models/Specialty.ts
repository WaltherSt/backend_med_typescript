import {Schema, model, Model, Types} from 'mongoose'
import {Specialty} from "../interfaces/Specialty";


const SpecialtySchema: Schema<Specialty> = new Schema<Specialty>({

    id: {
        type: Types.ObjectId
    },

    name: {
        required: true,
        type: String
    },
});


const PatientModel: Model<Specialty> = model<Specialty>('Specialty', SpecialtySchema, 'specialties')
export default PatientModel;