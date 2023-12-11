export function authorDispatcher(method, path) {
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
    return 'author ressources retrieved';
}

function createRessources() {
    return 'author ressources created';
}

function updateRessources() {
    return 'author ressources updated';
}

function deleteRessources() {
    return 'author ressources deleted';
}