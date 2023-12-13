import { generateSuccessReponse, generateErrorResponse, fetchData } from "../utils.js";

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
    const { statusCode, payload } = await fetchData('genre');
    if (statusCode === 500) {
        return generateErrorResponse(statusCode, payload);
    }
    if (requestObject.id !== undefined) {
        const genre = payload.find(item => item.id === Number(requestObject.id));
        return generateSuccessReponse(statusCode, genre);
    }
    return generateSuccessReponse(statusCode, payload);
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