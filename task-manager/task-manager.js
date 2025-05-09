
  
  
// if ("Notification" in window && Notification.permission !== "granted") {
//   Notification.requestPermission();
// }





// let taskList = [];

// let taskInput = document.getElementById('task-input');
// const dueDateInput = document.getElementById('task-date');
// const dueTimeInput = document.getElementById('task-time');
// const taskContainer = document.querySelector('.tasks-container');
// const importance = document.getElementById('task-priority');
// const alertMessage = document.getElementById('alert');
// const clearButton = document.querySelector('.clear-tasks-button');


// alertMessage.style.display = 'none';
// alertMessage.style.opacity = '0';

// window.addEventListener('DOMContentLoaded', loadTasks);

// function loadTasks() {
//     const storedTasks = localStorage.getItem('tasks');
//     if (storedTasks) {
//         taskList = JSON.parse(storedTasks);
//         renderTasks();
//     }
// }

// function addTask() {
//     const taskName = taskInput.value.trim();
//     const dueDate = dueDateInput.value;
//     const dueTime = dueTimeInput.value;
//     const taskImportance = importance.value;
//     const taskImportanceText = taskImportance === 'high' ? 'High Priority' : taskImportance === 'medium' ? 'Medium Priority' : 'Low Priority';

 
//     const dueDateTime = new Date(`${dueDate}T${dueTime}`);
//     const currentDateTime = new Date();

//     if (taskName === '') {
//       alertMessage.style.display = 'block';
//       alertMessage.style.opacity = '1';
//       alertMessage.innerText = 'Please enter task name.';
//       alertMessage.style.backgroundColor  = 'dodgerblue'; 
//       alertMessage.style.color = 'white';

//       setTimeout(() => {
//           alertMessage.style.display = 'none';
//           alertMessage.style.opacity = '0';
//       }, 2000);
//       return(null);

//     }

//     if (dueDate === '' || dueTime === '') {
        
//         alertMessage.style.display = 'block';
//         alertMessage.style.opacity = '1';
//         alertMessage.innerText = 'Please enter both due date and time.';
//         alertMessage.style.backgroundColor  = 'dodgerblue'; 
//         alertMessage.style.color = 'white';

//         setTimeout(() => {
//             alertMessage.style.display = 'none';
//             alertMessage.style.opacity = '0';
//         }, 2000);
//         return(null);
//       }

//     if (dueDateTime < currentDateTime) {
        
//         alertMessage.style.display = 'block';
//         alertMessage.style.opacity = '1';
//         alertMessage.innerText = 'Due date and time must be in the future.';
//         alertMessage.style.backgroundColor  = 'dodgerblue'; 
//         alertMessage.style.color = 'white';

//         setTimeout(() => {
//             alertMessage.style.display = 'none';
//             alertMessage.style.opacity = '0';
//         }, 2000);
//         return(null);
//     }

//     const task = {
//         id: Date.now(),
//         name: taskName,
//         dueDate,
//         dueTime,
//         createdAt: new Date().toLocaleTimeString(),
//         priority: taskImportanceText,
//         completed: false
//     };

//     taskList.push(task);
//     localStorage.setItem('tasks', JSON.stringify(taskList));
//     renderTasks();

//     taskInput.value = '';
//     dueDateInput.value = '';
//     dueTimeInput.value = '';
//     importance.value = '';

//     // notifyUser(taskName);

 
// const delay = new Date(`${dueDate}T${dueTime}`) - new Date() - 5 *60 * 1000; // 1 min before due time

// if (delay > 0) {
//     setTimeout(() => notifyUser(taskName), delay);
// }else {
//   console.log("Notifications not allowed or not supported.");
//  }

// // assume `task` is the object you just pushed, with dueDate, dueTime, name




// }
// //addTask();

// function deleteTask(id) {
//     taskList = taskList.filter(task => task.id !== id);
//     localStorage.setItem('tasks', JSON.stringify(taskList));
//     renderTasks();
// }

// function renderTasks() {
//     taskContainer.innerHTML = '';
//     taskList.forEach(task => {
//         taskContainer.innerHTML += `
//             <div class="tasks">
//                 <div data-id="${task.id}"  style="text-decoration: ${task.completed ? 'line-through' : 'none'}; color: ${task.completed ? 'green' : 'inherit'};">
//                 <div class="task-item">
//                     <strong>${task.name}.</strong>
//                     <div class="task-actions" style="display: ${task.completed ? 'none' : 'flex'};">
//                         <button class="delete-button" onclick="deleteTask(${task.id})">Delete</button>
//                         <button class="done-button" onclick="taskDone(${task.id})">Done</button>
//                     </div>
//                 </div>
//                 <p>Created at: ${task.createdAt}</p>
//                 <p>Due: ${task.dueDate} at ${task.dueTime}</p>
//                 <p>Priority: ${task.priority}.</p>
//                 <hr>
//             </div>
//             <p class="completed" style="display: ${task.completed ? 'block' : 'none'}">Completed</p>
//             </div>
                            
//                     `;
//                     // return(task.name);
                    
//     });



// clearButton.style.display = taskList.length > 0 ? 'block' : 'none';




// };
// /*renderTasks();*/

// function taskDone(taskId) {
//     const task = taskList.find(t => t.id === taskId);
//     if (task) {
//         task.completed = true;
//         localStorage.setItem('tasks', JSON.stringify(taskList));
//         renderTasks();
//         alertMessage.style.display = 'block';
//         alertMessage.style.opacity = '1';
//         alertMessage.innerHTML =`<p>Task completed Welldone ! <img src="task-manager-media/celebration.png" alt="congrats" width="30"></p>` ;
//         alertMessage.style.backgroundColor  = 'greenyellow';
//         setTimeout(() => {
//             alertMessage.style.display = 'none';
//             alertMessage.style.opacity = '0';
//         }, 2000);
//     }
// }

// flatpickr("#task-date", {
//     dateFormat: "Y-m-d",
//     minDate: "today",
//     altInput: "Due Date",
//     altFormat: "F j, Y",
// });

// flatpickr("#task-time", {
//     enableTime: true,
//     noCalendar: true,
//     dateFormat: "H:i",
//     time_24hr: true
// });

// function clearTasks() {

  
//     localStorage.removeItem('tasks');
//     taskList = [];
//     renderTasks();
  
// }

// function notifyUser(taskName) {
//   if (Notification.permission === "granted") {
//       new Notification("⏰ Task Reminder", {
//           body: `Don't forget: ${taskName}`,
//           // icon: "task-icon.png"
//       });

//       // Play sound
//       document.getElementById('task-sound').play().catch(e => {
//           console.log("Auto-play failed:", e);
//       });
//   }
// }




// const searchInput = document.querySelector('.search');
// const searchedName = task.name;

// searchInput.addEventListener("input", (e) => {
//     const searchText = event.target.value.toLowerCase();

//     searchedName.forEach((item) => {
//         const itemText = item.textContent.toLowerCase();
//         if(itemText.includes(searchText)) {
//             item.style.display = "";

//         } else {
//             item.style.display = "none";
//         }
//     });
// });


// const fullYear = document.getElementById('year');

// fullYear.innerText = new Date().getFullYear();


if ("Notification" in window && Notification.permission !== "granted") {
    Notification.requestPermission();
  }
  
  let taskList = [];
  
  let taskInput = document.getElementById('task-input');
  const dueDateInput = document.getElementById('task-date');
  const dueTimeInput = document.getElementById('task-time');
  const taskContainer = document.querySelector('.tasks-container');
  const importance = document.getElementById('task-priority');
  const alertMessage = document.getElementById('alert');
  const clearButton = document.querySelector('.clear-tasks-button');
  
  alertMessage.style.display = 'none';
  alertMessage.style.opacity = '0';
  clearButton.style.display = 'none';
  
  window.addEventListener('DOMContentLoaded', loadTasks);
  
  function loadTasks() {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
          taskList = JSON.parse(storedTasks);
          renderTasks();
      }
  }
  
  function addTask() {
      const taskName = taskInput.value.trim();
      const dueDate = dueDateInput.value;
      const dueTime = dueTimeInput.value;
      const taskImportance = importance.value;
      const taskImportanceText = taskImportance === 'high' ? 'High Priority' : taskImportance === 'medium' ? 'Medium Priority' : 'Low Priority';
  
      const dueDateTime = new Date(`${dueDate}T${dueTime}`);
      const currentDateTime = new Date();
  
      if (taskName === '') {
        showAlert('Please enter task name.');
        return;
      }
  
      if (dueDate === '' || dueTime === '') {
          showAlert('Please enter both due date and time.');
          return;
      }
  
      if (dueDateTime < currentDateTime) {
          showAlert('Due date and time must be in the future.');
          return;
      }
  
      const task = {
          id: Date.now(),
          name: taskName,
          dueDate,
          dueTime,
          createdAt: new Date().toLocaleTimeString(),
          priority: taskImportanceText,
          completed: false
      };
  
      taskList.push(task);
      localStorage.setItem('tasks', JSON.stringify(taskList));
      renderTasks();
  
      taskInput.value = '';
      dueDateInput.value = '';
      dueTimeInput.value = '';
      importance.value = '';
  
      const delay = new Date(`${dueDate}T${dueTime}`) - new Date() - 5 * 60 * 1000;
      if (delay > 0) {
          setTimeout(() => notifyUser(taskName), delay);
      } else {
        console.log("Notifications not allowed or not supported.");
      }
  }
  
  function showAlert(message) {
    alertMessage.style.display = 'block';
    alertMessage.style.opacity = '1';
    alertMessage.innerText = message;
    alertMessage.style.backgroundColor  = 'dodgerblue'; 
    alertMessage.style.color = 'white';
    setTimeout(() => {
        alertMessage.style.display = 'none';
        alertMessage.style.opacity = '0';
    }, 2000);
  }
  
  function deleteTask(id) {
      taskList = taskList.filter(task => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(taskList));
      renderTasks();
  }
  
  function renderTasks() {
      taskContainer.innerHTML = '';
      taskList.forEach(task => {
          taskContainer.innerHTML += `
              <div class="tasks">
                  <div data-id="${task.id}"  style="text-decoration: ${task.completed ? 'line-through' : 'none'}; color: ${task.completed ? 'green' : 'inherit'};">
                  <div class="task-item">
                      <strong>${task.name}.</strong>
                      <div class="task-actions" style="display: ${task.completed ? 'none' : 'flex'};">
                          <button class="delete-button" onclick="deleteTask(${task.id})">Delete</button>
                          <button class="done-button" onclick="taskDone(${task.id})">Done</button>
                      </div>
                  </div>
                  <p>Created at: ${task.createdAt}</p>
                  <p>Due: ${task.dueDate} at ${task.dueTime}</p>
                  <p>Priority: ${task.priority}.</p>
                  <hr>
              </div>
              <p class="completed" style="display: ${task.completed ? 'block' : 'none'}">Completed</p>
              </div>
          `;
      });

      
    //   clearButton.style.display = taskList.length > 0 ? 'block' : 'none';
      if (taskList.length === 0) {
          clearButton.style.display = 'none';
      }else{
            clearButton.style.display = 'block';
      }
  }
  
  function taskDone(taskId) {
      const task = taskList.find(t => t.id === taskId);
      if (task) {
          task.completed = true;
          localStorage.setItem('tasks', JSON.stringify(taskList));
          renderTasks();
          alertMessage.style.display = 'block';
          alertMessage.style.opacity = '1';
          alertMessage.innerHTML =`<p>Task completed Welldone ! <img src="task-manager-media/celebration.png" alt="congrats" width="30"></p>` ;
          alertMessage.style.backgroundColor  = 'greenyellow';
          setTimeout(() => {
              alertMessage.style.display = 'none';
              alertMessage.style.opacity = '0';
          }, 2000);
      }
  }
  
  flatpickr("#task-date", {
      dateFormat: "Y-m-d",
      minDate: "today",
      altInput: "Due Date",
      altFormat: "F j, Y",
  });
  
  flatpickr("#task-time", {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      time_24hr: true
  });
  
  function clearTasks() {
      localStorage.removeItem('tasks');
      taskList = [];
      renderTasks();
  }
  
  function notifyUser(taskName) {
    if (Notification.permission === "granted") {
        new Notification("⏰ Task Reminder", {
            body: `Don't forget to ${taskName}`,
        });
  
        document.getElementById('task-sound').play().catch(e => {
            console.log("Auto-play failed:", e);
        });
    }
  }
  
  
  
  
  const fullYear = document.querySelector('.year');
       
            fullYear.innerText = new Date().getFullYear();
        
  