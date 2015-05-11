function KeyBoard(){
	this.flags={"37":0,"38":0,"39":0,"40":0,"32":0};//标志判断,KeyCode 作为关联;
	//各个动作对接处。
	this.keyDown={"37":"fighter.run(true);","39":"fighter.run(false);","38":"fighter.fly(true);","40":"fighter.fly(false);","32":"fighter.fire()"};
	this.keyUp={"37":"fighter.stop(true);","39":"fighter.stop(false);","38":"fighter.stopV(true)","40":"fighter.stopV(false);","32":"fighter.holdFire();"};
	this.listen=function(){
		var self=this;
		document.onkeydown=function(ev){
			var e=ev||window.event;
			var keyCode=e.keyCode||e.which;
			if(self.flags[keyCode]==0){
				self.flags[keyCode]=1;
				console.log(self.flags[keyCode]);
				//eval(self.keyDown[keyCode]);
			}
		}
		document.onkeyup=function(){
			var e=ev|window.event;
			var keyCode=e.which||e.keyCode;
			console.log(self.flags[keyCode]);
			self.flags[keyCode]=0;
		}
	}
}
//实例化键盘对象
var keyBoard=new KeyBoard();
keyBoard.listen();
