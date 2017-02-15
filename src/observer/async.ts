import {Observable} from 'rxjs';

console.log('\n\n--- running observable asynchronously ---\n\n');

const source = Observable.create(observer => {

    const numbers = [1, 5, 25];
    let index = 0;

    const getNumber = () => {
        observer.next(numbers[index++]);

        if (index < numbers.length) {
            setTimeout(getNumber, Math.random() * 1000);
        } else {
            observer.complete();
        }
    };

    getNumber();
});

source.subscribe(
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log('complete')
);
