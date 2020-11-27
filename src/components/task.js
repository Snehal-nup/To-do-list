export const Task = (taskObject) => {
  const li = document.createElement("li");
  li.id = taskObject.taskId;
  li.innerHTML = taskObject.description;
  return li;
};
