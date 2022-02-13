import { Module } from '@nestjs/common';
import { MongoDbModule } from 'infrastructure/database/mongodb.module';
import { FindTodos } from './findTodos';


//bubbles, I dont like repeats

const providesExports = [
    FindTodos // this will goes to an api etc.
]

@Module({
    imports: [
        MongoDbModule,
    ],
    providers: [
        ...providesExports

    ],
    exports: [
        ...providesExports
    ],
})
export class GetTodosModule { }
