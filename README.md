## http-proxy: frames not being forwarded on node 4.x

Only reproducible with payloads larger than the threshold required for continuation
frames (presumably).

`npm install`

#### Works on Node 0.12.7
1. `nvm use 0.12.7`
2. `node index.js`

#### Does not work on Node 4.1.2

1. `nvm use 4.1.2`
2. `node index.js`

But works if you bypass proxy

1. Edit index.js, change flag `useProxy` to `false`
