export async function bookDispatcher(method, requestObject) {
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
    return 'book ressources retrieved';
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