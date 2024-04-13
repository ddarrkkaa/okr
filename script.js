function dialog() {
    do {
        let age = parseInt(prompt("What is your age?"));
    }while (age < 0);

    if (age >= 18) {
      alert("You`re an adult");
    } else {
      alert("You`re a child");
    }
}

function info(lastName, firstName, position = "Web Developer") {
    alert("Last Name: " + lastName + "\nName: " + firstName + "\nPosition: " + position);
}


function compare() {
    str1 = prompt("Enter first word to compare");
    str2 = prompt("Enter second word to compare");

    if (str1.length > str2.length) {
      alert("This word is bigger " + str1);
    } else if (str2.length > str1.length) {
      alert("This word is bigger " + str2);
    } else {
      alert("They`re the same!");
    }
}

function handleDoubleClick() {
  alert("Double-click event occurred!");
}

// Призначення функції-обробника події через атрибут
document.getElementById("button1").ondblclick = handleDoubleClick;

// Призначення функції-обробника події через властивість
document.getElementById("button1").addEventListener("dblclick", handleDoubleClick);


function firstEventHandler() {
  alert("First event handler called!");
}

function secondEventHandler() {
  alert("Second event handler called!");
}

// Призначення функцій-обробників для події 'click' за допомогою addEventListener
document.getElementById("button2").addEventListener("click", firstEventHandler);
document.getElementById("button2").addEventListener("click", secondEventHandler);

// Створення об'єкта, який містить метод handleEvent
let eventHandlerObject = {
  handleEvent: function(event) {
      let targetElement = event.currentTarget;
      alert("Event handled on element: " + targetElement.tagName);

      targetElement.removeEventListener("click", this);
  }
};

// Призначення об'єкта як обробника події за допомогою addEventListener
document.getElementById("button3").addEventListener("click", eventHandlerObject);

const questionList = document.getElementById('question-list');

questionList.addEventListener('click', function(event) {
  const allListItems = document.querySelectorAll('ol');
  for (const item of allListItems) {
    item.classList.remove('active');
  }

  const clickedItem = event.target;
  clickedItem.classList.add('active');
});


  