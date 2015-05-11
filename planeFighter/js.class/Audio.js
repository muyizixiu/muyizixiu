function Audio(){
			this.id=document.getElementsByTagName('audio');
			this.play=function(num,bool){
				var id=this.id[num];
				if(!id){
					console.log("error................!")
				}
				id.currentTime=0;
				if(bool){
					id.loop="";
					console.log(id.loop);
				}else{
					id.loop="loop";
				}
				id.play();
			}
		}
		var aud=new Audio();