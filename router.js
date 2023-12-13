import { authorDispatcher } from "./controllers/author.js";
import { bookDispatcher } from "./controllers/book.js";
import { bookinstanceDispatcher } from "./controllers/bookinstance.js";
import { genreDispatcher } from "./controllers/genre.js";

export async function router(method, path, requestObject) {
    if (path.includes('/author')) {
        // call author controller then return 
        return authorDispatcher(method, requestObject);
    }
    else if (path.includes('/genre')) {
        // call genre controller then return 
        return await genreDispatcher(method, requestObject); 
    }
    else if (path.includes('/bookinstance')) {
        // call bookinstance controller then return 
        return bookinstanceDispatcher(method, requestObject);    
    }
    else if (path.includes('/book')) {
        // call book controller then return 
        return bookDispatcher(method, requestObject);
    }
}