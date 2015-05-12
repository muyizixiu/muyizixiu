function Weapon(owner){
	this.init=function(){
		new Cloud();
	}
}
Weapon.prototype=new Platform();
Weapon.prototype.constructor=Weapon;