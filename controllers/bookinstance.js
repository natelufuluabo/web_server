export function bookinstanceDispatcher(method, requestObject) {
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
    return 'book instance ressources retrieved';
}

function createRessources(requestObject) {
    return 'book instance ressources created';
}

function updateRessources(requestObject) {
    return 'book instance ressources updated';
}

function deleteRessources(requestObject) {
    return 'book instance ressources deleted';
}