import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const res = {
   "response_code": 0,
   "results": [
      {
         "category": "Geography",
         "type": "multiple",
         "difficulty": "easy",
         "question": "Which of the following languages does NOT use the Latin alphabet?",
         "correct_answer": "Georgian",
         "incorrect_answers": [
            "Turkish",
            "Swahili",
            "Vietnamese"
         ]
      },
      {
         "category": "Entertainment: Video Games",
         "type": "multiple",
         "difficulty": "medium",
         "question": "What is the name of the virus in &quot;Metal Gear Solid 1&quot;?",
         "correct_answer": "FOXDIE",
         "incorrect_answers": [
            "FOXENGINE",
            "FOXALIVE",
            "FOXKILL"
         ]
      },
      {
         "category": "Art",
         "type": "multiple",
         "difficulty": "hard",
         "question": "What year was the Mona Lisa finished?",
         "correct_answer": "1504",
         "incorrect_answers": [
            "1487",
            "1523",
            "1511"
         ]
      },
      {
         "category": "Entertainment: Television",
         "type": "multiple",
         "difficulty": "medium",
         "question": "Which character does voice actress Tara Strong NOT voice?",
         "correct_answer": "Bubbles (2016)",
         "incorrect_answers": [
            "Twilight Sparkle",
            "Timmy Turner",
            "Harley Quinn"
         ]
      },
      {
         "category": "Science & Nature",
         "type": "multiple",
         "difficulty": "medium",
         "question": "What stage of development do the majority of eukaryotic cells remain in for most of their life?",
         "correct_answer": "Interphase",
         "incorrect_answers": [
            "Prophase",
            "Stasis",
            "Telophase"
         ]
      },
      {
         "category": "Entertainment: Video Games",
         "type": "multiple",
         "difficulty": "medium",
         "question": "In &quot;Paper Mario: The Thousand Year Door&quot;, what is Hooktail&#039;s weakness?",
         "correct_answer": "The Sound of Crickets",
         "incorrect_answers": [
            "Attacks from Koopas",
            "The &quot;Ice Storm&quot; Item",
            "The Hammer"
         ]
      },
      {
         "category": "Entertainment: Video Games",
         "type": "multiple",
         "difficulty": "hard",
         "question": "In the &quot;Halo&quot; series, what is the name of the race of aliens humans refer to as &quot;Grunts&quot;?",
         "correct_answer": "Unggoy",
         "incorrect_answers": [
            "Huragok",
            "Sangheili",
            "Yanme&#039;e"
         ]
      },
      {
         "category": "Geography",
         "type": "multiple",
         "difficulty": "medium",
         "question": "How many countries share a land border with Luxembourg?",
         "correct_answer": "3",
         "incorrect_answers": [
            "4",
            "2",
            "5"
         ]
      },
      {
         "category": "Entertainment: Video Games",
         "type": "multiple",
         "difficulty": "easy",
         "question": "In Pokemon, the ability Wonder Guard is exclusive to which Pokemon? ",
         "correct_answer": "Shedinja ",
         "incorrect_answers": [
            "Sableye",
            "Spiritomb",
            "Silvally "
         ]
      },
      {
         "category": "Entertainment: Japanese Anime & Manga",
         "type": "multiple",
         "difficulty": "hard",
         "question": "Who was the Director of the 1988 Anime film &quot;Grave of the Fireflies&quot;?",
         "correct_answer": "Isao Takahata",
         "incorrect_answers": [
            "Hayao Miyazaki",
            "Satoshi Kon",
            "Sunao Katabuchi"
         ]
      }
   ]
}



const Changement = (donnee) => {
   const results = donnee.results
   const newList = results.map((elemOfResults) => {
      const neweElemOfResults = {}
      neweElemOfResults.reponseJuste = 1
      const reponseCorrecte = elemOfResults.correct_answer
      const reponseFausse = elemOfResults.incorrect_answers
      neweElemOfResults.reponses = [reponseCorrecte].concat(reponseFausse)
      neweElemOfResults.question = elemOfResults.question
      return neweElemOfResults
   })
   return newList
}


function Random() {
   var maxNumber = 4;
   var randomNumber = Math.floor((Math.random() * maxNumber));
   return randomNumber
}



const dataReceived = { "response_code": 0, "results": [{ "category": "R2VuZXJhbCBLbm93bGVkZ2U=", "type": "Ym9vbGVhbg==", "difficulty": "ZWFzeQ==", "question": "RnJlbmNoIGlzIGFuIG9mZmljaWFsIGxhbmd1YWdlIGluIENhbmFkYS4=", "correct_answer": "VHJ1ZQ==", "incorrect_answers": ["RmFsc2U="] }, { "category": "RW50ZXJ0YWlubWVudDogVmlkZW8gR2FtZXM=", "type": "bXVsdGlwbGU=", "difficulty": "ZWFzeQ==", "question": "V2hhdCB3YXMgdGhlIGZpcnN0IHZpZGVvIGdhbWUgaW4gdGhlIEJhdG1hbiAiQXJraGFtIiBzZXJpZXM\/", "correct_answer": "QXJraGFtIEFzeWx1bQ==", "incorrect_answers": ["QXJraGFtIEtuaWdodA==", "QXJraGFtIENpdHk=", "QXJraGFtIE9yaWdpbnM="] }, { "category": "RW50ZXJ0YWlubWVudDogVmlkZW8gR2FtZXM=", "type": "bXVsdGlwbGU=", "difficulty": "bWVkaXVt", "question": "SW4gUG9ydGFsIDIsIHRoZSBpY29uaWMgY2hhcmFjdGVyIEdMYURPUyBpcyB0dXJuZWQgaW50bzo=", "correct_answer": "QSBwb3RhdG8=", "incorrect_answers": ["QSB0b21hdG8=", "QSBsZW1vbg==", "QW4gYXBwbGU="] }, { "category": "U2NpZW5jZSAmIE5hdHVyZQ==", "type": "bXVsdGlwbGU=", "difficulty": "bWVkaXVt", "question": "V2hlcmUgZGlkIHRoZSBkb2cgYnJlZWQgIkNoaWh1YWh1YSIgb3JpZ2luYXRlPw==", "correct_answer": "TWV4aWNv", "incorrect_answers": ["RnJhbmNl", "U3BhaW4=", "UnVzc2lh"] }, { "category": "QW5pbWFscw==", "type": "bXVsdGlwbGU=", "difficulty": "aGFyZA==", "question": "V2hhdCBzY2llbnRpZmljIGZhbWlseSBkb2VzIHRoZSBBYXJkd29sZiBiZWxvbmcgdG8\/", "correct_answer": "SHlhZW5pZGFl", "incorrect_answers": ["Q2FuaWRhZQ==", "RmVsaWRhZQ==", "RXVwbGVyaWRhZQ=="] }, { "category": "R2VvZ3JhcGh5", "type": "bXVsdGlwbGU=", "difficulty": "ZWFzeQ==", "question": "V2hpY2ggb2YgdGhlc2UgaXMgdGhlIG5hbWUgb2YgdGhlIGxhcmdlc3QgY2l0eSBpbiB0aGUgVVMgc3RhdGUgVGVubmVzc2VlPw==", "correct_answer": "TWVtcGhpcw==", "incorrect_answers": ["VGhlYmVz", "QWxleGFuZHJpYQ==", "THV4b3I="] }, { "category": "RW50ZXJ0YWlubWVudDogVmlkZW8gR2FtZXM=", "type": "bXVsdGlwbGU=", "difficulty": "bWVkaXVt", "question": "V2hpY2ggb2YgdGhlc2UgaXMgTk9UIGEgZ2FtZSB1bmRlciB0aGUgV29ybXMgc2VyaWVzPw==", "correct_answer": "TWFqb3IgTWFsZnVuY3Rpb24=", "incorrect_answers": ["Q3JhenkgR29sZg==", "Q2xhbiBXYXJz", "VWx0aW1hdGUgTWF5aGVt"] }, { "category": "U2NpZW5jZTogQ29tcHV0ZXJz", "type": "Ym9vbGVhbg==", "difficulty": "aGFyZA==", "question": "VGhlIElCTSBQQyB1c2VkIGFuIEludGVsIDgwMDggbWljcm9wcm9jZXNzb3IgY2xvY2tlZCBhdCA0Ljc3IE1IeiBhbmQgOCBraWxvYnl0ZXMgb2YgbWVtb3J5Lg==", "correct_answer": "RmFsc2U=", "incorrect_answers": ["VHJ1ZQ=="] }, { "category": "RW50ZXJ0YWlubWVudDogQ29taWNz", "type": "bXVsdGlwbGU=", "difficulty": "aGFyZA==", "question": "V2hhdCBpcyB0aGUgcmVhbCBoYWlyIGNvbG91ciBvZiB0aGUgbWFpbnN0cmVhbSBjb21pYyBib29rIHZlcnNpb24gKEVhcnRoLTYxNikgb2YgRGFyZWRldmlsPw==", "correct_answer": "QmxvbmRl", "incorrect_answers": ["QXVidXJu", "QnJvd24=", "QmxhY2s="] }, { "category": "RW50ZXJ0YWlubWVudDogVmlkZW8gR2FtZXM=", "type": "bXVsdGlwbGU=", "difficulty": "bWVkaXVt", "question": "SW4gIk92ZXJ3YXRjaCIsIGhvdyBtdWNoIGhlYWx0aCBkb2VzIFJvYWRob2cncyAiVGFrZSBhIEJyZWF0aGVyIiBhYmlsaXR5IHJlY292ZXI\/", "correct_answer": "MzAw", "incorrect_answers": ["MTAw", "MjAw", "NDAw"] }] }

function parser (data) {
   const results = data.results
   const transfo = results.map((element) => {
      const category = atob(element.category)
      const correct_answer = atob(element.correct_answer)
      const difficulty = atob(element.difficulty)
      const incorrect_answers = element.incorrect_answers.map((answer) => {
         const newAnswer = atob(answer)
         return newAnswer
      })
      const question = atob(element.question)
      const type = atob(element.type)
      return {
         category: category,
         correct_answer: correct_answer,
         difficulty: difficulty,
         incorrect_answers: incorrect_answers,
         question: question,
         type: type
      }
   })
   return transfo
}

const ChangementBis = (results) => {
   const newList = results.map((elemOfResults) => {
      const neweElemOfResults = {}
      const reponseJuste = Random()
      neweElemOfResults.reponseJuste = reponseJuste
      const reponseCorrecte = elemOfResults.correct_answer
      const reponseFausse = elemOfResults.incorrect_answers
      reponseFausse.splice(reponseJuste, 0, reponseCorrecte)
      neweElemOfResults.reponses = reponseFausse
      neweElemOfResults.question = elemOfResults.question
      return neweElemOfResults
   })
   return newList
}



export const fetchQuizz = createAsyncThunk(
   'users/fetchByIdStatus',
   async () => {
      const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple&encode=base64").then((resp) => resp.json())
      return response
   }
)


export const counterSlice = createSlice({
   name: "counter",
   initialState: {
      count: 0,
      userName: "",
      titre: "",
      commencer: "Begin",
      consigne: "",
      index: -1,
      reponse: "",
      numero: 0,
      score: 0,
      fin: 10,
      question: 1,
      accueil: 0,
      test: [1, 42, 17, 0, 98, 23, 16, 44, 7, 70, 54],
   },
   reducers: {
      increment: (state) => {
         state.count += 1;
      },
      decrement: (state) => {
         state.count -= 1;
      },
      incrementByAmount: (state, action) => {
         state.count += action.payload;
      },
      changeName: (state, action) => {
         state.userName = action.payload;
      },
      changeNumber: (state, action) => {
         state.count = action.payload;
      },
      changeTitre: (state, action) => {
         state.titre = action.payload;
      },
      changeReponse: (state, action) => {
         state.list.reponses = action.payload;
      },
      fonctionCommencer: (state) => {
         state.commencer = "Next question"
         state.index += 1
      },
      fonctionSuivant: (state, action) => {
         state.index += 1
         state.numero = 0
         state.reponse = action.payload
         state.question += 1
      },
      fonctionChoix: (state, action) => {
         if (state.numero == 1) {
            return
         }
         state.reponse = action.payload
         state.numero += 1
         if (state.list[state.index].reponseJuste == (state.reponse - 1) && state.numero == 1) {
            state.score += 1
         }
      },
      fonctionRecommencer: (state) => {
         state.count = 0
         state.userName = ""
         state.titre = ""
         state.commencer = "Begin"
         state.consigne = ""
         state.index = -1
         state.reponse = ""
         state.numero = 0
         state.score = 0
         state.fin = 10
         state.question = 1
      },
      fonctionCroissant: (state) => {
         (state.test).sort(function (a, b) { return a - b })
      },
      fonctionDecroissant: (state) => {
         (state.test).sort(function (a, b) { return b - a })
      },
      fonctionPaire: (state) => {
         state.test = (state.test).map((nombre) => {
            if ((nombre % 2) == 0)
               return nombre
            return null
         })
      },
      fonctionImpaire: (state) => {
         state.test = (state.test).map((nombre) => {
            if ((nombre % 2) != 0)
               return nombre
            return (
               <span>nombre</span>
            )
         })
      },
      fonctionDubble: (state) => {
         state.test = (state.test).map((nombre) =>
            nombre * 2)
      },
      fonctionAcceuil: (state) => {
         state.accueil = 1
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchQuizz.fulfilled, (state, action) => {
            const coucou = parser(action.payload)
            state.list = ChangementBis(coucou)
         })
   }
});


export const { increment, decrement, incrementByAmount, changeName, changeNumber, changeTitre, changeReponse, fonctionCommencer,
   fonctionRecommencer, fonctionCroissant, fonctionDecroissant, fonctionPaire, fonctionImpaire, fonctionDubble, fonctionSuivant,
   fonctionChoix, fonctionAcceuil } = counterSlice.actions;

export default counterSlice.reducer;