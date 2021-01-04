class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(400,100);

        var input=createInput("Name");
        input.position(450,200);

        var button=createButton("Play");
        button.position(450,230);

        var greeting=createElement('h3');

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var N=input.value();
            pc+=1
            player.update(N);
            player.updatepc(pc);
            
            greeting.html("Hello "+N);
            greeting.position(450,200)
        })
    }
}