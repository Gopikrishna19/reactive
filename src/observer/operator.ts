import {Observable} from 'rxjs/Observable';
import {subscribe} from './subcriber';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

console.log('\n\n--- operators ---\n\n');

const numbers = [1, 5, 25];
const source = Observable.from(numbers);

console.log('... map ...');

subscribe(source.map(number => number * 10));

console.log('... filter ...');

subscribe(source.filter(number => number > 5));
