import { Injectable } from '@nestjs/common';
import { TodoBaseDatabaseAccess } from 'infrastructure/database/TodoBaseDatabaseAccess';
import { IInsertTodo } from 'usecases/todo/addTodo/entityGateways';
import { Todo } from '../../../entities/todo';
@Injectable()
export class InsertTodo extends TodoBaseDatabaseAccess implements IInsertTodo {

  async execute(todo: Todo): Promise<Todo> {
    let dbModel = new this.todoDatabaseModel(todo);
    let result = await dbModel.save();
    todo.id = result._id.toString();
    return todo;
  }

}

