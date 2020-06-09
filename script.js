let  ul=document.getElementById('ul');
  let  btn=document.getElementById('button');
  let  scoreCard=document.getElementById('scoreCard');
  let  quizBox=document.getElementById('questionBox');
  let op1=document.getElementById('op1');
  let op2=document.getElementById('op2');
  let op3=document.getElementById('op3');
  let op4=document.getElementById('op4');


      let app={
                questions:[
                          {q:'What was Beyonces last album?',options:['The Gift', 'Homecoming','Beyonce','4'],
                            answer:1},

                          {q:'Which former One Direction member released Watermelon Sugar and Adore You?',options:['Harry Styles', 'Niall Horan','Zayn Malik','Louis Tomlinson'],
                            answer:1},

                          {q:'What was Britney Spears first single called?',options:['Oops I Did It Again', 'Hit Me Baby One Time','Toxic','Im A Slave For U'],
                            answer:2},

                          {q:'Ariana Grande has had five albums out - how many reached Number One in the UK?',options:['2', '4','3','5'],
                            answer:3},

                          {q:'Which Drake song broke No.1 records in Summer 2016?',options:['Fake Love', 'Hotline Bling','One Dance','Passionfruit'],
                            answer:3},

                          {q:'Which music artist has sold the most records of all time?',options:['Michael Jackson', 'The Beatles','Elvis Presley','One Direction'],
                            answer:2},

                          {q:'Who had a hit single in 1992 with I Will Always Love You the theme from The Bodyguard?',options:['Celine Dion', 'Whitney Houston','Dolly Parton','Mariah Carey'],
                            answer:2},

                          {q:'Bohemian Rhapsody and We Will Rock You was recorded by which group?',options:['The Beatles', 'Oasis','Take That','Queen'],
                            answer:4},

                          {q:'What is BTS latest album called?',options:['Wings', 'Dark & Wild','Map Of The Soul : 7','Hope World'],
                            answer:3},

                          {q:'Who is the first black woman to headline Coachella?',options:['Rihanna', 'Keri Hilson','Beyonce','Solange'],
                            answer:3},

                          {q:'What is Michael Jacksons best selling album?',options:['Thriller', 'Bad','Invincible','Dangerous'],
                            answer:1},

                           {q:'From which artist did Rihanna sample from in her song Please Dont Stop The Music?',options:['Timberland', 'Kanye West','Michael Jackson','Frank Ocean'],
                            answer:3},
                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Quiz Over......!!!"      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                   
                         let id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Correct";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                         	ele.innerHTML="Wrong";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.questions.length+"/"+this.score;
                }
 
           }


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 
