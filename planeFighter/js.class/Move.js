function Move(){
	this.speedT=30;//default speed;
	this.speedL=5;//default stepLength;
	this.boundary=document.getElementById("playArea");
	this.horizonTimer=new Array(2);
	this.id=null;
	this.run=function(L_or_R,id){
		if(!id){
			id=this.id;
		}
		var i=1;
		if(L_or_R){
			i=0;
		}
		var self=this;
		this.horizonTimer[i]=window.setInterval(function(){
			self.horizonMove(L_or_R,id);
		},this.speedT);
	}
	this.horizonMove=function(L_or_R,id){
		var speed=this.speedL;
		if(L_or_R){
			speed=0-speed;
		}
		id.style.left=id.offsetLeft+speed+"px";
		this.isHit(id);
		this.isBoundaryH(id);
	}
	this.isHit=function(){
	};
	this.leftBoundary=0;
	this.rightBoundary=this.boundary.offsetWidth;
	this.isBoundaryH=function(id){
		if(!id){
			id=this.id;
		}
		var L=id.offsetLeft;
		var left=this.leftBoundary;
		var right=this.rightBoundary-id.offsetWidth;
		if(L<left){
			this.bound(3,id);
		}
		if(L>right){
			this.bound(4,id);
		}
	}
	this.bound=function(flag){
		console.log("error");
	}
	this.speedH=5;
	this.verticalTimer=new Array(2);
	this.fly=function(U_or_D,id){
		var self=this;
		var i=1;
		if(!id){
			id=this.id;
		}
		if(U_or_D){
			i=0;
		}
		this.verticalTimer[i]=window.setInterval(function(){
			self.verticalMove(U_or_D,id);
		},this.speedT);
	}
	this.verticalMove=function(U_or_D,id){
		var speed=this.speedH;
		if(U_or_D){
			speed=0-speed;
		}
		id.style.top=id.offsetTop+speed+"px";
		this.isHit(id);
		this.isBoundaryV(id);
	}
	this.topBoundary=0;
	this.bottomBoundary=this.boundary.offsetHeight;
	this.isBoundaryV=function(id,top,bottom){
		if(!id){
			id=this.id;
		}
		var H=id.offsetTop;
		var	top=this.topBoundary;
		var	bottom=this.bottomBoundary-id.offsetHeight;
		if(H<top){
			this.bound(1,id);
		}
		if(H>bottom){
			this.bound(2,id);
		}
	}
	this.stop=function(L_or_R,U_or_D){
		var timer=this.horizonTimer;
		var i=1;
		if(U_or_D){
			timer=this.verticalTimer;
		}
		if(L_or_R){
			i=0;
		}
		window.clearInterval(timer[i]);
	}
	this.hold=function(U_or_D){
		this.stop(U_or_D,true);	
	}
	this.destroy=function(id){
		var _id=id?id:this.id;
		playArea.removeChild(_id);
	}
}