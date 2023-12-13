import net from 'net';
import fs from 'fs/promises';
import { router } from './router.js';
import { routeValidator, bodyParser, queryParser, idParser } from './utils.js';

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', async (data) => {
    const requestData = data.toString();
    const requestLines = requestData.split('\r\n');

    // Assuming the first line of the HTTP request contains the method and path
    const firstLine = requestLines[0];
    const [method, path] = firstLine.split(' ');

    if (path === '/') {
      const successHeader = `HTTP/1.1 200 OK\r\nContent-Type: text/html`;
      const fileContent = await fs.readFile('./www/index.html', 'utf8');
      const contentLength = Buffer.byteLength(fileContent, 'utf8');
      const response = `${successHeader}\r\nContent-Length: ${contentLength}\r\n\r\n${fileContent}`;
      socket.write(response);
      socket.end();
    } else {
      if (routeValidator(`/${path.split('/')[1]}`)) {
        const requestObject = {
          id: idParser(path),
          query: queryParser(path),
          body: bodyParser(requestLines)
        }
        const response = await router(method, path, requestObject);
        socket.write(response);
        socket.end();
      } else {
        const errorHeader = `HTTP/1.1 404 Not Found\r\nContent-Type: application/json`;
        const body = JSON.stringify({ message: 'Invalid URL. Endpoint does not exist' });
        const response = `${errorHeader}\r\n\r\n${body}`;
        socket.write(response);
        socket.end();
      }
    }
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server listening on 127.0.0.1:3000');
});
