const http = require('http');

const routes = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write(`
      <html>
        <head>
          <title>Hello from Server!</title>
        </head>
        <body>
          <h1>This is being served</h1>
          <p>This content is being served from a Node.js server.</p>
          <p>This is a second paragraph.</p>
          <h2>Create a new user</h2>
          <form action="/create-user" method="POST">
            <input type="text" name="newUser">
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);
    res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString().split('=')[1];
      console.log(parsedBody);
      res.statusCode = 302;
      res.setHeader('Location', '/users');
      return res.end();
    });
  } 

  if (url === '/users') {
    res.write(`
    <html>
      <head>
        <title>Users</title>
      </head>
      <body>
        <h1>Users</h1>
        <ul>
          <li>David</li>
          <li>Heather</li>
          <li>Cocoa</li>
        </ul>
      </body>
    </html>
    `);
    res.end();
  }
}

const server = http.createServer(routes);

server.listen(3005);