export function bookinstanceDispatcher(method, path) {
    // Call the appropriate function based on method and path received
    switch (method) {
        case 'POST':
            return createRessources();
        case 'PUT':
            return updateRessources();
        case 'DELETE':
            return deleteRessources();
        default:
            return getRessources();
    }
}

function getRessources() {
    return 'book instance ressources retrieved';
}

function createRessources() {
    return 'book instance ressources created';
}

function updateRessources() {
    return 'book instance ressources updated';
}

function deleteRessources() {
    return 'book instance ressources deleted';
}