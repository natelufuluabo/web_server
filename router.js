import { getRessources, createRessources, updateRessources, deleteRessources } from "./utils.js"

export function router(method, path) {
    console.log(`${method} request made at path ${path}`)
    switch (method) {
        case 'POST':
            return createRessources();
        
        case 'PUT':
            return updateRessources();
        
        case 'DELETE':
            return deleteRessources()
        
        default :
            return getRessources();
        
    }
}