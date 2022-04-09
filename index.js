// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = [];

// REMOVE ME: SAMPLE FILLING
tasks = [
  { id: 0, title: "Game of thrones", category: "Movies", done: false },
  { id: 1, title: "Toy Story 4", category: "Movies", done: false },
];

categories = ["Movies", "Groceries", "All"];
// SAMPLE
renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
  // implement the delete task.
  // You are given the task id
  var list = document.getElementsByClassName("todo-item")
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    let checkedBox = element.getElementsByClassName("task-checkbox").checked
    let taskName = element.getElementsByClassName("item-title").value
    console.log(checkedBox,taskName)
    console.log(index,element)

  }
 

  console.log(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  tasks.push({
    id: tasks.length + 1,
    title: taskTitle,
    category: selectedCategory,
    done: false,
  });
  renderTasks(tasks, "tasks-list");
  // continue the code here
  alert(`Category: ${selectedCategory} | Task: ${taskTitle}`);
}

function addCategory() {
  const newCategory = getNewCategoryText();
  categories.push(newCategory);
  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(categories, CATEGORY_FILTER);

  alert(`New category was added: ${newCategory}`);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  // renderCategories(categories, CATEGORY_SELECTOR);
  // renderCategories(categories, CATEGORY_FILTER);
// console.log("DONEE",done)
//   tasks.forEach((element) => { 
//       element.done = done;
//       console.log("elmeeee",element)
//     });
    //console.log(tasks)

  

 
  // console.log(tasks);
  if (selectedCategory != "All") {
    
    let filteredTasks = tasks.filter(
     (element) => element.category == selectedCategory && element.done == done
    );

     renderTasks(filteredTasks, "tasks-list");
   } else {
    renderTasks(tasks, "tasks-list");
  }
 
  // // continue the code here
  // // REMOVE ME: sample alert
  // alert(`Category: ${selectedCategory} | done: ${done}`);
}
