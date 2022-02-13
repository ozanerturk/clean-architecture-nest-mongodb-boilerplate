import { Controller, Get, HttpException, NotFoundException, Param } from '@nestjs/common';
import { ApiExtraModels, ApiParam, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiResponseType } from '../../common/swagger/response.decorator';
import { FindOneTodo } from 'infrastructure/entityGateways/getOneTodo/findOneTodo';
import { getOneTodoUsecase } from 'usecases/todo/getOneTodo/getTodos.usecase';
import { GetOneTodoResponse } from './getOneTodoResponse';
import { TodoNotFoundError } from 'usecases/todo/getOneTodo/todoNotFoundError';

@Controller('todo')
@ApiTags('todo')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(GetOneTodoResponse) // i dont know if we really need it ? 
export class GetOneTodoController {//maybe we can also extend this, brhww what ever
  constructor (
    private readonly findOneTodo: FindOneTodo,
  ) { }

  @Get(':id')
  @ApiParam({ name: 'id', required: true, description: 'either an integer for the project id or a string for the project name', schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] } })
  @ApiResponseType(GetOneTodoResponse, true)
  async addTodo(@Param('id') id) {
    try {

      let todo = await (new getOneTodoUsecase(this.findOneTodo)).execute(id);
      return GetOneTodoResponse.build(todo);
    } catch (e) {
      if (e instanceof TodoNotFoundError) {// usecases do not now anything about http status codes
        throw new NotFoundException(e) //we map the expected errors to http erros here
      } else {                        // this operations does not require a middleware because we already which  kind of 
        throw e                       //errors could be thrown from usecase
      }
    }
  }
}
