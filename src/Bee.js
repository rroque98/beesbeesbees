var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow'
  // this.age = 
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
Bee.prototype.job = 'keep on growing';