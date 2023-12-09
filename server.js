import net from 'net';
import fs from 'fs/promises';
import { router } from './router.js';

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', async (data) => {
    const requestData = data.toString();
    const requestLines = requestData.split('\r\n');

    // Assuming the first line of the HTTP request contains the method and path
    const firstLine = requestLines[0];
    const [method, path] = firstLine.split(' ');

    router(method, path);

    // const successHeader = `HTTP/1.1 200 OK\r\nContent-Type: text/html`;
    // const errorHeader = `HTTP/1.1 404 Not Found\r\nContent-Type: text/plain`;
    
    // if (path === '/' || path === '/index.html') {
    //   try {
    //     const payload = await fs.readFile('./www/index.html', 'utf8');
    //     const contentLength = Buffer.byteLength(payload, 'utf8');
    //     const response = `${successHeader}\r\nContent-Length: ${contentLength}\r\n\r\n${payload}`;
    //     socket.write(response);
    //   } catch (error) {
    //     console.error(error);
    //     socket.write(errorHeader);
    //   }
    // } else {
    //   socket.write(errorHeader);
    // }

    // Close the socket when done
    socket.end();
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server listening on 127.0.0.1:3000');
});
