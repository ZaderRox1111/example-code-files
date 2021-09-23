var http = require('http');

let example = 2 + 2;
example += 4;

console.log(example);

// Example comment
const exampleFunction = (paramOne, paramTwo) => {
    const This = {
        Theme: {
            is: 'beautiful!'
        }
    };

    for (let index = 0; index < paramOne; index++) {
        paramTwo[index] = 'String!';
    }

    // Will write out: beautiful
    console.log(This.Theme.is);
}

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);