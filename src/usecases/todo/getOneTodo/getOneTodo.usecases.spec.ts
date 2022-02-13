import { TodoFindResult } from '../../../entities/todoFindResult';
import { Todo } from '../../../entities/todo';
import { getOneTodoUsecase } from './getTodos.usecase';
import { IFindOneTodo } from './entityGateways';
import { TodoNotFoundError } from './todoNotFoundError';

describe('Usecase - AddTodo', () => {
  let usecase: getOneTodoUsecase;


  beforeEach(async () => {
  });

  it('OK', async () => {

    //arrange
    let todoId = "1"
    let findOneTodo: IFindOneTodo = {
      execute: async function (id: string): Promise<Todo> {
        let t = new Todo()
        t.content = "hello";
        t.id = id;

        return t;
      }
    }


    //act
    usecase = new getOneTodoUsecase(findOneTodo);
    let result: Todo = await usecase.execute(todoId)

    //assert
    expect(result.id).toBe(todoId);

  });


  it('Todo not found', async () => {

    //arrange
    let todoId = "1"
    let findOneTodo: IFindOneTodo = {
      execute: async function (id: string): Promise<Todo> {
        return null
      }
    }
    let exception: Error;
    //act
    try {
      usecase = new getOneTodoUsecase(findOneTodo);
      let result: Todo = await usecase.execute(todoId)

    } catch (e) {
      exception = e;
    }

    //assert
    expect(exception).toBeInstanceOf(TodoNotFoundError);

  });
});