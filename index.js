const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "aman", email: "aman@gmail.com" },
  { id: 2, name: "jaman", email: "jaman@gmail.com" },
  { id: 3, name: "ayman", email: "ayman@gmail.com" },
];

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("users management server is running on port");
});
app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
    console.log('post api is hitting server');
   console.log(req.body);
   const newUser = req.body
   newUser.id = users.length + 1;
   users.push(newUser);
   res.send(newUser);
});

app.listen(port, () => {
  console.log(`server listening on port:${port}`);
});
