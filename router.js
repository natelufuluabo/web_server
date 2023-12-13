import { authorDispatcher } from "./controllers/author.js";
import { bookDispatcher } from "./controllers/book.js";
import { genreDispatcher } from "./controllers/genre.js";

export async function router(method, path, requestObject) {
    if (path.includes('/author')) {
        // call author controller then return 
        return await authorDispatcher(method, requestObject);
    }
    else if (path.includes('/genre')) {
        // call genre controller then return 
        return await genreDispatcher(method, requestObject); 
    }
    else if (path.includes('/book')) {
        // call book controller then return 
        return await bookDispatcher(method, requestObject);
    }
}