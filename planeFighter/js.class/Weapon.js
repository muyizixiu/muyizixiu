function Weapon(owner){
	this.weaponLevel=1;
	this.launchSpeedT=1000;
	this.init=function(){
		switch(this.weaponLevel){
			case 1:
				this.f3();
			break;
			case 2:
				this.f2();
			break;
		}
	}
	this.f1=function(left,top){
		left=left?left:owner.id.offsetLeft+owner.id.offsetWidth/2;
		top=top?top:owner.id.offsetTop;
		new Bullet(left,top);
	}
	this.f2=function(){
		this.f1(owner.id.offsetLeft+owner.id.offsetWidth/2-20);
		this.f1(owner.id.offsetLeft+owner.id.offsetWidth/2);
		this.f1(owner.id.offsetLeft+owner.id.offsetWidth/2+20);
	}
	this.f3=function(){
		new Bullet(owner.id.offsetLeft+owner.id.offsetWidth/2-20,owner.id.offsetTop,false,false,true);
		new Bullet(owner.id.offsetLeft+owner.id.offsetWidth/2,owner.id.offsetTop);
		new Bullet(owner.id.offsetLeft+owner.id.offsetWidth/2+20,owner.id.offsetTop,false,false,true);
	}
}
Weapon.prototype=new Platform();
Weapon.prototype.constructor=Weapon;
var weapon=new Weapon(fighter);