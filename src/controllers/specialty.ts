import {Request, Response} from "express";
import {serviceSpecialties} from '../services/specialty'


export const createSpecialty = async (req: Request, res: Response): Promise<Response> => {
    return serviceSpecialties.createSpecialty(req, res)
}

export const getAllSpecialties = async (req: Request, res: Response): Promise<Response> => {
    return serviceSpecialties.getAllSpecialties(req, res)
}

export const specialtyById = async (req: Request, res: Response): Promise<Response> => {
    return serviceSpecialties.specialtyById(req, res)
}
export const deleteSpecialty = async (req: Request, res: Response): Promise<Response> => {
    return serviceSpecialties.deleteSpecialty(req, res)
}


