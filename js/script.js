// alert('Hello!')

// confirm('Вы учите ява скрипт?')

// prompt("Какой язык вы учите?", "пока не в курсе")

// const skill = document.getElementById('skill')
// const isLove = document.getElementById('isLove')
// const skillText = prompt("Какой язык вы учите?", "пока не в курсе")
// const isLoveValue = confirm('Вы любите изучаемый язык?')
// skill.innerText = skillText

// console.log(isLoveValue)
// isLove.innerText = isLoveValue

const gameState = {
  taskInProcess: false,
  rightAnswer: null,
};

const getRandomNumInRange = (min, max) => {
  const randomNum = (Math.random() * (max - min) + min).toFixed(0);
  return randomNum
}

const getTask = () => {
  const randomNum1 = getRandomNumInRange(0, 100);
  const randomNum2 = getRandomNumInRange(0, 100);
  const symbol = (Math.random() > 0.5) ? "+" : "-"
  const task = `${randomNum1} ${symbol} ${randomNum2}`
  gameState.rightAnswer = eval(task)
  return task
}

const toggleGameState = () => {
  gameState.taskInProcess = !gameState.taskInProcess
}

const gameEl = document.getElementById('game').children
const title = gameEl[0]
const userTask = gameEl[1]
const userAnswer = gameEl[2]
const btnGame = gameEl[3]


const startGameFunc = () => {
  // console.log("click")
  if (!gameState.taskInProcess) {
    title.innerText = "Игра началась!"
    userAnswer.value = null
    const task = getTask()
    userTask.innerText = task
    userAnswer.hidden = false
    btnGame.innerText = "Проверить!"
    toggleGameState()
  } else {
    const isRight = gameState.rightAnswer == userAnswer.value
    userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
    title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
    btnGame.innerText = "Начать заново!"
    toggleGameState()

  }
}

btnGame.addEventListener('click', startGameFunc)
userAnswer.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    startGameFunc()
  } else if (e.key === "Escape") {
    userAnswer.blur()
  }
})

const chooseEl = document.querySelectorAll(".choosed_block-container > div")
const counterEl = document.querySelector(".choosed_block span")

const choosedState = {
  countEl: 0,
}

const chCount = (value) => {
  choosedState.countEl += value
  counterEl.innerText = choosedState.countEl
}

const eventFunc = (e) => {
    // chooseEl[i].className = "choosed_element"
    if (e.target.className === "") {
      e.target.className = "choosed_element"
      chCount(1)
    } else {
        e.target.className = ""
        chCount(-1)
    }
  }

for (i = 0; i < chooseEl.length; i++) {
  chooseEl[i].addEventListener('click', eventFunc)
}

chooseEl[2].removeEventListener('click', eventFunc)