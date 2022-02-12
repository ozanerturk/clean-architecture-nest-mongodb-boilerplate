import { addTodoUseCases } from './addTodo.usecases';
import { Todo } from '../../../entities/todo';
import { ICanIChangeStatus, IInsertTodo } from './entityGateways';

describe('Usecase - AddTodo', () => {
  let usecase: addTodoUseCases;


  beforeEach(async () => {
  });

  it('OK', async () => {

    //arrange
    let insertedTodoId = "1"
    let insertTodo: IInsertTodo = {
      execute: async function (todo: Todo): Promise<Todo> {
        todo.id = insertedTodoId
        return todo;
      }
    }

    let canIChangeStatus: ICanIChangeStatus = {
      execute: function (todoId: number): boolean {
        return true;
      }
    }

    //act
    usecase = new addTodoUseCases(insertTodo, canIChangeStatus);
    let result: Todo = await usecase.execute("helloo")

    //assert
    expect(result.id).toBe(insertedTodoId);

  });
});
