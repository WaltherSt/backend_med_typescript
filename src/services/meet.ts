import {Request, Response} from 'express';
import {Document, Schema} from 'mongoose';
import Meet from '../models/Meet';
import {MeetData} from '../interfaces/MeetData';
import {meetAggregation} from '../helpers/aggregations/aggregationMeet';
import * as module from "module";


export const serviceMeet = {
    createMeet: async (req: Request, res: Response): Promise<Response> => {
        try {
            const meet = await Meet.create(req.body);
            return res.status(200).json({message: 'Cita registrada', data: meet});
        } catch (e: any) {
            return res.status(400).json({status: 'error', message: e.message});
        }
    },

    getMeets: async (req: Request, res: Response): Promise<Response> => {
        try {
            const meets: MeetData[] = await Meet.aggregate(meetAggregation()).exec();

            return res.status(200).json({message: 'Lista de citas', data: meets});
        } catch (e: any) {
            return res.status(400).json({status: 'error', message: e.message});
        }
    },

    getMeetById: async (req: Request, res: Response): Promise<Response> => {
        try {
            const id: string = req.params.id;
            const meet: MeetData[] = await Meet.aggregate(meetAggregation(id)).exec();
            return res.status(200).json({message: 'Cita encontrada', data: meet});
        } catch (e: any) {
            return res.status(400).json({status: 'error', message: e.message});
        }
    },

    deleteMeet: async (req: Request, res: Response): Promise<Response> => {
        try {
            const id: string = req.params.id;
            const meet: Document | null = await Meet.findByIdAndDelete(id);
            if (!meet) {
                return res.status(404).json({status: 'error', message: 'Cita no encontrada'});
            }
            return res.status(200).json({message: 'Cita eliminada', data: meet});
        } catch (e: any) {
            return res.status(400).json({status: 'error', message: e.message});
        }
    },

    getMeetsByDoctorAndDate: async (req: Request, res: Response): Promise<Response> => {
        try {
            const id_doctor: string = req.params.id_doctor;
            const date: string = req.params.date;
            const meets = await Meet.find({doctor: id_doctor, date: date}, ['date', 'hour']);

            return res.status(200).json({
                status: 'Fechas y horas ocupadas',
                data: meets
            });
        } catch (e: any) {

            return res.status(400).json({status: 'error', message: e.message});
        }
    }
};
