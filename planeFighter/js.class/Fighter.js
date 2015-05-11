function Fighter(id){
	this.id=id;
	this.bound=function(num){
		switch(num){
			case 1:
				this.id.style.top="0px";
			break;
			case 2:
				this.id.style.top=this.boundary.offsetHeight-this.id.offsetHeight+"px";
			break;
			case 3:
				this.id.style.left="0px";
			break;
			case 4:
				this.id.style.left=this.boundary.offsetWidth-this.id.offsetWidth+"px";
			break;
		}
	}
}
Fighter.prototype=new Move();
Fighter.prototype.constructor=Fighter;
var fighter=new Fighter(document.getElementById('fighter'));