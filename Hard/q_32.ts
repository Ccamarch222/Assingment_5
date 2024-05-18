/*Create a 'to-do list' array of objects where each object has properties task and
completed (a boolean). Write a function to log only the tasks that are not yet completed.*/

interface Task{
    task:string;
    completed:boolean;
}

function logUncopleted(tasks:Task[]):void {
    tasks.filter((task) => !task.completed)
    .forEach((task) => console.log(task.task));
}


const taskList: Task[] =[
    {task: "Read Book" ,completed:true},
    {task: "Project complete" ,completed:true},
    {task: " Buy Grocieres" ,completed:true},
    {task:"Exercises",completed:true},
    {task:"Laundry",completed:false}
 ];
 logUncopleted(taskList);