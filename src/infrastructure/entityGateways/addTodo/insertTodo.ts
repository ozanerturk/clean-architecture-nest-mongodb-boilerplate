import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IInsertTodo } from 'usecases/todo/addTodo/entityGateways';
import { Todo } from '../../../entities/todo';
import { TodoDatabaseModel, TodoDocument } from '../../database/schemas';
@Injectable()
export class InsertTodo implements IInsertTodo {
  constructor (@InjectModel(TodoDatabaseModel.name) private todoDatabaseModel: Model<TodoDocument>) {

  }

  async execute(todo: Todo): Promise<Todo> {
    let dbModel = new this.todoDatabaseModel(todo);
    let result = await dbModel.save();
    todo.id = result._id.toString();
    return todo;
  }

}

