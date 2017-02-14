import {Observable, Observer} from 'rxjs';

let numbers = [1, 5, 25];

let source = Observable.from(numbers);

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
