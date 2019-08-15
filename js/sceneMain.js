class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }
  preload() {
    // load our images or sounds
    this.load.spritesheet('boy', 'images/boy.png', {
      frameWidth: 120,
      frameHeight: 200
    });
  }
  create() {
    // define our object
    this.boy = this.add.sprite(
      game.config.width / 2,
      game.config.height / 2,
      'boy'
    );
    this.boy.setInteractive();
    this.boy.on('pointerdown', this.onDown, this);
    this.boy.on('pointerup', this.onUp, this);

    var frameNames = this.anims.generateFrameNumbers('boy');

    this.anims.create({
      key: 'walk',
      // frames: [
      //   { key: 'boy', frame: 0 },
      //   { key: 'boy', frame: 1 },
      //   { key: 'boy', frame: 2 },
      //   { key: 'boy', frame: 3 },
      //   { key: 'boy', frame: 4 },
      //   { key: 'boy', frame: 5 }
      // ],
      frames: frameNames,
      frameRate: 8,
      repeat: -1
    });

    // this.boy.play('walk');
    // this.doWalk();
    this.graphics = this.add.graphics();
    this.graphics.lineStyle(8, 0xff0000);
    // this.graphics.moveTo(0, 0);
    // this.graphics.lineTo(100, 300);
    // this.graphics.strokePath();
    // this.graphics.strokeRect(100, 200, 50, 50);
    this.graphics.fillStyle(0xff00ff, 0.5);
    this.graphics.strokeCircle(100, 200, 60);
    this.graphics.fillCircle(100, 200, 60);

    this.text1 = this.add.text(
      game.config.width / 2,
      game.config.height / 2,
      'HELLO!',
      { fontFamily: 'Anton', color: 'rgb(255, 0, 0)', fontSize: '40px' }
    );
    this.text1.setOrigin(0.5, 0.5); // 文字預設是 0,0 => 改成 0.5, 0.5
  }
  onDown() {
    this.boy.alpha = 0.5;
  }
  onUp() {
    this.boy.alpha = 1;
  }
  doWalk() {
    this.tweens.add({
      targets: this.boy,
      duration: 2000,
      x: game.config.width,
      // y: 0,
      alpha: 0,
      onComplete: this.onCompleteHandler
    });
  }
  onCompleteHandler = (tween, targets, scope) => {
    // console.log('done');
    var boy = targets[0];
    boy.x = 0;
    boy.y = game.config.height / 2;
    boy.alpha = 1;
    this.doWalk();
  };
  update() {
    // constant running loop
    // this.boy.x += 2;
    // if (this.boy.x > game.config.width + 60) {
    //   this.boy.x = -60;
    // }
  }
}
