function Enemy(enegy,className){
	this.id=null;
	this.speedT=30;
	this.speedH=3;
	this.enegy=enegy?enegy:1;
	this.init=function(){
		this.id=document.createElement("p");
		this.id.className=className?className:"enemy";
		playArea.appendChild(this.id);
		this.id.style.left=Math.random()*(playArea.offsetWidth-this.id.offsetWidth)+"px";
	}
	this.bound=function(){
		this.destroy();
	}
	this.init();
	this.fly(false);
}
Enemy.prototype=new Move();
Enemy.prototype.constructor=Enemy;