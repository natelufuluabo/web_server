export function getRessources() {
    return 'ressources retrieved';
}

export function createRessources() {
    return 'ressources created';
}

export function updateRessources() {
    return 'ressources updated';
}

export function deleteRessources() {
    return 'ressources deleted';
}

export function routeValidator(route) {
    const routes = ['/', '/author', '/genre', '/book', '/bookinstance'];

    if (routes.includes(route)) return true;
    return false;
}