import { taskConstructor } from "./taskConstructor.js";
import { Task } from "../components/task.js";
import { isStringEmpty } from "./validation.js";
import { isMarkup } from "./validation.js";
import { toDoList } from "./todolist.js";

export const formSubmission = (event) => {
  event.preventDefault();
  // console.log("task is submitted");
  let taskValue = document.forms.userInput.taskInput.value;
  const taskObject = new taskConstructor(
    document.forms.userInput.taskInput.value
  );
  if (isStringEmpty(taskValue) && isMarkup(taskValue)) {
    toDoList.push(taskObject);
    console.log(toDoList);
    document.getElementById("userList").appendChild(Task(taskObject));
    document.forms.userInput.taskInput.value = "";
  }
  // console.log(taskObject);
  // console.log("task generated", Task(taskObject));
};
