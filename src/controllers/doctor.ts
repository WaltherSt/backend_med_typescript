import {Request, Response} from "express";
import {serviceDoctors} from '../services/doctor'

export const createDoctor = async (req: Request, res: Response): Promise<Response> => {
    return serviceDoctors.createDoctor(req, res)
}

export const getDoctors = async (req: Request, res: Response): Promise<Response> => {
    return serviceDoctors.getDoctors(req, res)
}

export const getDoctorById = async (req: Request, res: Response): Promise<Response> => {
    return serviceDoctors.getDoctorById(req, res)
}

export const updateDoctor = async (req: Request, res: Response): Promise<Response> => {
    return serviceDoctors.updateDoctor(req, res)
}

export const deleteDoctor = async (req: Request, res: Response): Promise<Response> => {
    return serviceDoctors.deleteDoctor(req, res)
}

export const getDoctorsBySpecialty = async (req: Request, res: Response): Promise<Response> => {
    return serviceDoctors.getDoctorsBySpecialty(req, res)
}