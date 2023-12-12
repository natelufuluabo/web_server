export function routeValidator(route) {
    const routeWithoutQuery = route.split('?')[0];
    const routes = ['/', '/author', '/genre', '/book', '/bookinstance'];

    if (routes.includes(routeWithoutQuery)) return true;
    return false;
}

export function bodyParser(data) {
    for(let i = 0; i < data.length; i++) {
        if (data[i] === '' && i !== data.length - 1) {
            return JSON.parse(data.slice(i+1)[0]);
        } else return
    }
}