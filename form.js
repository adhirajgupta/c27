class Form {

    constructor() {
        this.input = createInput("Name");
        this.button = createButton('ENTER');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }

    display() {
        this.title.html("DRAW");
        this.title.position(displayWidth / 2 - 50, 0);
        this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 80);
        this.button.position(displayWidth / 2 + 30, displayHeight / 2);
        this.button.mousePressed(() => {
        players.update(players=+1);    
        this.input.hide();
        this.button.hide();
        this.greeting.html("Hello " + this.input.value() + "waiting for second user");
        this.greeting.position(displayWidth / 2 - 40, displayHeight / 2 - 180);
        console.log(players)
         });


    }
}

