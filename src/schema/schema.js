import { schema } from 'normalizr'


const busines = new schema.Entity('business')
const event = new schema.Entity('event')
const control = new schema.Entity('controls')
const style = new schema.Entity('style')

const componet = new schema.Entity('result', {
    business: [busines],
    event: [event],
    controls: [control],
    style: [style]
})

export const componentSchema = { result: new schema.Array(componet) }