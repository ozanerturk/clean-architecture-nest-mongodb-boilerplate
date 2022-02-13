import { Injectable } from "@nestjs/common";
import { Todo } from "entities/todo";
import { TodoBaseDatabaseAccess } from "infrastructure/database/TodoBaseDatabaseAccess";
import { Types } from "mongoose";
import { IFindOneTodo } from "usecases/todo/getOneTodo/entityGateways";



@Injectable()
export class FindOneTodo extends TodoBaseDatabaseAccess implements IFindOneTodo {

    async execute(id: string): Promise<Todo> {
        let todoModel = await this.todoDatabaseModel.findOne({ _id: new Types.ObjectId(id) })
        if(todoModel){

            let todo = new Todo()
            todo.content = todoModel.content;
            todo.createdDate = todoModel.createdDate;
            todo.updatedDate = todoModel.updatedDate;
            todo.isDone = todoModel.isDone;
            todo.id = todoModel._id.toString();
            return todo;
        }
        return null
    }

}