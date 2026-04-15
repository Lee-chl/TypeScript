// 투두 담을 수 있는 텍스트,번호 , Complite 완료여부 
// 할일 추가 ,목록 출력 , 완료 (배열의 find 함수 true 반환하는 첫번째 것 리턴) , 삭제 처리 
// class TD{
//     todoList=[];
//     idx = 0;
//     // 할일 추가
//     addT(td){
//         const t = {
//             id: ++this.idx,
//             to:td,
//             comp:false
//         }
//         this.todoList.push(t);
//     }
//     // 출력
//     printT(){
//         console.log('⭕️TODOLIST⭕️')
//         this.todoList.forEach((todo)=>console.log(`[${todo.comp? '✅':'  '}] ${todo.to}`));
//     }
//     // 완료
//     complechek(t_id){
//         const td = this.todoList.find((td)=>td.id === t_id);
//         if(td){
//             td.comp = !td.comp;
//         }
//     }
//     // 삭제
//     deleteTd(t_id){
//         this.todoList = this.todoList.filter((td)=>td.id !== t_id);
//     }
// }

// const td = new TD();
// td.addT('첫 할일이다.');
// td.printT();
// td.addT('둘째다.');
// td.printT();
// td.complechek(2);
// td.printT();
// td.deleteTd(1);
// td.printT();

class TodoApp{
    todos= [];
    todo_idx=1;
    // 할일 추가
    addTodo(new_todo){
        const todo ={
            id:this.todo_idx++,
            todo:new_todo,
            complite:false,
        };
        this.todos.push(todo);
    }
    // 목록 출력
    printTodoList(){
        console.log(`⭕️TODOLIST⭕️`);
        this.todos.forEach((todo) => console.log(`[${todo.complite ? '✅':'  '}] ${todo.todo}`));
    }
    // 완료 체크
    compliteCheck(idx){
        const todo = this.todos.find((todo)=> todo.id === idx)
        if(todo){
            todo.complite = !todo.complite;
        }
    }
    // 삭제 처리 
    deleteTodo(idx){
        this.todos = this.todos.filter((todo)=> idx !== todo.id);
    }
}

const todo = new TodoApp();
todo.addTodo('첫 번째 할일입니다.');
todo.addTodo('두 번째 할일입니다.');
todo.printTodoList();
todo.compliteCheck(1);
todo.printTodoList();
todo.deleteTodo(2);
todo.printTodoList();