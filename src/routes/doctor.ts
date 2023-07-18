import {Router} from 'express';
import {
    createDoctor,
    deleteDoctor,
    getDoctorById,
    getDoctors,
    getDoctorsBySpecialty,
    updateDoctor
} from '../controllers/doctor';

const routerDoctor: Router = Router();

routerDoctor.route('/doctors')
    .post(createDoctor)
    .get(getDoctors);

routerDoctor.route('/doctors/:id')
    .get(getDoctorById)
    .patch(updateDoctor)
    .delete(deleteDoctor);

routerDoctor.get('/doctors/specialty/:id', getDoctorsBySpecialty);

export {routerDoctor};



