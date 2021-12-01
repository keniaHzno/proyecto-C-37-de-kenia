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
    background("orange");
    //write code to show a heading for showing the result of Quiz
    //   var greeting = createElement('h3');
Contestant.getPlayerInfo();
    //call getContestantInfo( ) here
if(allContestants !== undefined){
  fill ("Blue");
  var display_Answers=200;
  textSize(20);
  text("NOTE: los concursantes que respondieron correcto estan el color verde!",
  130,215);


    //write condition to check if contestantInfor is not undefined
for(var plr in allContestants){
  var correctAns = "3";
  if(correctAns === allContestants[plr].answer)
  fill("Green")
  else
  fill("red");
  display_Answers+=40;
  textSize(25);
  text(allContestants[plr].name+ ": "+ allContestants[plr].answer,200,display_Answers)
}
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}}
