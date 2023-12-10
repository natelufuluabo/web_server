import { getRessources, createRessources, updateRessources, deleteRessources } from "./utils.js"

export function router(method, path) {
    if (path.includes('/author')) {
        // call author controller then return 
        console.log('author controller will be called');
        return 
    }
    if (path.includes('/genre')) {
        // call genre controller then return 
        console.log('genre controller will be called');
        return 
    }
    if (path.includes('/book')) {
        // call book controller then return 
        console.log('book controller will be called');
        return 
    }
    if (path.includes('/bookinstance')) {
        // call bookinstance controller then return 
        console.log('bookinstance controller will be called');
        return 
    }
}