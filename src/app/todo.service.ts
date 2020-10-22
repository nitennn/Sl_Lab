import { Injectable } from '@angular/core';
@Injectable({providedIn:'root'})

export class TodoService{
    titles=[
        {todo:'Walk',desc:'At 5 am',date:'20-10-2020'}
    ];
    addingTodo(todo,desc,date){
        this.titles.push({todo,desc,date})
    }
}