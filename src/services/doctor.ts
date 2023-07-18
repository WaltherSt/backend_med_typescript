import Doctor from '../models/Doctor'; // Importa el modelo Doctor
import {Request, Response} from 'express'; // Importa los tipos Request y Response de Express
import Meet from '../models/Meet'; // Importa el modelo Meet
import {doctorAggregation} from "../helpers/aggregations/aggregationDoctor"; // Importa la función de agregación doctorAggregation
import {DoctorData} from "../interfaces/DoctorData"; // Importa la interfaz DoctorData

export const serviceDoctors = {
    createDoctor: async (req: Request, res: Response): Promise<Response> => {
        try {
            const newDoctor = await Doctor.create(req.body); // Crea un nuevo doctor utilizando el modelo Doctor y los datos del cuerpo de la solicitud
            return res.status(200).json({message: 'Doctor registrado', data: newDoctor});
        } catch (e: any) {
            return res.status(400).json({status: 'error', message: e.message});
        }
    },

    getDoctors: async (req: Request, res: Response): Promise<Response> => {
        try {
            const doctorsList: DoctorData[] = await Doctor.aggregate(doctorAggregation()).exec();


            return res.status(200).json({message: 'Lista de doctores', data: doctorsList});
        } catch (e: any) {
            return res.status(404).json({status: 'error', message: e.message});
        }
    },

    getDoctorById: async (req: Request, res: Response): Promise<Response> => {
        try {
            const id: string = req.params.id;
            const doc = await Doctor.aggregate(doctorAggregation(id)).exec();
            if (!doc) {
                return res.status(404).json({status: 'error', message: 'Doctor no encontrado'});
            }
            return res.status(200).json({message: 'Doctor encontrado', data: doc});
        } catch (e: any) {
            return res.status(404).json({status: 'error', message: e.message});
        }
    },

    updateDoctor: async (req: Request, res: Response): Promise<Response> => {
        try {
            const id: string = req.params.id;
            const body = req.body;
            const doc = await Doctor.findByIdAndUpdate(id, body, {new: true});
            if (!doc) {
                return res.status(404).json({status: 'error', message: 'Doctor no encontrado'});
            }
            return res.status(200).json({message: 'Doctor actualizado', data: doc});
        } catch (e: any) {
            return res.status(404).json({status: 'error', message: e.message});
        }
    },

    deleteDoctor: async (req: Request, res: Response): Promise<Response> => {
        try {
            const id: string = req.params.id; // Obtiene el ID del parámetro de la solicitud
            await Meet.deleteMany({doctor: id}); // Elimina todas las citas asociadas al doctor
            const doc = await Doctor.findByIdAndDelete(id); // Busca y elimina el doctor con el ID
            if (!doc) {
                return res.status(404).json({status: 'error', message: 'Doctor no encontrado'});
            }
            return res
                .status(200)
                .json({message: 'Doctor y citas asociadas eliminados', data: doc});
        } catch (e: any) {
            return res.status(404).json({status: 'error', message: e.message});
        }
    },

    getDoctorsBySpecialty: async (req: Request, res: Response): Promise<Response> => {
        try {
            const doctors = await Doctor.find({specialty: req.params.id}); // Busca los doctores por la especialidad especificada en el parámetro de la solicitud
            return res.status(200).json({
                message: 'Doctores por especialidad',
                data: doctors
            });
        } catch (e: any) {
            return res.status(404).json({status: 'error', message: e.message});
        }
    }
};
