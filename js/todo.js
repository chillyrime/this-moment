const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function paintToDo(newToDo) {
  const li = document.createElement("li"); // li element 생성
  const span = document.createElement("span"); // span element 생성
  li.appendChild(span); // li는 span이라는 child를 가지게 함
  span.innerText = newToDo; // span내에 입력받은 텍스트를 추가
  toDoList.appendChild(li); // 최종적으로 li요소를 toDo리스트에 추가
}

/* Greetings.js 에서 한 것과 마찬가지로 submit으로 인해 자동으로 새로고침 되는 이벤트 방지.
JavaScript가 방금 발생한 이벤트를 함수의 첫번째 인자로 주는 것을 잊지말자. */
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
