import { Body, Controller, Post } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiResponseType } from '../../common/swagger/response.decorator';
import { LoggerService } from 'infrastructure/logger/logger.service';
import { addTodoUseCases } from 'usecases/todo/addTodo/addTodo.usecases';
import { AddTodoResponse } from './addTodo.response';
import { AddTodoRequest } from './addTodo.requset.';
import { InsertTodo } from 'infrastructure/entityGateways/addTodo/insertTodo';
import { CanIChangeStatus } from 'infrastructure/entityGateways/addTodo/canIChangeStatus';


@Controller('todo')
@ApiTags('todo')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(AddTodoResponse)
export class AddTodoController {
  constructor (
    private readonly insertTodo: InsertTodo,
    private readonly canIChangeStatus: CanIChangeStatus,
  ) { }

  @Post('')
  @ApiResponseType(AddTodoResponse, true)
  async addTodo(@Body() addTodoRequest: AddTodoRequest) {
    const { content } = addTodoRequest;

    const todoCreated = await (new addTodoUseCases(this.insertTodo, this.canIChangeStatus)).execute(content)
    return new AddTodoResponse({
      content: "", createdDate: new Date(), id: todoCreated.id,
      isDone: true,
      updatedDate: new Date()
    });
  }
}
