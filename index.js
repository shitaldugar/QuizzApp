const quizDB=[
    { question:"Q1.The correct sequence of HTML tags for starting a webpage is",

      a:"Head, Title, HTML, body",
      b:"HTML, Body, Title, Head",
      c:"HTML, Head, Title, Body",   
      d:"HTML, Head, Title, Body",
      ans:"ans3",
    },
    {
     question:"Q2. Which of the following tag is used to insert a line-break in HTML?",

      a:"<br>",
      b:"<a>",
      c:"<pre>",
      d:"<b>",
      ans:"ans4",
    },
    {
     question:"Q3:How to create an unordered list (a list with the list items in bullets) in HTML?",
      a:"<ul>",
      b:"<ol>",
      c:"<li>",
      d:"<i>",
      ans:"ans1",

    },
    {
    question:"q4.Which of the following tag is used to add rows in the table?",
     a:"<td> and </td>",
     b:"<th> and </th>",
     c:"<tr> and </tr>",
     d:"None of the above",
     ans:"ans3",
   },

];
const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit=document.querySelector("#submit");
const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');

let questionCount=0;
let score=0;
const loadQuestion=()=>{
  //console.log(quizDB[0]);
    const questionList=quizDB[questionCount];
   // console.log(questionList);
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}
loadQuestion();

 
const getCheckAnswer= () =>
{
  let answer;
  answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){//inbuilt method to check checked answer
    console.log("checked");
    answer=curAnsElem.id;
  }
 
  });
  console.log("hi",answer);
   return answer

};
const deselectAll=()=>{
  answers.forEach((curAnsElem)=>curAnsElem.checked=false);
};

submit.addEventListener('click',() => {
  const checkedAnswer=getCheckAnswer();
//console.log("hey",quizDB[questionCount]);
if(checkedAnswer==quizDB[questionCount].ans){
  //console.log(quizDB[questionCount].ans);

  score++;
  //console.log(score);
};
questionCount++;
deselectAll();
if(questionCount<quizDB.length){
  loadQuestion();

}
else{
  showScore.innerHTML=`
  <h3>you scored ${score}/${quizDB.length} </h3>
  <button class="btn"onclick="location.reload()">Play again</button>`;

  showScore.classList.remove('scoreArea');
 
};

  //console.log(showScore);

 
});

