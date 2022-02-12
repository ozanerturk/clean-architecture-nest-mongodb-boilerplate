import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
export type TodoDocument = TodoDatabaseModel & Document;

@Schema()
export class TodoDatabaseModel {//If you have a better naming shoot it.
    
    @Prop()
    content: string;
    @Prop()
    isDone: boolean;
    @Prop()
    createdDate: Date;
    @Prop()
    updatedDate: Date;
}

export const TodoSchema = SchemaFactory.createForClass(TodoDatabaseModel);