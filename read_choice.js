function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function getRandom(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
var takes = localStorage.getItem("takes")
let tasks = JSON.parse(takes);
console.log(tasks);
const a = takes[2];
const b = takes[6];
var score=0;                                       
var answer;
var id_ans;
function cal(){
var duck = [0,0,0,0];
var seq_num = getRandom(5,7);
var hole = getRandomInt(seq_num);
if(a==1){
    var starter = getRandomInt(5);
        var multiply = getRandom(2,5) ;
        console.log(starter);
        console.log(multiply);
        var text="";
        for(let i=0;i<seq_num;i++){
            if(i==hole){text+="_ ";answer = starter;}
            else{text+= starter;
            text+= " "; }
            starter+=multiply;
       
    }
}
else if(a==2){
    var type = getRandomInt(2);
    if(type==0){
        var starter = getRandomInt(10);
        var multiply = getRandom(2,10) ;
        console.log(starter);
        console.log(multiply);
        var text="";
        for(let i=0;i<seq_num;i++){
            if(i==hole){text+="_ ";answer = starter;}
            else{text+= starter;
            text+= " ";}
            starter+=multiply;
        
        }
    }
    else{
        var starter = getRandom(1,10) ;
        var multiply = getRandom(2,10) ;
        console.log(starter);
        console.log(multiply);
        var text="";
        for(let i=0;i<seq_num;i++){
            if(i==hole){text+="_ ";answer = starter;}
            else{text+= starter;
            text+=" "; }
            starter*=multiply;
       
        }
        
    }
}
else{
    var type = getRandomInt(2);
    if(type==0){
        var starter = getRandomInt(50);
        var multiply = getRandom(2,50) ;
        console.log(starter);
        console.log(multiply);
        var text="";
        for(let i=0;i<seq_num;i++){
            if(i==hole){text+="_ ";answer = starter;}
            else{text+= starter;
            text+= " ";}
            starter+=multiply;
        
        }
    }
    else{
        var starter = getRandom(1,50) ;
        var multiply = getRandom(2,50) ;
        console.log(starter);
        console.log(multiply);
        var text="";
        for(let i=0;i<seq_num;i++){
            if(i==hole){text+="_ ";answer = starter;}
            else{text+= starter;
            text+=" ";}
            starter*=multiply;
        
        }
        
    }
}
duck[0] = starter;
duck[1] = Math.floor(answer/2)-3;
duck[2] = answer*2 + 5;
duck[3] = answer;
var state = [-1,-1,-1,-1];
var check = [0,0,0,0]
var count = 0;
while(count<4){
    var x =  getRandom(0,4);
    if(state[count]==-1 && check[x]==0){
    state[count] = x;
     check[x]= 1;
    if(x==3){id_ans = count;}
    count+=1;
    }
}
console.log(state)
console.log(state[id_ans]);
var paragraph = document.getElementById("problem");
    paragraph.innerHTML = text;
    var paragraph = document.getElementById("id01");
    paragraph.innerHTML = duck[state[0]];
    var paragraph = document.getElementById("id02");
    paragraph.innerHTML = duck[state[1]];
    var paragraph = document.getElementById("id03");
    paragraph.innerHTML = duck[state[2]];
    var paragraph = document.getElementById("id04");
    paragraph.innerHTML = duck[state[3]];
}
 
cal();
if(b==3){
    console.log("check");
    const button1 = document.getElementById('id01');
        button1.addEventListener('click', function() {
            if(id_ans==0){score+=20;} 
            else{score-=10;}
            var paragraph = document.getElementById("score");
            if(score<0){score=0;}
            console.log(score.toString());
            var text1 = "Score: " + score;
            paragraph.innerHTML = text1; 
            cal();
        });
    const button2 = document.getElementById('id02');
        button2.addEventListener('click', function() {
            if(id_ans==1){score+=20;} 
            else{score-=10;}
            var paragraph = document.getElementById("score");
            if(score<0){score=0;}
            var text1 = "Score: " + score.toString(); 
            paragraph.innerHTML = text1; 
            cal();
        });
    const button3 = document.getElementById('id03');
        button3.addEventListener('click', function() {
            if(id_ans==2){score+=20;} 
            else{score-=10;}
            var paragraph = document.getElementById("score");
            if(score<0){score=0;}
            var text1 = "Score: " + score.toString();
            paragraph.innerHTML = text1; 
            cal();
        });
    const button4 = document.getElementById('id04');
        button4.addEventListener('click', function() {
            if(id_ans==3){score+=20;} 
            else{score-=10;}
            var paragraph = document.getElementById("score");
            if(score<0){score=0;}
            var text1 = "Score: " + score.toString();
            paragraph.innerHTML = text1; 
            cal();
        });
    }
    else if(b==2){
        console.log("check");
        const button1 = document.getElementById('id01');
            button1.addEventListener('click', function() {
                if(id_ans==0){score+=20;
                var paragraph = document.getElementById("score");
                if(score<0){score=0;}
                console.log(score.toString());
                var text1 = "Score: " + score;
                paragraph.innerHTML = text1; 
                cal();
            }
            });
        const button2 = document.getElementById('id02');
            button2.addEventListener('click', function() {
                if(id_ans==1){score+=20;
                var paragraph = document.getElementById("score");
                if(score<0){score=0;}
                var text1 = "Score: " + score.toString(); 
                paragraph.innerHTML = text1; 
                cal();
                }
            });
        const button3 = document.getElementById('id03');
            button3.addEventListener('click', function() {
                if(id_ans==2){score+=20; 
                var paragraph = document.getElementById("score");
                if(score<0){score=0;}
                var text1 = "Score: " + score.toString();
                paragraph.innerHTML = text1; 
                cal();
                }
            });
        const button4 = document.getElementById('id04');
            button4.addEventListener('click', function() {
                if(id_ans==3){score+=20;
                var paragraph = document.getElementById("score");
                if(score<0){score=0;}
                var text1 = "Score: " + score.toString();
                paragraph.innerHTML = text1; 
                cal();
                }
            });
            
            
        }
    