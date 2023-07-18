import {Router} from 'express';
import {
    createMeet,
    deleteMeet,
    getMeetById,
    getMeets,
    getMeetsByDoctorAndDate
} from '../controllers/meet';

const routerMeet: Router = Router();

routerMeet.route('/meets')
    .post(createMeet)
    .get(getMeets);

routerMeet.route('/meets/:id')
    .get(getMeetById)
    .delete(deleteMeet);

routerMeet.get('/meets/:id_doctor/:date', getMeetsByDoctorAndDate);

export {routerMeet};




