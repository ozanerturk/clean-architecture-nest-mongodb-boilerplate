import { TodoFindResult } from '../../../entities/todoFindResult';
import { Todo } from '../../../entities/todo';
import { IFindTodos } from './entityGateways';
import { getTodosUsecase } from './getTodos.usecase';

describe('Usecase - AddTodo', () => {
  let usecase: getTodosUsecase;


  beforeEach(async () => {
  });

  it('OK', async () => {

    //arrange
    let totalReturns = 10;
    let insertedTodoId = "1"
    let findTodos: IFindTodos = {
      execute: async function (content: string, pageSize: number, pageNumber: number): Promise<TodoFindResult> {
        let t = new Todo()
        t.content = "hello";

        let r = new TodoFindResult()
        r.todos.push(t);
        r.total = totalReturns
        return r;
      }
    }


    //act
    usecase = new getTodosUsecase(findTodos);
    let result: TodoFindResult = await usecase.execute("helloo", 10, 1)

    //assert
    expect(result.total).toBe(totalReturns);

  });
});
