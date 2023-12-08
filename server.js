import net from 'net';

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    const requestData = data.toString();
    const requestLines = requestData.split('\r\n');

    // Assuming the first line of the HTTP request contains the method and path
    const firstLine = requestLines[0];
    const [method, path] = firstLine.split(' ');

    const response = `HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\nRequested Path: ${path}\n`;
    socket.write(response);

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
