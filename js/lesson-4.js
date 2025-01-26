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

// const box = document.querySelector("#box");
// const decreaseBtn = document.querySelector("#decrease");
// const increaseBtn = document.querySelector("#increase");

// increaseBtn.addEventListener("click", () => {
//   let width = parseFloat(getComputedStyle(box).width);
//   width = width + 10 + "px";
//   let height = parseFloat(getComputedStyle(box).height);
//   height = height + 10 + "px";
//   console.log(width);
//   box.style.width = width;
//   box.style.height = height;
// });

// decreaseBtn.addEventListener("click", () => {
//   let width = parseFloat(getComputedStyle(box).width);
//   width = width - 10 + "px";
//   let height = parseFloat(getComputedStyle(box).height);
//   height = height - 10 + "px";
//   console.log(width);
//   box.style.width = width;
//   box.style.height = height;
// });

/*
Завдання 5
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
// const circle = document.querySelector('.outerCircle');
// let condition = false;
// circle.addEventListener('click', (event) => {
//   if (!condition) {
//     circle.style.position = 'absolute';
//     circleMove(event);
//     window.addEventListener('mousemove', circleMove);
//     condition = true;
//   } else {
//     window.removeEventListener('mousemove', circleMove);
//     circle.style.translate = '0% 0%';
//     circle.style.position = 'static';
//     condition = false;
//   }
// });

// function circleMove(event) {
//   let posX = event.pageX;
//   let posY = event.pageY;
//   circle.style.left = posX + 'px';
//   circle.style.top = posY + 'px';
//   circle.style.translate = '-50% -50%';
// }

/*<!-- ЗАДАЧА 6 -->
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

// const button = document.querySelector("#double");
// const items = document.querySelectorAll(".listItem");

// button.addEventListener("click", () => {
//   items.forEach((item) => {
//     item.textContent = item.textContent * 2;
//     console.log(item.textContent);
//   });
// });
