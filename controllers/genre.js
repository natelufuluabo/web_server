export function genreDispatcher(method, path) {
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
    return 'genre ressources retrieved';
}

function createRessources() {
    return 'genre ressources created';
}

function updateRessources() {
    return 'genre ressources updated';
}

function deleteRessources() {
    return 'genre ressources deleted';
}