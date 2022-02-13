import { Module } from '@nestjs/common';
import { AddTodoModule } from './addTodo/addTodo.module';
import { GetOneTodoModule } from './getOneTodo/getTodos.module';
import { GetTodosModule } from './getTodos/getTodos.module';


//this module is for only  ease of file management
//does nothing expect import and exports
//I do not want to expose import business into controller or another module
//but we should export the imported modules so others can injects them
//in order to not repeate ourselfs will be using same array
const importExports = [
    AddTodoModule,//see this is named as usecase,
    GetTodosModule,
    GetOneTodoModule
]


@Module({
    imports: [//I use rest operation just in case if we put another import here expect the onces we bubles up :)
        ...importExports,
    ],
    providers: [

    ],
    exports: [
        ...importExports
    ],
})
export class EntityGatewaysModule { }
