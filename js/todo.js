const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function paintToDo(newToDo) {
  const li = document.createElement("li"); // li element 생성
  const span = document.createElement("span"); // span element 생성
  span.innerText = newToDo; // span내에 입력받은 텍스트를 추가
  const button = document.createElement("button");
  button.textContent = "🗑️";
  button.addEventListener("click", deleteToDo); // delete 버튼을 click할 때 호출할 function

  li.appendChild(span); // li에게 span이라는 child를 가지게 함
  li.appendChild(button); // li에게 button이라는 child를 가지게 함

  toDoList.appendChild(li); // 최종적으로 li요소를 toDo리스트에 추가
}

function deleteToDo(event) {
  const li = event.target.parentElement; // delete 버튼을 click시 해당 버튼을 품고있는 부모요소인 li를 확인

  li.remove(); // 해당 li요소를 toDo리스트에서 삭제
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
