import Patient from '../models/Patientt';
import {Request, Response} from 'express';
import Meet from '../models/Meet';

export const servicePatients = {
    createPatient: async (req: Request, res: Response): Promise<Response> => {
        try {
            const newPatient = await Patient.create(req.body);
            return res.status(200).json({message: 'Paciente registrado', data: newPatient});
        } catch (e: any) {
            return res.status(404).json({status: 'error', message: e.message});
        }
    },

    getPatients: async (req: Request, res: Response): Promise<Response> => {
        try {
            const patientList = await Patient.find().select('-__v');
            return res.status(200).json({message: 'Lista de pacientes', data: patientList});
        } catch (e: any) {
            return res.status(404).json({status: 'error', message: e.message});
        }
    },

    getPatientById: async (req: Request, res: Response): Promise<Response> => {
        try {
            const patient = await Patient.findById(req.params.id);
            if (!patient) {
                return res.status(404).json({status: 'error', message: 'Paciente no encontrado'});
            }
            return res.status(200).json({message: 'Paciente encontrado', data: patient});
        } catch (e: any) {
            return res.status(404).json({status: 'error', message: e.message});
        }
    },

    getPatientsByIdentification: async (req: Request, res: Response): Promise<Response> => {
        try {
            const identification: string = req.params.identification;
            const patients = await Patient.find({identificationCard: {$regex: identification + '.*'}});
            return res.status(200).json({message: 'Coincidencias', data: patients});
        } catch (e: any) {
            return res.status(404).json({status: 'error', message: e.message});
        }
    },

    updatePatient: async (req: Request, res: Response): Promise<Response> => {
        try {
            const id: string = req.params.id;
            await Patient.findByIdAndUpdate(id, req.body);
            const updatedPatient = await Patient.findById(id);
            if (!updatedPatient) {
                return res.status(404).json({status: 'error', message: 'Paciente no encontrado'});
            }
            return res.status(200).json({message: 'Paciente actualizado', data: updatedPatient});
        } catch (e: any) {
            return res.status(404).json({status: 'error', message: e.message});
        }
    },

    deletePatient: async (req: Request, res: Response): Promise<Response> => {
        try {
            const id: string = req.params.id;
            await Meet.deleteMany({patient: id});
            const deletedPatient = await Patient.findByIdAndDelete(id);
            if (!deletedPatient) {
                return res.status(404).json({status: 'error', message: 'Paciente no encontrado'});
            }
            return res.status(200).json({
                message: 'Paciente y citas asociadas eliminados',
                data: deletedPatient
            });
        } catch (e: any) {
            return res.status(400).json({status: 'error', message: e.message});
        }
    }
};
