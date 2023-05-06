class intro extends Phaser.Scene {

    constructor() {
        super('intro');
    }

    preload(){

    }

    create(){

        //create text object
        this.textObject = this.add.text(
            250, //x
            300,//y
            "McAteer Studios", //text
            {
                font: "40px Arial",
                color: "#ffffff",
            } //style
        );

        this.textObject = this.add.text(
            300, //x
            400,//y
            "(Click Anywhere to Continue)", //text
            {
                font: "15px Arial",
                color: "#ffffff",
            } //style
        );
        
        this.input.once('pointerdown', function() {
            this.scene.start("Scene1")
        }, this)

    }

    update(){}
}

class Scene1 extends Phaser.Scene {
    constructor() {
        super('Scene1');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('plane', 'plane.png');

    }
    create(){
        //create image object 
        this.imageObject = this.add.image(
            600,//x
            400,//y
            'plane',//imagename
        )
        this.imageObject.setScale(1) //resize
        
        //create text object
        this.textObject = this.add.text(
            350, //x
            50,//y
            "You fly high into the night. (Click to continue)", //text
            {
                font: "20px Arial",
                color: "#ffffff",
            } //style
        );

        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xF5DF4D, 0.8); //color, opacity
        this.graphics.fillCircle(100,200,55);   //x, y, radius
        this.graphics.fillStyle(0xF6F1D5, 1); //color, opacity
        this.graphics.fillCircle(100,200,50);   //x, y, radius

        this.input.once('pointerdown', function() {

            this.cameras.main.once('camerafadeincomplete', function(camera) {
                camera.fadeOut(4000);
            });


            this.scene.start("Scene2")
        }, this)
        
        this.cameras.main.fadeIn(4000);


    }
    update(){}
}

class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('title', 'title.png');
        this.load.image('city', 'city.png');

    }
    create(){
        //create image object 
        this.imageObject = this.add.image(
            250,//x
            110,//y
            'title',//imagename
        )
        this.imageObject.setScale(1) //resize

        //create image object 
        this.imageObject = this.add.image(
            515,//x
            450,//y
            'city',//imagename
        )
        this.imageObject.setScale(0.6) //resize
        
        //create text object
        this.textObject = this.add.text(
            60, //x
            250,//y
            "Play", //text
            {
                font: "40px Montserrat",
                color: "#ffffff",
            } //style
        );

        //create text object
        this.textObject = this.add.text(
            60, //x
            325, //y
            "Options", //text
            {
                font: "40px Montserrat",
                color: "#ffffff",
            } //style
        );

        //create text object
        this.textObject = this.add.text(
            60, //x
            400, //y
            "Credits", //text
            {
                font: "40px Montserrat",
                color: "#ffffff",
            } //style
        );

        //create text object
        this.textObject = this.add.text(
            60, //x
            475, //y
            "Quit", //text
            {
                font: "40px Montserrat",
                color: "#ffffff",
            } //style
        );
    

    }
    update(){}
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: "0x09301f",
    scene: [intro, Scene1, Scene2] 
}

let game = new Phaser.Game(config);



