const express = require("express") ;
const connectDB = require("./config/db.js") ;
const routes = require("./routes/index.js") ; 
require("./config/db");
const app = express();

// JSON
app.use(express.json());

app.use(routes);

app.get("/", (req, res) => {
  res.send("I'm Working!!");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
