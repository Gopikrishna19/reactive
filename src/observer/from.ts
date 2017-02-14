import {Observable, Observer} from 'rxjs';

(() => {

    console.log('... using simple functions ...');

    const numbers = [1, 5, 25];

    const source = Observable.from(numbers);

    source.subscribe(
        value => console.log(`value: ${value}`),
        error => console.log(`error: ${error}`),
        () => console.log('complete')
    );

})();

(() => {

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

    const numbers = [1, 5, 25];

    const source = Observable.from(numbers);

    source.subscribe(new NumbersObserver());

})();
