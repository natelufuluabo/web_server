import { getRessources } from "../utils.js";

export async function authorDispatcher(method, requestObject) {
    const fileName = 'author';
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
    return 'author ressources created';
}

function updateRessources(requestObject) {
    return 'author ressources updated';
}

function deleteRessources(requestObject) {
    return 'author ressources deleted';
}