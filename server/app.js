const http = require('http');
const app = http.createServer();
const url = require('url')
const querystring = require('querystring');
require('./models')
const User = require('./models/User.js')
let path = require('path');
const mime = require('mime');
const promisify = require('util').promisify;
const fs = require('fs');
app.on('request', async (req, res) => {

    let {
        query,
        pathname
    } = url.parse(req.url, true);
    console.log(query, pathname)
    let method = req.method;
    if (method == 'GET') {
        if (pathname == '/' || pathname == '/index') {
            res.writeHead(301, {
                location: '/dist/index.html'
            })
            return res.end();
        }
        let distReg = /^\/dist\//
        if (distReg.test(pathname)) {
            let realPath = path.join(__dirname,'../', pathname);
            let type = mime.getType(realPath);
            let readFile = promisify(fs.readFile);
            try {
                let f = await readFile(realPath);
                res.writeHead(200, {
                    "content-type": type
                });
                res.end(f);
            } catch (error) {
                res.writeHead(404, {
                    "content-type": type
                })
                res.end(JSON.stringify(error))
            }



        }
        if (pathname == '/listUsers') {
            let users = {};
            try {
                users = await User.find();
            } catch (error) {
                console.error(error)
            }
            res.writeHead('200', {
                'content-type': 'application/json;'
            })
            res.end(JSON.stringify(users))

        }

    } else if (method == 'POST') {
        let postData = '';
        req.on('data', (params) => {
            postData += params;
        })

        req.on('end', async () => {
            // postData = querystring.parse(postData);
            postData = JSON.parse(postData);
            console.log(postData)


            if (pathname == '/addUser') {
                let u = {};
                try {
                    u = await User.create(postData);
                } catch (error) {
                    console.error(error)
                }
                res.writeHead('200', {
                    'content-type': 'application/json;'
                })
                res.end(JSON.stringify(u))

            } else if (pathname == '/modifyUser') {
                let _id = postData._id;
                let { name,
                    age,
                    email,
                    password,
                    hobbies = [] } = postData
                try {
                    let _u = await User.updateOne({ _id }, { name, age, email, hobbies })
                    res.writeHead('200', {
                        'content-type': 'application/json;'
                    })
                    res.end(JSON.stringify({ name, age, email, hobbies }))
                } catch (error) {
                    console.error(error)
                    res.writeHead('200', {
                        'content-type': 'application/json;'
                    })
                    res.end(JSON.stringify(error))
                }

            } else if (pathname == '/removeUser') {
                let _id = postData._id;
                let { name,
                    age,
                    email,
                    password,
                    hobbies = [] } = postData
                try {
                    let _u = await User.deleteOne({ _id })
                    res.writeHead('200', {
                        'content-type': 'application/json;'
                    })
                    res.end(JSON.stringify({ _u }))
                } catch (error) {
                    console.error(error)
                    res.writeHead('200', {
                        'content-type': 'application/json;'
                    })
                    res.end(JSON.stringify(error))
                }
            }
        })

    } else if (method == 'DELETE') {

    } else {

    }

    // res.end('ok')
})
app.listen(3000);
console.log('服务已经启动在3000端口')