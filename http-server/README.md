# HTTP server in NodeJS

Application architecture:

Command Line or Browser => Router => Create Users || Upload / Retrieve Images || Fetch Metadata

Link: github.com/armenavanesi/http-with-node

HTTP components:

- http.Server
- http.IncomingMessage
- http.ServerResponse
- http.Agent
- http.ClientRequest
- Methods
- Constants (e.g: console.log(http.STATUS_CODE[404]) => "Not found")

EventEmitter: https://nodejs.org/api/http.html#http_event_abort

## HTTPS

Create key and cert for https demo

```bash
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes -subj "/"
```

If the node does NOT start with https with EACCESS permission denied

```bash
sudo node server-4-https.js
```

or

```bash
sudo apt-get install libcap2-bin 
sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\``
```
