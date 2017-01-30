<template>
  <div id="app">
    <div v-for="(quiz, index) in quizez" v-show="index === questionindex">
    <h1>{{ quiz.category }}</h1>
    <!-- Questions: display a div for each question -->
    
      <h2>{{ quiz.question }}</h2>
      <!-- Responses: display a li for each possible response with a radio button -->
      <ol>
        <li v-for="answer in quiz.incorrect_answers">
          <label>
            <input type="radio" name="answer" v-model="answers[index]" :value="answer"> {{answer}}
          </label>
        </li>
      </ol>

  </div>
  <div v-if="questionindex < quizez.length">
  <button v-if="questionindex > 0" v-on:click="prev">
        prev
      </button>
      <button v-on:click="next">
        next
</button>
</div>

<span v-if="questionindex == quizez.length">Your Total score is {{score}} / {{quizez.length}}</span>

</div>
</template>

<script>
var quiz_questions = [
  {
    "category": "Entertainment: Film",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Who directed &quot;E.T. the Extra-Terrestrial&quot; (1982)?",
    "correct_answer": "Steven Spielberg",
    "incorrect_answers": [
      "Steven Spielberg",
      "Stanley Kubrick",
      "James Cameron",
      "Tim Burton"
    ]
  },
  {
    "category": "Entertainment: Video Games",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What is the main character of Metal Gear Solid 2?",
    "correct_answer": "Raiden",
    "incorrect_answers": [
      "Raiden",
      "Solidus Snake",
      "Big Boss",
      "Venom Snake"
    ]
  },
  {
    "category": "Science & Nature",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What is the hottest planet in the Solar System?",
    "correct_answer": "Venus",
    "incorrect_answers": [
      "Venus",
      "Mars",
      "Mercury",
      "Jupiter"
    ]
  },
  {
    "category": "Entertainment: Books",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What is Ron Weasley&#039;s middle name?",
    "correct_answer": "Bilius",
    "incorrect_answers": [
      "Bilius",
      "Arthur",
      "John",
      "Dominic"
    ]
  },
  {
    "category": "Politics",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Before 2011, &quot;True Capitalist Radio&quot; was known by a different name. What was that name?",
    "correct_answer": "True Conservative Radio",
    "incorrect_answers": [
      "True Conservative Radio",
      "True Republican Radio",
      "Texan Capitalist Radio",
      "United Capitalists"
    ]
  },
  {
    "category": "Entertainment: Film",
    "type": "multiple",
    "difficulty": "medium",
    "question": "This movie contains the quote, &quot;I love the smell of napalm in the morning!&quot;",
    "correct_answer": "Apocalypse Now",
    "incorrect_answers": [
      "Apocalypse Now",
      "Platoon",
      "The Deer Hunter",
      "Full Metal Jacket"
    ]
  },
  {
    "category": "History",
    "type": "multiple",
    "difficulty": "medium",
    "question": "The Herero genocide was perpetrated in Africa by which of the following colonial nations?",
    "correct_answer": "Germany",
    "incorrect_answers": [
      "Germany",
      "Britain",
      "Belgium",
      "France"
    ]
  },
  {
    "category": "Entertainment: Music",
    "type": "boolean",
    "difficulty": "medium",
    "question": "Ashley Frangipane performs under the stage name Halsey.",
    "correct_answer": "True",
    "incorrect_answers": [
      "True",
      "False"
    ]
  },
  {
    "category": "Entertainment: Books",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Under what pseudonym did Stephen King publish five novels between 1977 and 1984?",
    "correct_answer": "Richard Bachman",
    "incorrect_answers": [
      "Richard Bachman",
      "J. D. Robb",
      "Mark Twain",
      "Lewis Carroll"
    ]
  },
  {
    "category": "History",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In what prison was Adolf Hitler held in 1924?",
    "correct_answer": "Landsberg Prison",
    "incorrect_answers": [
      "Landsberg Prison",
      "Spandau Prison",
      "Ebrach Abbey",
      "Hohenasperg"
    ]
  }
]

export default {
  name: 'app',
  data : function (){
      return{
        questionindex:0,
        quizez:quiz_questions,
answers:Array(quiz_questions.length).fill(''),
      }
  },
   methods: {
    // Go to next question
    next: function() {
      this.questionindex++;
    },
    // Go to previous question
    prev: function() {
      this.questionindex--;
    }
 },
 computed:{
    score: function() {
      var total = 0;
        for (var i =0; i <this.answers.length; i++) {
          if(this.answers[i]==this.quizez[i].correct_answer){
            total +=1;
          }
        }
      return total;
  }
 }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
