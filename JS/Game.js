class Game{
     constructor(){

     }
    getState(){
        var GSref=database.ref('gameState');
        GSref.on("value",function(data){
            GS=data.val();
        })

    }
    updateGS(state){
        database.ref('/').update({
          'gameState':state  
        })
    }
    start(){
        if(GS===0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
    }
}