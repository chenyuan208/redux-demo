
import { schema } from 'normalizr'


export const userSchema = new schema.Entity('user')
export const bookSchema = new schema.Entity('books',{
    author:userSchema
})
export const bookListSchema = new schema.Array(bookSchema);

