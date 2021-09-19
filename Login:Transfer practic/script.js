const userData = [

  {
    username: 'katya',
    userpassword: '11',
    content: [
      {
        body: 'Never forget you are working with people, all of whom have ambitions, ideas, difficulties, goals, and many other fundamentally similar.',
        date: 'Thu Sep 16 2021 13:04:39 GMT+0300 (Moscow Standard Time)',
        name: 'katya',
      },
      {
        body: 'Davi Giroux is the lead vocalist and guitarist of a rock band that recently released two singles on Spotify.',
        date: 'Thu Sep 13 2021 13:04:39 GMT+0300 (Moscow Standard Time)',
        name: 'katya',
      }
    ]
  },

  {
    username: 'ira',
    userpassword: '22',
    content: [
      {
        body: 'You can know that something is right but still struggle to do it.',
        date: 'Thu Sep 15 2021 13:04:39 GMT+0300 (Moscow Standard Time)',
        name: 'ira',
      },
      {
        body: 'X-Team em Português está de volta esta tarde às 19:30 (UTC-03). Será uma live interativa onde você pode fazer perguntas e participar em jogos para ganhar brindes exclusivos!.',
        date: 'Thu Sep 14 2021 13:04:39 GMT+0300 (Moscow Standard Time)',
        name: 'ira',
      },
      {
        body: 'Feed your focus. Starve your distractions.',
        date: 'Thu Sep 12 2021 13:04:39 GMT+0300 (Moscow Standard Time)',
        name: 'ira',
      }
    ]
  },

]


//  Selectors

// - Containers
const loginContainer = document.querySelector('.container-login')
const signUpContainer = document.querySelector('.container-signup')
const mainPageContainer = document.querySelector('.container-mainPage')

// - Кнопки переключения между Регой и Логином
const logRegSwitchBox = document.querySelector('.reg-mode')
const btnLoginMode = document.querySelector('.login-box')
const btnSignUpMode = document.querySelector('.reg-box')


// - SIGNUP

// -- Inputs
const inputUsername = document.querySelector('.input-username')
const inputPassword = document.querySelector('.input-password')
const inputRepeatPassword = document.querySelector('.input-password-repeat')

// -- Labels
const inputUsernameSignUpLabel = document.querySelector('.label-input-box-signUp-username')
const inputUsernameSignUpPassLabel = document.querySelector('.label-input-box-signUp-password')
const inputUsernameSignUpPassRepeatLabel = document.querySelector('.label-input-box-signUp-password-rep')

// -- Buttons
const btnSignUp = document.querySelector('.btn-signUp')

// -- Notification 
const boxWarning = document.querySelector('.notification')


// - LOGIN

// -- Inputs
const inputUsernameLogin = document.querySelector('.input-username-log')
const inputPasswordLogin = document.querySelector('.input-password-log')

// -- Labels
const inputUsernameLoginLabel = document.querySelector('.label-input-box-login-username')
const inputUsernameLoginPassLabel = document.querySelector('.label-input-box-login-password')

// -- Buttons
const btnLogin = document.querySelector('.btn-login')

// -- Notification 
const boxWarningLogin = document.querySelector('.notification-login')


// - MAIN PAGE
const welcomeTitle = document.querySelector('.mainPgae-welcomeTitle')

// -- Btn Sign Out
const btnSignOut = document.querySelector('.btn-exit')

// -- Add new content
const newContentBox = document.querySelector('.addNewContentBox')

// ---- Inputs
const inputBodyContent = document.querySelector('.body-content')

// -- Buttons
const btnAddContentWindow = document.querySelector('.addNewContentWindow')
const btnAddNewContent = document.querySelector('.btn-addContent')


// - POST BOX
const postContainer = document.querySelector('.post-box')

// - Add new content textatea
const textareaNewContent = document.querySelector('.body-content')
const symbolLeft = document.querySelector('.symbol-left')




// *** Функция формирования массива с данными по постам для выгрузки в интерфейс в порядке от более новой даты к более старой - возвращает массив

const updateArrayData = function (arr) {

  // когда мы добавляем новый пост, то мы обновляем интерфейс, до этого момоента при первой загрузке старницы в массиве newArray уже есть данные и получается6 что мы к уже имеющимся данным пушим дополнительные. Чтобы такого не было мы очищаем массив перед тем как обновлять его содержимое
  let newArray = []

  // пушим в пустой массив newArray содержащиеся в его объектах массивы с контентом и сразу spread их в один единый массив
  for (const item of arr) {

    //? item -> {username: 'katya', userpassword: '11', content: Array(2)}

    //? item.content -> [{body: 'xx', date: 'xx', name: ''}, {body: 'xx', date: 'xx', name: ''}] - на каждой итерации получаешь по массиву

    //  мы получим массив из массивов и его сразу в единый массив конвертнем
    newArray.push(...item.content)
  }

  //? newArray -> [{body: 'xx', date: 'xx', name: ''}, {…}, {…}, {…}, {…}]

  // фильтруем по date в объекте (элемент массива)
  newArray.sort(function (a, b) {

    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }

    return 0;

  })

  // возвращаем финальный отсортированный массив, который переписывет изначально определенный let newArray = []
  //? newArray -> [{body: 'xx', date: 'xx', name: ''}, {…}, {…}, {…}, {…}] - отсортированный уже по дате
  return newArray

}


// **** Функция выгрузки данных в интерфейс

const displayData = function (arr) {
  for (const item of arr) {

    // ? item -> {body: 'Never forget you are working...', date: 'Thu Sep 14 2021 13:04:39...', name: 'ira'} - на каждой итерации получаем подобное

    const titleHtml = `
      <div class="content-box"> 
      <p class="content-box-body">${item.body}</p> 
      <p class="content-author">Created by: <span class="content-author-name">${item.name}</span></p>
      </div>`

    postContainer.insertAdjacentHTML('beforeend', titleHtml)

  }
}


// передаем сформированный массив из функции updateArrayData в функцию вывода в интерфейс из него
displayData(updateArrayData(userData))









// ****** Анимация label для инпутов в блоке Регистрации/Логина *******

const labelClickMoveUp = function (label, input) {

  label.addEventListener('click', function () {

    label.classList.add('labelActive')
    // добавит фокус ин инпуту
    input.focus()

  })

}

labelClickMoveUp(inputUsernameSignUpLabel, inputUsername)
labelClickMoveUp(inputUsernameSignUpPassLabel, inputPassword)
labelClickMoveUp(inputUsernameSignUpPassRepeatLabel, inputRepeatPassword)

labelClickMoveUp(inputUsernameLoginLabel, inputUsernameLogin)
labelClickMoveUp(inputUsernameLoginPassLabel, inputPasswordLogin)

// inputUsernameSignUpLabel.addEventListener('click', function () {

//   inputUsernameSignUpLabel.classList.add('labelActive')
//   // добавит фокус ин инпуту
//   inputUsername.focus()

// })



// функция для отъезжания лейбла вверх при клике (фокусе) на инпуте
const inputLabelAnimationIn = function (inputName, labelName) {

  inputName.addEventListener('focusin', function () {
    labelName.classList.add('labelActive')
  })

}

// функция возврата лейбла обратно в инпут при снятии фокуса при условии что в нем ничего не напечатано
const inputLabelAnimationOut = function (inputName, labelName) {

  inputName.addEventListener('focusout', function () {

    // условие проверки есть что-то в инпуте или нет
    if (inputName.value.length > 0) {
      labelName.classList.add('labelActive')
    } else if (inputName.value.length === 0) {
      labelName.classList.remove('labelActive')
    }

  })

}

// параметры для страницы Регистрации
inputLabelAnimationIn(inputUsername, inputUsernameSignUpLabel)
inputLabelAnimationOut(inputUsername, inputUsernameSignUpLabel)

inputLabelAnimationIn(inputPassword, inputUsernameSignUpPassLabel)
inputLabelAnimationOut(inputPassword, inputUsernameSignUpPassLabel)

inputLabelAnimationIn(inputRepeatPassword, inputUsernameSignUpPassRepeatLabel)
inputLabelAnimationOut(inputRepeatPassword, inputUsernameSignUpPassRepeatLabel)

// параметры для страницы Логина
inputLabelAnimationIn(inputUsernameLogin, inputUsernameLoginLabel)
inputLabelAnimationOut(inputUsernameLogin, inputUsernameLoginLabel)

inputLabelAnimationIn(inputPasswordLogin, inputUsernameLoginPassLabel)
inputLabelAnimationOut(inputPasswordLogin, inputUsernameLoginPassLabel)









// ****** Блок Регистрации / Логина *******

// -- Кнопки переключения между Регой и Логином

btnLoginMode.addEventListener('click', function () {
  loginContainer.style.display = 'block'
  signUpContainer.style.display = 'none'
})


btnSignUpMode.addEventListener('click', function () {
  loginContainer.style.display = 'none'
  signUpContainer.style.display = 'block'
})


// после успешного логина записываем объект аккаунта в переменную, стобы потом использовать его данные
let currentAccount = userData[0] // ?????? тут вроде должна быть просто пустая переменная


// -- Функционал блока регистрации Sign Up -> eventhandler on btn "Sign Up"
btnSignUp.addEventListener('click', function (e) {

  e.preventDefault()


  const checkName = userData.find(function (item) {
    return item.username === inputUsername.value
  })

  if (!checkName && inputUsername.value.length && inputPassword.value.length && inputPassword.value === inputRepeatPassword.value) {

    const newUser = {
      username: inputUsername.value,
      userpassword: inputPassword.value
    }

    userData.push(newUser)

    boxWarning.textContent = 'Аккаунт создан'
    boxWarning.style.background = '#6d9656'
    boxWarning.style.display = 'block'

    setTimeout(function () {
      boxWarning.style.display = 'none'
      loginContainer.style.display = 'block'
      signUpContainer.style.display = 'none'

    }, 1000)

    inputUsername.value = ''
    inputPassword.value = ''
    inputRepeatPassword.value = ''

    console.log(userData);

  } else if (!checkName && inputUsername.value.length && inputPassword.value.length && inputPassword.value !== inputRepeatPassword.value) {

    boxWarning.textContent = 'Не совападают пароли'
    boxWarning.style.background = '#EF3957'
    boxWarning.style.display = 'block'

    setTimeout(function () {
      boxWarning.style.display = 'none'
    }, 3000)

    inputUsername.value = ''
    inputPassword.value = ''
    inputRepeatPassword.value = ''

    console.log('Имя уже занято');

  } else if (checkName && inputUsername.value.length && inputPassword.value.length) {

    boxWarning.textContent = `Имя ${inputUsername.value} уже занято`
    boxWarning.style.background = '#EF3957'
    boxWarning.style.display = 'block'

    setTimeout(function () {
      boxWarning.style.display = 'none'
    }, 3000)

    inputUsername.value = ''
    inputPassword.value = ''
    inputRepeatPassword.value = ''

    console.log('Имя уже занято');

  } else if (!checkName && inputUsername.value.length === 0) {

    boxWarning.textContent = 'Введите имя'
    boxWarning.style.background = '#EF3957'
    boxWarning.style.display = 'block'

    setTimeout(function () {
      boxWarning.style.display = 'none'
    }, 3000)

  } else if (!checkName && inputPassword.value.length === 0) {

    boxWarning.textContent = 'Введите пароль'
    boxWarning.style.background = '#EF3957'
    boxWarning.style.display = 'block'

    setTimeout(function () {
      boxWarning.style.display = 'none'
    }, 3000)

  }

})


// -- Функционал блока логина Login

btnLogin.addEventListener('click', function (e) {

  e.preventDefault()


  const userExist = userData.find(function (item) {
    return item.username === inputUsernameLogin.value
  })


  if (userExist && userExist.userpassword === inputPasswordLogin.value) {

    mainPageContainer.style.display = 'block'
    loginContainer.style.display = 'none'
    signUpContainer.style.display = 'none'
    logRegSwitchBox.style.display = 'none'

    currentAccount = userExist

  } else {

    boxWarningLogin.textContent = 'Неправильный логин или пароль'
    boxWarningLogin.style.background = '#EF3957'
    boxWarningLogin.style.display = 'block'

    setTimeout(function () {
      boxWarningLogin.style.display = 'none'
    }, 3000)

    inputUsernameLogin.value = ''
    inputPasswordLogin.value = ''

  }

  // console.log(currentAccount);

  const nameTitle = currentAccount.username.replace(currentAccount.username[0], currentAccount.username[0].toUpperCase())


  welcomeTitle.textContent = `Welcome ${nameTitle}!`


})


// ****** Разлогинивание (выход юзера) *******

btnSignOut.addEventListener('click', function () {

  currentAccount = ''

  mainPageContainer.style.display = 'none'
  loginContainer.style.display = 'block'
  logRegSwitchBox.style.display = 'block'

})










// ****** Добавление контента *******

// показ скрытие модалки добавления контента
btnAddContentWindow.addEventListener('click', function () {
  newContentBox.classList.toggle('visible')
})


// Добавление контента
btnAddNewContent.addEventListener('click', function (e) {

  e.preventDefault()

  let idx;

  const userCurrent = userData.find(function (item, i) {

    if (item.username === currentAccount.username) {
      idx = i
    }

    return idx

  })

  userData[idx].content.push({
    body: inputBodyContent.value,
    date: `${new Date()}`,
    name: currentAccount.username
  })


  postContainer.innerHTML = ''


  displayData(updateArrayData(userData))

  newContentBox.classList.remove('visible')

  inputBodyContent.textContent = ''

})




// ****** подсчет кол-ва символов в tetxarea
textareaNewContent.oninput = function () {
  symbolLeft.textContent = `${140 - textareaNewContent.value.length}`
};






