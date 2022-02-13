export class TodoNotFoundError extends Error {
    message: string = "common.notfound"
    type:string= "business_error"
}