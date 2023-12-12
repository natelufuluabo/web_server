export function authorDispatcher(method, requestObject) {
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

function getRessources(requestObject) {
    return 'author ressources retrieved';
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