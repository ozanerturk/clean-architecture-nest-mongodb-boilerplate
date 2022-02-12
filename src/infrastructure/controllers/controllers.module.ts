import { Module } from '@nestjs/common';
import { EntityGatewaysModule } from 'infrastructure/entityGateways/entityGateways.module';
import { AddTodoController } from './addTodo/addTodo.controller';

@Module({
  imports: [EntityGatewaysModule,],
  controllers: [AddTodoController],
})
export class ControllersModule { }
