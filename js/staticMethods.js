function test() {
  console.log('Este é o meu teste.');
};

class RemoteControl {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    test();
  };

  // Instance methods
  turnUpTheVolume() {
    this.volume += 2;
  };

  lowerTheVolume() {
    this.volume -= 2;
  };

  // Static method
  static ChangeControlBottles() {
    console.log('Ok, vou trocar.')
  }
};

const remoteControl1 = new RemoteControl('Samsung');

remoteControl1.turnUpTheVolume();
remoteControl1.turnUpTheVolume();
remoteControl1.turnUpTheVolume();

console.log(remoteControl1);

RemoteControl.ChangeControlBottles();