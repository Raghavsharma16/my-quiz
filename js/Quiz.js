class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
   

    //write code to show a heading for showing the result of Quiz
    textSize(30);
    text("Results", 120, 100)
    //call getContestantInfo( ) here
    contestant.getContestantInfo();
    //write condition to check if contestantInfor is not undefined
    if(allContestantInfo !== undefined){

          fill("Blue");
        textSize(20);
       
    
      //write code to add a note here
      fill("Blue");
      textSize(20);
      text("NOTE:contestantwhoanswercorrecthighlightedingreencolor",130,230);
   
  }
}
}