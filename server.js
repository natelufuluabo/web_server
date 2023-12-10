import net from 'net';
import { router } from './router.js';
import { routeValidator } from './utils.js';

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', async (data) => {
    const requestData = data.toString();
    const requestLines = requestData.split('\r\n');

    // Assuming the first line of the HTTP request contains the method and path
    const firstLine = requestLines[0];
    const [method, path] = firstLine.split(' ');

    if (path === '/') {
      const successHeader = `HTTP/1.1 200 OK\r\nContent-Type: text/plain`;
      socket.write(successHeader);
      socket.end();
    } else {
      const pathSegments = path.split('/');
      if (routeValidator(`/${pathSegments[1]}`)) {
        const successHeader = `HTTP/1.1 200 OK\r\nContent-Type: text/plain`;
        socket.write(successHeader);
        socket.end();
      } else {
        const errorHeader = `HTTP/1.1 404 Not Found\r\nContent-Type: text/plain`;
        socket.write(errorHeader);
        socket.end();
      }
    }


    // const contentLength = Buffer.byteLength(router(method, path), 'utf8');

    // const response = `${successHeader}\r\nContent-Length: ${contentLength}\r\n\r\n${router(method, path)}`;

  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server listening on 127.0.0.1:3000');
});
