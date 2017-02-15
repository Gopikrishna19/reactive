import {Observable} from 'rxjs/Observable';
import {subscribe} from './subcriber';

console.log('\n\n--- creating custom observable ---\n\n');

const source = Observable.create(observer => {

    const numbers = [1, 5, 25];

    for (let n of numbers) {

        if(n === 5) {
            observer.error('something went wrong');
        }

        observer.next(n);
    }

    observer.complete();
});

subscribe(source);
