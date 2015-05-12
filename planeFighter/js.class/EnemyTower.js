function EnemyTower(){
	this.launchSpeedT=3000;
	this.init=function(){
		new Enemy();
	}
}
EnemyTower.prototype=new Platform();
EnemyTower.prototype.constructor=EnemyTower;
var enemyTower=new EnemyTower();
enemyTower.launch();