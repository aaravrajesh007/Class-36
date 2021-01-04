class Player{
    constructor(){

    }
    getCount(){
        var pcref=database.ref('playerCount');
        pcref.on("value",function(data){
            pc=data.val();
        })
    }
    updatepc(count){
        database.ref('/').update({
            'playerCount':count
          })
    }
    update(N){
        var playerIndex="player"+pc;
        database.ref('/').update({
            'name':N  
          })
    }
}