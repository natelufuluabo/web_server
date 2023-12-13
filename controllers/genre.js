import { getRessources } from "../utils.js";

export async function genreDispatcher(method, requestObject) {
    const fileName = 'genre';
    // Call the appropriate function based on method and path received
    switch (method) {
        case 'POST':
            return createRessources(requestObject);
        case 'PUT':
            return updateRessources(requestObject);
        case 'DELETE':
            return deleteRessources(requestObject);
        default:
            return getRessources(requestObject, fileName);
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