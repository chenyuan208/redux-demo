import { normalize } from 'normalizr'

import * as input from './input'
import * as output from './output'
import * as schemas from './schema'

test('schema_1', () => {
    let result = normalize(input.input_1, schemas.bookListSchema)
    expect(result).toEqual(output.output_1);
});