import {Observable} from 'rxjs';
import {subscribe} from './subcriber';

console.log('\n\n--- operators ---\n\n');

const numbers = [1, 5, 25];
const source = Observable.from(numbers);

console.log('... map ...');

subscribe(source.map(number => number * 10));

console.log('... filter ...');

subscribe(source.filter(number => number > 5));
