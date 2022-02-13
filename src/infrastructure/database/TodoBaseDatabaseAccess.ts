import { InjectModel } from "@nestjs/mongoose";
import { TodoDatabaseModel, TodoDocument } from "infrastructure/database/schemas";
import { Model } from "mongoose";


//I'll inherit entitygateways that access todo model from this
export abstract class TodoBaseDatabaseAccess {

    constructor (@InjectModel(TodoDatabaseModel.name) protected todoDatabaseModel: Model<TodoDocument>) {
    }
}
