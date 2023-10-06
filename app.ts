import express from "express";

import path from "path"
const app = express();
const port = 8080

app.use(express.static(path.join(__dirname, 'views')));

app.set("view engine", "pug"); // установка пути к представлениям. По умолчанию - views

app.use("/", function(request, response){
      
    response.render("index");
}); 


app.listen(port, () => console.log(`http://localhost:${port}`));
