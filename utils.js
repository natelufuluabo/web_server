export function routeValidator(path) {
    const routeWithoutQuery = path.split('?')[0];
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

export function queryParser(path) {
    if (!path.includes('?')) return 
    const queryString = path.split('?')[1];
    const queryParams = queryString.split('&');
    let queryObject = {}
    for(let i = 0; i < queryParams.length; i++) {
        const kv = queryParams[i].split("=");
        queryObject = { ...queryObject, [kv[0]]: kv[1] }
    }
    return queryObject
}