import { authorDispatcher } from "./controllers/author.js";
import { bookDispatcher } from "./controllers/book.js";
import { bookinstanceDispatcher } from "./controllers/bookinstance.js";
import { genreDispatcher } from "./controllers/genre.js";

export function router(method, path) {
    if (path.includes('/author')) {
        // call author controller then return 
        return authorDispatcher(method, path);
    }
    if (path.includes('/genre')) {
        // call genre controller then return 
        return genreDispatcher(method, path); 
    }
    if (path.includes('/book')) {
        // call book controller then return 
        return bookinstanceDispatcher(method, path);
    }
    if (path.includes('/bookinstance')) {
        // call bookinstance controller then return 
        return bookDispatcher(method, path);    
    }
}