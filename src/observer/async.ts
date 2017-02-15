import {Observable} from 'rxjs';
import {subscribe} from './subcriber';

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

subscribe(source);
