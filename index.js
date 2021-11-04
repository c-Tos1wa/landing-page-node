const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

let mensagem = "";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());



app.get("/", (req, res) => {
  const devStack = ["Frontend", "Backend", "Fullstack"];
  const analytics = ["Engenharia de Dados", "Ciência de Dados"]
  res.render("../view/index", 
    { 
      title: "Bem-vindo, Bluemer!",
      dev: devStack,
      data: analytics,
      mensagem
    }
  );
});

app.post("/subscribe", (req, res) => {
  const { nome, email } = req.body;  
  mensagem = `Parabéns ${nome}, sua inscrição foi realizada co sucesso. 
  Um email foi enviado para ${email}`
  res.redirect("/");
})

app.listen(port, () => 
  console.log(`Servidor rodando em http://localhost:${port}`)
)
