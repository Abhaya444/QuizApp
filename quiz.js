const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
  };

const {correctAnswer, options, question} = questionObj;

let score = 0;

const questionElement = document.getElementById("question");
questionElement.textContent = questionObj.question;

//To fetch option div
const optionEl = document.getElementById("options");

const scoreEl = document.getElementById("score");

//Populating the Options div with the buttons
options.forEach((opt) => {
  // Creating button  and append it to the option div
  const btn = document.createElement('button');
  btn.textContent = opt;
  optionEl.appendChild(btn);

  //Event handling on the button
  btn.addEventListener("click", ()=> {
    if(opt === correctAnswer){
      score ++;
    }else{
      score = score -0.25;
    }
    console.log(score);
    scoreEl.textContent = `Score: ${score}`;
    questionElement.textContent = "Quiz Completed"
  })

})



