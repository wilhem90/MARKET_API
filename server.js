const http = require("http")
const { app } = require("./app")
const port = process.env.PORT || 3030

const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Server is runing now http://localhost:${port}`);
})