import {Observable} from 'rxjs';
import {subscribe} from './subcriber';

let circle = document.getElementById('circle');
let source = Observable.fromEvent(circle, 'mousemove')
    .map((event: MouseEvent) => [
        event.clientX,
        event.clientY
    ])
    .filter(event => event[0] <= 100 && event[1] <= 100);

subscribe(source);
