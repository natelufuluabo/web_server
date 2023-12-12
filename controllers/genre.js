export function genreDispatcher(method, requestObject) {
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
    return 'genre ressources retrieved';
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