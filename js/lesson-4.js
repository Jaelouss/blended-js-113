// <!-- ЗАДАЧА 2 -->
//     <!-- <div>
//       <p class="taskTitle">ЗАДАЧА 2</p>
//       <button id="swapButton">SWAP ME</button>
//       <input id="leftSwapInput" type="text" value="???" />
//       <input id="rightSwapInput" type="text" value="!!!" />
//     </div> -->
/*
// Завдання 2
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
// */
// const button = document.querySelector('#swapButton');
// const inputLeft = document.querySelector('#leftSwapInput');
// const inputRight = document.querySelector('#rightSwapInput');

// button.addEventListener('click', (event) => {
//   const inputLeftValue = inputLeft.value;
//   const inputRightValue = inputRight.value;
//   inputRight.value = inputLeftValue;
//   inputLeft.value = inputRightValue;
// });

// <!-- ЗАДАЧА 3 -->
//     <!--  -->
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// const button = document.querySelector("#passwordButton");
// const input = document.querySelector("#passwordInput");
// button.addEventListener("click", () => {
//   if (input.type === "text") {
//     input.type = "password";
//     button.textContent = "Розкрити";
//   } else {
//     input.type = "text";
//     button.textContent = "Приховати";
//   }
// });
// console.log(input);

/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
*/

const box = document.querySelector("#box");
const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");

increaseBtn.addEventListener("click", () => {
  let width = parseFloat(getComputedStyle(box).width);
  width = width + 10 + "px";
  let height = parseFloat(getComputedStyle(box).height);
  height = height + 10 + "px";
  console.log(width);
  box.style.width = width;
  box.style.height = height;
});

decreaseBtn.addEventListener("click", () => {
  let width = parseFloat(getComputedStyle(box).width);
  width = width - 10 + "px";
  let height = parseFloat(getComputedStyle(box).height);
  height = height - 10 + "px";
  console.log(width);
  box.style.width = width;
  box.style.height = height;
});
