
export class Minicio extends Phaser.Scene{

    constructor(){
        super({key:'menu-inicio'});
    }

    preload(){

        this.load.image('FondoMenu', 'resources/MenuInicio.png')
        //SONIDO      
        .audio('sonidoinicio','sounds/MenuInicioSound.mp3')
        .audio('sonidoDisparo','sounds/disparoSound.mp3')
        //BOTON JUGAR
        .spritesheet('botonJugar','resources/botones/Jugar.png',{ frameWidth: 286, frameHeight: 102 })
        //BOTON CREDITOS
        .spritesheet('botonCreditos','resources/botones/Creditos.png',{ frameWidth: 286, frameHeight: 102 })
        //BOTON AJUSTES
        .spritesheet('botonAjustes','resources/botones/Ajustes.png',{ frameWidth: 286, frameHeight: 102 })

    }
    startGame(){
        this.scene.start('game');
    }

    create(){

        var sonidoInicio = this.sound.add('sonidoinicio');
        var sonidoDisparo = this.sound.add('sonidoDisparo');
        sonidoInicio.loop =true;
        sonidoInicio.play();
        

        this.add.image(1280/2, 720/2, 'FondoMenu');   

        //BOTON JUGAR
        const jugar = this.add.sprite(1040, 200, 'botonJugar').setInteractive();
        

          // Define las animaciones del botón
            this.anims.create({
                key: 'buttonNormal',
                frames: this.anims.generateFrameNumbers('botonJugar', { start: 0, end: 0 }),
                frameRate: 1,
                repeat: 0
            });

            this.anims.create({
                key: 'buttonHover',
                frames: this.anims.generateFrameNumbers('botonJugar', { start: 1, end: 1 }),
                frameRate: 1,
                repeat: 0
            });

            this.anims.create({
                key: 'buttonClick',
                frames: this.anims.generateFrameNumbers('botonJugar', { start: 2, end: 2 }),
                frameRate: 1,
                repeat: 0
            });

            // Configura la interactividad del botón
            jugar.on('pointerover', () => {
                jugar.play('buttonHover');
            });

            jugar.on('pointerout', () => {
                jugar.play('buttonNormal');
            });

            jugar.on('pointerdown', () => {
                jugar.play('buttonClick');
                //meter tiempo espera
                this.scene.transition({
                    target: 'seleccion',
                    duration:1000,
                });
                sonidoInicio.stop();
                sonidoDisparo.play();
            });

            jugar.on('pointerup', () => {
                jugar.play('buttonHover');
            });

        //BOTON CREDITOS
        const creditos = this.add.sprite(1040, 340, 'botonCreditos').setInteractive();
            
            // Define las animaciones del botón
            this.anims.create({
                key: 'buttonNormal1',
                frames: this.anims.generateFrameNumbers('botonCreditos', { start: 0, end: 0 }),
                frameRate: 1,
                repeat: 0
            });

            this.anims.create({
                key: 'buttonHover1',
                frames: this.anims.generateFrameNumbers('botonCreditos', { start: 1, end: 1 }),
                frameRate: 1,
                repeat: 0
            });

            this.anims.create({
                key: 'buttonClick1',
                frames: this.anims.generateFrameNumbers('botonCreditos', { start: 2, end: 2 }),
                frameRate: 1,
                repeat: 0
            });

            // Configura la interactividad del botón
            creditos.on('pointerover', () => {
                creditos.play('buttonHover1');
            });

            creditos.on('pointerout', () => {
                creditos.play('buttonNormal1');
            });

            creditos.on('pointerdown', () => {
                creditos.play('buttonClick1');
                this.scene.transition({
                    target: 'creditos',
                    duration:1000,
                });
                sonidoInicio.stop();
                sonidoDisparo.play();
            });

            creditos.on('pointerup', () => {
                creditos.play('buttonHover1');
            });

        //BOTON Ajustes
        const ajustes = this.add.sprite(1040, 480, 'botonAjustes').setInteractive();
        
            // Define las animaciones del botón
            this.anims.create({
                key: 'buttonNormal2',
                frames: this.anims.generateFrameNumbers('botonAjustes', { start: 0, end: 0 }),
                frameRate: 1,
                repeat: 0
            });

            this.anims.create({
                key: 'buttonHover2',
                frames: this.anims.generateFrameNumbers('botonAjustes', { start: 1, end: 1 }),
                frameRate: 1,
                repeat: 0
            });

            this.anims.create({
                key: 'buttonClick2',
                frames: this.anims.generateFrameNumbers('botonAjustes', { start: 2, end: 2 }),
                frameRate: 1,
                repeat: 0
            });

            // Configura la interactividad del botón
            ajustes.on('pointerover', () => {
                ajustes.play('buttonHover2');
            });

            ajustes.on('pointerout', () => {
                ajustes.play('buttonNormal2');
            });

            ajustes.on('pointerdown', () => {
                ajustes.play('buttonClick2');
                this.scene.transition({
                    target: 'ajustes',
                    duration:1000,
                    
                });
                sonidoInicio.stop();
                sonidoDisparo.play();
            });

            ajustes.on('pointerup', () => {
                ajustes.play('buttonHover2');
            });
        
    }
    
    startGame(){
        this.scene.start('game');
    }

}
