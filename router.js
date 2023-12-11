import { authorDispatcher } from "./controllers/author.js";
import { bookDispatcher } from "./controllers/book.js";
import { bookinstanceDispatcher } from "./controllers/bookinstance.js";
import { genreDispatcher } from "./controllers/genre.js";

export function router(method, path) {
    if (path.includes('/author')) {
        // call author controller then return 
        authorDispatcher(method, path);
        return 
    }
    if (path.includes('/genre')) {
        // call genre controller then return 
        genreDispatcher(method, path);
        return 
    }
    if (path.includes('/book')) {
        // call book controller then return 
        bookinstanceDispatcher(method, path);
        return 
    }
    if (path.includes('/bookinstance')) {
        // call bookinstance controller then return 
        bookDispatcher(method, path);
        return 
    }
}