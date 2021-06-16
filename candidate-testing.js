const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b:
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
    console.log("\r");
  }
  //console.log(candidateAnswers);
}


function gradeQuiz(candidateAnswers) { 
  // TODO 1.2c
  let numCorrect = 0;
  let numQuestions = questions.length;
  console.log(`Candidate Name: ${candidateName}`);
  for (let i = 0; i < questions.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numCorrect += 1;
    } 
    console.log(`${i + 1}) ${questions[i]}\nYour answer: ${candidateAnswers[i]}\nCorrect answer: ${correctAnswers[i]}\n`)
  }

let grade = numCorrect / numQuestions * 100;

console.log(`>>> Overall Grade: ${grade}% (${numCorrect} out of ${numQuestions} responses correct) <<<`);

if (grade >= 80) {
    console.log(`>>> Satus: PASSED <<<`);
  } else {
    console.log(`>>> Satus: FAILED <<<`);
}


//  >>> Overall Grade: 40% (2 of 5 responses correct) <<<
//  >>> Status: FAILED <<< 

  return grade;
}


function runProgram() {
  askForName();
  console.log(`Hello ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};