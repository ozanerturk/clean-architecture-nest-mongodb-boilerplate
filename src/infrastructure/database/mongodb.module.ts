import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodoDatabaseModel, TodoSchema } from "./schemas";

//bubbles
//I am not sure if this is the best way

const importExports = [
  MongooseModule.forFeature([
    { name: TodoDatabaseModel.name, schema: TodoSchema },

  ])
]

@Module({
  imports: [
    ...importExports,
    MongooseModule.forRoot("mongodb://root:root@localhost:27017/test"),
  ],
  exports: [
    ...importExports
  ]

})
export class MongoDbModule { }
