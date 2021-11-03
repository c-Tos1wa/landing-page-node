const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req,res) => {
  res.send("Hello World");
});

app.get("/index", (req, res) => {
  const devStack = ["Frontend", "Backend", "Fullstack"];
  const analytics = ["Engenharia de Dados", "Ciência de Dados"]
  res.render("../view/index", 
    { 
      title: "Bem-vindo, Bluemer!",
      dev: devStack,
      data: analytics,
    }
  );
});

app.listen(port, () => 
  console.log(`Servidor rodando em http://localhost:${port}`)
)
