import {Router} from 'express';
import {
    createPatient,
    deletePatient,
    getPatientById,
    getPatients,
    getPatientsByIdentification,
    updatePatient
} from '../controllers/patient';

const routerPatient: Router = Router();

routerPatient.route('/patients')
    .post(createPatient)
    .get(getPatients);

routerPatient.route('/patients/:id')
    .get(getPatientById)
    .patch(updatePatient)
    .delete(deletePatient);

routerPatient.get('/patients/search/:identification', getPatientsByIdentification);

export {routerPatient};

