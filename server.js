require("dotenv").config();
const app = require("./app");

port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port} `)
})
