export function bookDispatcher(method, path) {
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
    return 'book ressources retrieved';
}

function createRessources() {
    return 'book ressources created';
}

function updateRessources() {
    return 'book ressources updated';
}

function deleteRessources() {
    return 'book ressources deleted';
}