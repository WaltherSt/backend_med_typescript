import mongoose from 'mongoose'; // Importa el módulo mongoose

export const meetAggregation = (id: string = '') => {
    const aggregation = [
        {
            $lookup: {
                from: 'doctors', // Colección 'doctors'
                localField: 'doctor', // Campo local para la unión
                foreignField: '_id', // Campo en 'doctors' para la unión
                as: 'doctorData', // Alias para los datos de la unión
            },
        },
        {
            $lookup: {
                from: 'patients', // Colección 'patients'
                localField: 'patient', // Campo local para la unión
                foreignField: '_id', // Campo en 'patients' para la unión
                as: 'patientData', // Alias para los datos de la unión
            },
        },
        {
            $lookup: {
                from: 'specialties', // Colección 'specialties'
                localField: 'specialty', // Campo local para la unión
                foreignField: '_id', // Campo en 'specialties' para la unión
                as: 'specialtyData', // Alias para los datos de la unión
            },
        },
        {
            $unwind: '$doctorData', // Descompone el arreglo 'doctorData'
        },
        {
            $unwind: '$patientData', // Descompone el arreglo 'patientData'
        },
        {
            $unwind: '$specialtyData', // Descompone el arreglo 'specialtyData'
        },
        {
            $project: {
                date: 1,
                hour: 1,
                'patient': {$concat: ['$patientData.name', ' ', '$patientData.lastName']}, // Concatena 'name' y 'lastName' como 'patient'
                'patientIdentification': '$patientData.identificationCard', // Campo 'identificationCard' renombrado como 'patientIdentification'
                'id_patient': '$patientData._id', // Campo '_id' renombrado como 'id_patient'
                'doctor': {$concat: ['$doctorData.name', ' ', '$doctorData.lastName']}, // Concatena 'name' y 'lastName' como 'doctor'
                'id_doctor': '$doctorData._id', // Campo '_id' renombrado como 'id_doctor'
                'specialty': '$specialtyData.name', // Campo 'name' renombrado como 'specialty'
            },
        },
    ];

    if (id === '') { // Si no se proporciona un ID
        return aggregation; // Devuelve el arreglo de agregación tal cual
    } else {
        return [
            ...aggregation, // Copia todas las etapas de agregación existentes
            {
                $match: {_id: new mongoose.Types.ObjectId(id)}, // Agrega una etapa de $match para filtrar por el ID
            },
        ];
    }
};
