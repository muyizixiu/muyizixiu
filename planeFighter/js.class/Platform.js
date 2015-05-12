function Platform(){
	this.launchTimer=null;
	this.launchSpeedT=300;
	this.init=function(){

	}
	this.launch=function(){
		var self=this;
		this.launchTimer=window.setInterval(function(){
			self.init();
		},this.launchSpeedT);
	}
	this.stop=function(){
		window.clearInterval(this.launchTimer);
	}
}