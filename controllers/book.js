import { getRessources } from "../utils.js";

export async function bookDispatcher(method, requestObject) {
    const fileName = 'book';
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
    return 'book ressources created';
}

function updateRessources(requestObject) {
    return 'book ressources updated';
}

function deleteRessources(requestObject) {
    return 'book ressources deleted';
}