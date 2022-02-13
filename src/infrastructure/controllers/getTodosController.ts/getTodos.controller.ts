import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiResponseType } from '../../common/swagger/response.decorator';
import { addTodoUseCases } from 'usecases/todo/addTodo/addTodo.usecases';
import { InsertTodo } from 'infrastructure/entityGateways/addTodo/insertTodo';
import { CanIChangeStatus } from 'infrastructure/entityGateways/addTodo/canIChangeStatus';
import { GetTodoResponse as GetTodosResponse } from './getTodoResponse';
import { FindTodos } from 'infrastructure/entityGateways/getTodos/findTodos';
import { getTodosUsecase } from 'usecases/todo/getTodos/getTodos.usecase';
import { GetTodosRequest } from './getTodos.requset';
import { TodoFindResult } from 'entities/todoFindResult';


@Controller('todo')
@ApiTags('todo')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(GetTodosResponse) // i dont know if we really need it ? 
export class GetTodosController {//maybe we can also extend this, brhww what ever
  constructor (
    private readonly findTodos: FindTodos,
  ) { }

  @Get('')
  @ApiResponseType(GetTodosResponse, true)
  async addTodo(@Query() request: GetTodosRequest) {

    const todos: TodoFindResult = await (new getTodosUsecase(this.findTodos).execute(request.content, request.pageSize, request.pageNumber));


    return GetTodosResponse.build(request.pageSize, request.pageNumber, todos);
  }
}
