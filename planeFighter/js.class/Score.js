function Score(){
			this.cloumn=document.getElementById("scoreCloumn");
			this.redCloumn=document.getElementById("score");
			this.score=0;
			this.player;
			this.getScore=function(player){
				this.player=player;
				this.score+=5;
				console.log(this.score);
				this.update();
			}
			this.update=function(){
				if(this.score<100){
				this.redCloumn.style.height=this.score*2+"px";
			}else{
				this.score=0;
				weapon.weaponLevel=2;
			}
			}
		}
		var position=0;
		window.setInterval(function(){
			playArea.style.backgroundPosition="0px "+position+"px";
			position+=1;
		},30)
		fighter.score=new Score();