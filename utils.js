export function routeValidator(route) {
    const routes = ['/', '/author', '/genre', '/book', '/bookinstance'];

    if (routes.includes(route)) return true;
    return false;
}

export function bodyParser(data) {
    for(let i = 0; i < data.length; i++) {
        if (data[i] === '') {
            return JSON.parse(data.slice(i+1)[0]);
        }
    }
}