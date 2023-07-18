import {Document} from "mongoose";

export interface Patient extends Document {
    name: string;
    lastName: string;
    identificationCard: String
    age: number;
    phone: string
}