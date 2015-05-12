function CloudPlatform(){
	this.launchSpeedT=10000;
	this.init=function(){
		new Cloud();
	}
}
CloudPlatform.prototype=new Platform();
CloudPlatform.prototype.constructor=CloudPlatform;
var cloudPlatform=new CloudPlatform();
cloudPlatform.launch();