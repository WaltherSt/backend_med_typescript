import mongoose from 'mongoose';


export const doctorAggregation = (id: string = '') => {
    const aggregation = [
        {
            $lookup: {
                from: 'specialties',
                localField: 'specialty',
                foreignField: '_id',
                as: 'specialtyData',
            },
        },
        {
            $unwind: '$specialtyData',
        },
        {
            $project: {
                id: 1,
                name: 1,
                lastName: 1,
                consultingRoom: 1,
                email: 1,
                'specialty': '$specialtyData.name',
                'id_specialty': '$specialtyData._id',


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
