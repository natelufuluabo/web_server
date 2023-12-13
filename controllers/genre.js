import fs from 'fs/promises';
import { generateSuccessReponse, generateErrorResponse } from "../utils.js";

export async function genreDispatcher(method, requestObject) {
    // Call the appropriate function based on method and path received
    switch (method) {
        case 'POST':
            return createRessources(requestObject);
        case 'PUT':
            return updateRessources(requestObject);
        case 'DELETE':
            return deleteRessources(requestObject);
        default:
            return getRessources(requestObject);
    }
}

async function getRessources(requestObject) {
    if (requestObject.id !== undefined) {
        try {
            const data = await fs.readFile('../data/genre.json', 'utf8');
    
            const jsonData = JSON.parse(data);

            const genre = jsonData.find(item => item.id === requestObject.id)

            return generateSuccessReponse(200, genre);
        } catch (error) {
            console.log('Error reading JSON file:', error)
            return generateErrorResponse(500, { message: 'Error reading JSON file' });
        }
    }
    try {
        const data = await fs.readFile('../data/genre.json', 'utf8');

        const jsonData = JSON.parse(data);

        return generateSuccessReponse(200, jsonData);
    } catch (error) {
        console.log('Error reading JSON file:', error)
        return generateErrorResponse(500, { message: 'Error reading JSON file' });
    }
}

function createRessources(requestObject) {
    return 'genre ressources created';
}

function updateRessources(requestObject) {
    return 'genre ressources updated';
}

function deleteRessources(requestObject) {
    return 'genre ressources deleted';
}