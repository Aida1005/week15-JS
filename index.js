//Находим элементы на странице
const addTask = document.querySelector('.task-manager__task');//Поле ввода для задачи
const addBtn = document.querySelector('.task-manager__btn');//Кнопка "Добавить"
const noTask = document.querySelector('.todo-list__title');//Текст "Нет задач"
const clearBtn = document.querySelector('.todo-list__clear-btn');//Кнопка "Очистить список задач"
const tasksList = document.querySelector('.todo-list__items');//Блок для отображения задач



//Создаём функцию для кнопки "Добавить"

addBtn.addEventListener('click', function(event){
event.preventDefault();
const taskText = addTask.value

//Добавляем задачу в список задач
const taskHTML = 
`<div class="todo-list_item_input"> 
    <p class="todo-list_item_text">
    ${taskText}
    </p>  
    <label for="checkbox"> 
    <input class="todo-list_item_checkbox" type="checkbox" name="ready" id="checkbox">
    </label>
    </div>   
`;

//Убираем надпись "Нет задач"
noTask.style.display = "none";

//Показать кнопку "Очистить список задач" активной
clearBtn.removeAttribute("disabled");

//Показать новые задачи в блоке "список задач"
tasksList.style.display = "block";
/*document.querySelector('.todo-list__items').removeAttribute('hidden');*/


//Добавляем задачу на страницу 
tasksList.insertAdjacentHTML('beforeend', taskHTML);

//Очищаем поле ввода и возвращаем на него фокус
addTask.value = "";  
addTask.focus();
})


//Создаём функцию для кнопки "Очистить список задач"
clearBtn.addEventListener('click', ()=>{
    tasksList.innerHTML = "";

// Добавляем надпись "Нет задач"
noTask.style.display = "block";

//Показать кнопку "Очистить список задач" неактивной
clearBtn.setAttribute("disabled", true);

//Показать блок "список задач" скрытым
tasksList.style.display = "none";

})
