import {Document, Schema} from "mongoose";

export interface Doctor extends Document {
    name: string;
    lastName: string;
    specialty: Schema.Types.ObjectId;
    consultingRoom: string;
    email: string
}