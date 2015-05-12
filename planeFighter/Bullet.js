function Bullet(top,left,src,className,flag){
	this.id=null;
	this.prototype.flag=0;
	this.src=src?:"./bullet.png";
	this.init=function(top,left){
		this.id=document.createElement("div");
		this.id.className=className?:"bullet";
		playArea,appendChild(this.id);
		this.id.style.left=left-this.id.offsetWidth/2+"px";
		this.id.style.top=top-this.id.offsetHeight+"px";
	}
	this.init(top,left);
	this.fly(true);
	if(flag){
		if(this.prototype.flag%2==0){
			this.run(true);
		}else{
			this.run(false);
		}
		this.prototype.flag++;
	}
}
Bullet.prototype=new Move();
Bullet.prototype.constructor=Bullet;