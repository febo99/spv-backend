import express from "express";
const app = express();
const port = 8080;

const letters = "abcdefghijklmnopqrstuvwxyz";
const names = ["Klemen", "Dalibor", "Ziga", "Gasper", "Mario","Renato", "Jan", "Nejc"];
const food = ["Jufka", "Kebab", "Potica", "Cevapi v lepinji", "Francoska solata","Kasnice", "Regratova solata", "Cebula z bucnim oljem"];
const drinks = ["Pivo Lasko", "Pivo Ozujsko", "Smarnica", "Gemaj", "Fram Belo","Jurka", "Traminec", "Pelinkovec"];

const randomNumberGenerator = (max:number) =>{
    return Math.floor(Math.random() * Math.floor(max));
}

app.get( "/randomNumber", ( req, res ) => {
    res.send(randomNumberGenerator(100));
} );
app.get( "/randomLetter", ( req, res ) => {
    res.send(letters[randomNumberGenerator(27)]);
} );
app.get( "/randomName", ( req, res ) => {
    res.send(names[randomNumberGenerator(8)]);
} );
app.get( "/randomFood", ( req, res ) => {
    res.send(food[randomNumberGenerator(8)]);
} );
app.get( "/randomDrink", ( req, res ) => {
    res.send(drinks[randomNumberGenerator(8)]);
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
