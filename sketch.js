var database;
var canvas;
var form;
var players, playersValue;
var write, colour, redButton, blueButton, whiteButton;
var greeting, title, button, input
var his = [];
function setup() {
  /////////////////////////////////////////////////////////
  var firebaseConfig = {
    apiKey: "AIzaSyCVp6jYy8ijpJc4bbzwEqCYjZWHsw1N6bk",
    authDomain: "c34-e6c5a.firebaseapp.com",
    databaseURL: "https://c34-e6c5a.firebaseio.com",
    projectId: "c34-e6c5a",
    storageBucket: "c34-e6c5a.appspot.com",
    messagingSenderId: "663661188638",
    appId: "1:663661188638:web:bc6f8f857403e8c5a9400f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  /////////////////////////////////////////////////////////
  database = firebase.database();
  console.log(firebase);
  /////////////////////////////////////////////////////
  canvas = createCanvas(600, 600);
  redButton = createButton('RED');
  blueButton = createButton('BLUE');
  whiteButton = createButton('WHITE');
  colour = "white";
  input = createInput("Name");
  button = createButton('ENTER');
  greeting = createElement('h2');
  title = createElement('h2');
  players = database.ref('Players').once("value");
}

function mouseDragged() {
  write = createSprite(mouseX, mouseY, 4, 4);
  write.shapeColor = colour;
}

function mouseReleased() {
  write.visible = false;
}

function display() {
  drawSprites();
}

function hide() {
  greeting.hide();
  button.hide();
  input.hide();
  title.hide();
}

function display() {
  title.html("DRAW");
  title.position(displayWidth / 2 - 50, 0);
  input.position(displayWidth / 2 - 40, displayHeight / 2 - 80);
  button.position(displayWidth / 2 + 30, displayHeight / 2);
  button.mousePressed(()=>{
    input.hide();
    button.hide();
    greeting.position(displayWidth / 2 - 40, displayHeight / 2 - 180);
    greeting.html("Hello " + input.value() + " waiting for second user"); 
    database.ref('/').update({
      Players:players+1
    }) 
    if (players.val() == 2) {
      var text = createElement('h2');
      text.html("You can start drawing and your friend can see you")
    };
  })
}

/*
 function mousePressed(button)  {
  input.hide();
  button.hide();
  greeting.html("Hello " + input.value() + " waiting for second user");
  greeting.position(displayWidth / 2 - 40, displayHeight / 2 - 180);
  players = database.ref('Players').once("value");
  players.update(players += 1);
  if (players.val() == 1) {
    var text = createElement('h2');
    text.html("You can start drawing and your friend can see you")
  };
};
*/



function draw() {
  background(0);
 
  redButton.mousePressed(() => { colour = "red" });
  blueButton.mousePressed(() => { colour = "blue" });
  whiteButton.mousePressed(() => { colour = "white" });

  mouseDragged();
  mouseReleased();
  //display();

  console.log(colour);
  console.log(players)

}