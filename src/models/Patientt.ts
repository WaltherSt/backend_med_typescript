import mongoose, {Schema, model, Model, Types,} from 'mongoose'
import {Patient} from "../interfaces/Patient";

const PatienttSchema: Schema<Patient> = new Schema<Patient>({

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
    identificationCard: {
        required: true,
        type: String,
        unique: true
    },
    age: {
        required: true,
        type: Number
    },
    phone: {
        type: String,
        required: true,
    },

});

const PatienttModel: Model<Patient> = model<Patient>('Patientt', PatienttSchema, 'patients')
export default PatienttModel;