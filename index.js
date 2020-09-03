const server = require("./api/server.js");

const port = process.evn.PORT || 5567;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
