export function routeValidator(route) {
    const routes = ['/', '/author', '/genre', '/book', '/bookinstance'];

    if (routes.includes(route)) return true;
    return false;
}