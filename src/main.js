import { taskConstructor } from "./helper/taskConstructor.js";
import { formSubmission } from "./helper/formSubmission.js";
import { Task } from "./components/task.js";

window.onload = () => {
  document.forms.userInput.addEventListener("submit", formSubmission);
};
