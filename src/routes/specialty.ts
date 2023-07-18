import {Router} from 'express';
import {
    createSpecialty,
    deleteSpecialty,
    getAllSpecialties,
    specialtyById
} from '../controllers/specialty';

const routerSpecialty: Router = Router();

routerSpecialty.route('/specialties')
    .post(createSpecialty)
    .get(getAllSpecialties);

routerSpecialty.route('/specialties/:id')
    .get(specialtyById)
    .delete(deleteSpecialty);

export {routerSpecialty};


