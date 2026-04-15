interface TODO{
    id:number;
    text:string;
    complite:boolean;
}

class TodoApp{
    private todos:Array<TODO> = [];
    private todo_idx:number=1;
    // 할일 추가
    addTodo(text:string){
        const todo:TODO ={
            id:this.todo_idx++,
            text, // 요소랑 값의 이름이 같으면 생략 가능 
            complite:false,
        };
        this.todos.push(todo);
    }
    // 목록 출력
    printTodoList(){
        console.log(`⭕️TODOLIST⭕️`);
        this.todos.forEach((todo) => console.log(`[${todo.complite ? '✅':'  '}] ${todo.text}`));
    }
    // 완료 체크
    compliteCheck(idx:number){
        const todo = this.todos.find((todo)=> todo.id === idx)
        if(todo){
            todo.complite = !todo.complite;
        }
    }
    // 삭제 처리 
    deleteTodo(idx:number){
        this.todos = this.todos.filter((todo)=> idx !== todo.id);
    }
}

const todo:TodoApp = new TodoApp();
todo.addTodo('첫 번째 할일입니다.');
todo.addTodo('두 번째 할일입니다.');
todo.printTodoList();
todo.compliteCheck(1);
todo.printTodoList();
todo.deleteTodo(2);
todo.printTodoList();