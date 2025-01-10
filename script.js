let count = 0;
let otvetil = false;

class question{
    constructor (quest, answer1, answer2, answer3, answer4, correctanswer, img){
        this.quest = quest;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.correctanswer = correctanswer;
        this.img = img;
    }
}
            
const questions = new Array();
            
questions.push(new question("Как зовут этого персонажа?","Лизун","Подлиза","Мелкий","Шрек",2,"image/1943-1623515941.jpg"));
questions.push(new question("Как зовут этого персонажа?","Шер-Хан","Король Луи","Дон корнаж","Поночка",3,"image/1546499147116476856.jpg"));
questions.push(new question("Как зовут этого персонажа?","Матрёна","Утёна","Поночка","Гусёна",4,"image/Gosalyn.jpg"));
questions.push(new question("Как зовут этого персонажа?","Изма","Урсула","Круэлла","Зира",1,"image/IZ.jpg"));
questions.push(new question("Как зовут этого персонажа?","Джон","Джим","Джек","Джейк",4,"image/JL.jpg"));
questions.push(new question("Как зовут этого персонажа?","Ганту","Пликли","Джамбо","Хомяксвиль",3,"image/J.jpg"));
questions.push(new question("Как зовут этого персонажа?","Джим","Джон","Джейк","Джек",1,"image/eef04c8da1459336479fe5a43f2d192c.png"));
         
const currentquestion = 0;
            
test(questions[0]);
       
function test(vopros){
    Ans1.innerHTML=vopros.answer1;
    Ans2.innerHTML=vopros.answer2;
    Ans3.innerHTML=vopros.answer3;
    Ans4.innerHTML=vopros.answer4;
    Qimg.src = vopros.img;
    Question.innerHTML=vopros.quest;
}
       
function Answered(answer){
       
    if(otvetil)
       return;
       
    if( answer == questions[currentquestion].correctanswer )
        count++;
        
    document.getElementById("Ans"+answer).style.backgroundColor="red";        
    document.getElementById("Ans"+questions[currentquestion].correctanswer).style.backgroundColor="green";
    currentquestion++;
    otvetil=true;
}
       
function NextQuestion(){
    if(otvetil){
        if( currentquestion < questions.length ){
            clear();
            test(questions[currentquestion]);
        }else{
            Victoryna.style.display="none";
            End.style.display="block";
            h2end.innerHTML="Вы ответили на "+count+" из "+questions.length+" вопросов";
        }
        otvetil=false;
    }else{
        alert("Вы еще не ответили на вопрос");
    }
}
       
function clear(){
    Qimg.src="";
    Qimg.display = "none";
    Question="";
    
    for(let i = 1;i<=4;i++){
        document.getElementById("Ans"+i).innerHTML="";
        document.getElementById("Ans"+i).style.backgroundColor="white";
    }
}