import {Document, Schema} from "mongoose";

export interface Meet extends Document {
    date: Schema.Types.Date;
    hour: string;
    specialty: Schema.Types.ObjectId;
    doctor: Schema.Types.ObjectId;
    patient: Schema.Types.ObjectId;

}