import Specialty from '../models/Specialty';
import {Request, Response} from 'express';
import Meet from '../models/Meet';

export const serviceSpecialties = {
    createSpecialty: async (req: Request, res: Response): Promise<Response> => {
        try {
            const specialty = await Specialty.create(req.body);
            return res.status(200).json({message: 'Especialidad registrada', data: specialty});
        } catch (e: any) {
            return res.status(404).json({status: 'error', message: e.message});
        }
    },

    getAllSpecialties: async (req: Request, res: Response): Promise<Response> => {
        try {
            const specialties = await Specialty.find();
            return res.status(200).json({message: 'Lista de especialidades', data: specialties});
        } catch (e: any) {
            return res.status(404).json({status: 'error', message: e.message});
        }
    },

    specialtyById: async (req: Request, res: Response): Promise<Response> => {
        try {
            const specialty = await Specialty.findById(req.params.id);
            if (!specialty) {
                return res.status(404).json({status: 'error', message: 'Especialidad no encontrada'});
            }
            return res.status(200).json({message: 'Especialidad encontrada', data: specialty});
        } catch (e: any) {
            return res.status(404).json({status: 'error', message: e.message});
        }
    },

    deleteSpecialty: async (req: Request, res: Response): Promise<Response> => {
        try {
            const id: string = req.params.id;
            await Meet.deleteMany({specialty: id});
            const deletedSpecialty = await Specialty.findByIdAndRemove(id);
            if (!deletedSpecialty) {
                return res.status(404).json({status: 'error', message: 'Especialidad no encontrada'});
            }
            return res.status(200).json({message: 'Especialidad eliminada', data: deletedSpecialty});
        } catch (e: any) {
            return res.status(404).json({status: 'error', message: e.message});
        }
    }
};
