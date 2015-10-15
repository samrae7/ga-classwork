angular.module('toDoApp')
  .controller('ToDoController', ToDoController)

function ToDoController() {

  this.all =[
    {task: 'build an awesome todo list', done: false},
    {task: 'get good at angular', done: false},
    {task: 'party on', done: false},
    {task: 'complete the bonus exercises', done: false},
    {task: 'take a nap', done: false}
  ];

  this.newTodo = {task:'', done:false}

  this.add = addTodo;

  function addTodo() {
    this.all.push({task: this.newTodo.task, done:false});
    this.newTodo.task ='';
  }

}