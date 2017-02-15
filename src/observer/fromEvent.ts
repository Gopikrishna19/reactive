import {Observable} from 'rxjs';
import {subscribe} from './subcriber';

const circle = document.getElementById('circle');
const source = Observable.fromEvent(document, 'mousemove')
    .map((event: MouseEvent) => ({
        x: event.clientX,
        y: event.clientY
    }))
    .filter(event => event.x <= 500 && event.y <= 500);

const next = value => {
    circle.style.left = value.x;
    circle.style.top = value.y;
};

subscribe(source, next);
