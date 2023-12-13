import fs from 'fs/promises';

export function routeValidator(path) {
    const routeWithoutQuery = path.split('?')[0];
    const routes = ['/', '/author', '/genre', '/book'];

    if (routes.includes(routeWithoutQuery)) return true;
    return false;
}

export function bodyParser(data) {
    if (data[data.length - 1] === '') return
    for(let i = 0; i < data.length; i++) {
        if (data[i] === '') {
            return JSON.parse(data.slice(i+1)[0]);
        }
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

export function idParser(path) {
    if (path.split('/').length === 3 && path.split('/')[2] !== '') return path.split('/')[2];
    return 
}

function generateSuccessReponse(statusCode, data) {
    const successHeader = `HTTP/1.1 ${statusCode} OK\r\nContent-Type: application/json`;
    const body = JSON.stringify(data)
    return `${successHeader}\r\n\r\n${body}`;
}

function generateErrorResponse(statusCode, data) {
    const errorHeader = `HTTP/1.1 ${statusCode}\r\nContent-Type: application/json`;
    const body = JSON.stringify(data);
    const response = `${errorHeader}\r\n\r\n${body}`;
    return response;
}

async function fetchData(fileName) {
    try {
        const data = await fs.readFile(`./data/${fileName}.json`, 'utf8');
        
        const jsonData = JSON.parse(data).data;

        return { statusCode: 200, payload: jsonData }
    } catch (error) {
        console.log('Error reading JSON file:', error)
        return { statusCode: 500, payload: { message: 'Internal Server Error' }};
    }
}

export async function getRessources(requestObject, fileName) {
    const { statusCode, payload } = await fetchData(fileName);
    if (statusCode === 500) {
        return generateErrorResponse(statusCode, payload);
    }
    if (requestObject.id !== undefined) {
        const genre = payload.find(item => item.id === Number(requestObject.id));
        return generateSuccessReponse(statusCode, genre);
    }
    return generateSuccessReponse(statusCode, payload);
}