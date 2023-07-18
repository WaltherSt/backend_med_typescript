import {Request, Response} from "express";
import {serviceMeet} from '../services/meet'

export const createMeet = async (req: Request, res: Response): Promise<Response> => {
    return serviceMeet.createMeet(req, res)

}

export const getMeets = async (req: Request, res: Response): Promise<Response> => {
    return serviceMeet.getMeets(req, res)
}
export const getMeetById = async (req: Request, res: Response): Promise<Response> => {
    return serviceMeet.getMeetById(req, res)
}

export const deleteMeet = async (req: Request, res: Response): Promise<Response> => {
    return serviceMeet.deleteMeet(req, res)
}
export const getMeetsByDoctorAndDate = async (req: Request, res: Response): Promise<Response> => {
    return serviceMeet.getMeetsByDoctorAndDate(req, res)
}






