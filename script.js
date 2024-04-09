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

function exiting_button() {
    alert("This is the exiting button!");
  };

// document.body.style.backgroundColor = "#bf00ff";
// setTimeout(() => {
//   document.body.style.backgroundColor = "#fff0ff";
// }, 30000);

// function change_page(){
//     location.href = "https://www.nasa.gov";
// }

// const paragraph_element = document.getElementById("bla");
// paragraph_element.innerHTML = "some text";

// const container_elements = document.querySelectorAll(".container");
// for (const element of container_elements) {
//   alert(element.innerHTML);
//   element.remove();
// }

// alert(paragraph_element.textContent)
// alert(paragraph_element.outerHTML)

// let text = document.body.firstChild;
// alert(text.data);
// let comment = text.nextSibling;
// alert(comment.data); 

const new_button = document.createElement("button");
const new_button_text = document.createTextNode("New Button");

new_button.appendChild(new_button_text);
document.body.prepend(new_button);
const afterElement = document.querySelector(".red_button");
afterElement.after(new_button);
document.body.append(new_button);

// new_button.remove();
// const existing_button = document.getElementById("existing_button");
// existing_button.replaceWith(new_button);

new_button.onclick = exiting_button;
function exiting_button() {
    alert("This is the exiting button!");
};




  