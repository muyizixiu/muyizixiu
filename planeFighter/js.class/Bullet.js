function Bullet(left,top,src,className,flag){
	this.id=null;
	if(!Bullet.prototype.flag){
		Bullet.prototype.flag=0;
	}
	this.src=src?src:"./bullet.png";
	this.init=function(top,left){
		this.id=document.createElement("div");
		this.id.className=className?className:"bullet";
		playArea.appendChild(this.id);
		this.id.style.left=left-this.id.offsetWidth/2+"px";
		this.id.style.top=top-this.id.offsetHeight+"px";
	}
	this.init(top,left);
	this.fly(true);
	if(flag){
		if(Bullet.prototype.flag%2==0){
			this.run(true);
		}else{
			this.run(false);
		}
		Bullet.prototype.flag++;
	}
	this.bound=function(){
		this.destroy();
	}
	this.isHit=function(){
		var enemies=document.getElementsByTagName('p');
				for (var i = enemies.length - 1; i >= 0; i--) {
					if((this.id.offsetLeft+this.id.offsetWidth)<enemies[i].offsetLeft||this.id.offsetLeft>(enemies[i].offsetLeft+enemies[i].offsetWidth)||this.id.offsetTop>(enemies[i].offsetTop+enemies[i].offsetHeight)||(this.id.offsetTop+this.id.offsetHeight)<enemies[i].offsetTop){
					}else{
						Enemy.id=enemies[i];
						this.destroy();
						this.destroy(Enemy.id);
						fighter.score.getScore(fighter);
					}
				}
	}
}
Bullet.prototype=new Move();
Bullet.prototype.constructor=Bullet;