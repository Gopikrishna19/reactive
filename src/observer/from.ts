import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/observable/from';

console.log('\n\n--- creating observable from a source ---\n\n');

const numbers = [1, 5, 25];
const source = Observable.from(numbers);

console.log('... using simple functions ...');

source.subscribe(
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log('complete')
);

console.log('... using a class ...');

class NumbersObserver implements Observer<number> {

    next(value) {
        console.log(`value: ${value}`);
    }

    error(error) {
        console.log(`error: ${error}`);
    }

    complete() {
        console.log('complete');
    }
}

source.subscribe(new NumbersObserver());
