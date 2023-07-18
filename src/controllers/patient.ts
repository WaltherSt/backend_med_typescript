import {Request, Response} from "express";
import {servicePatients} from '../services/patient'


export const createPatient = (req: Request, res: Response): Promise<Response> => {
    return servicePatients.createPatient(req, res)
}
export const getPatients = (req: Request, res: Response): Promise<Response> => {
    return servicePatients.getPatients(req, res)
}
export const getPatientById = (req: Request, res: Response): Promise<Response> => {
    return servicePatients.getPatientById(req, res)
}
export const updatePatient = (req: Request, res: Response): Promise<Response> => {
    return servicePatients.updatePatient(req, res)
}
export const getPatientsByIdentification = (req: Request, res: Response): Promise<Response> => {
    return servicePatients.getPatientsByIdentification(req, res)
}
export const deletePatient = (req: Request, res: Response) => {
    return servicePatients.deletePatient(req, res)
}