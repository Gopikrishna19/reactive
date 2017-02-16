import {Observable} from 'rxjs';
import {load} from './loader'
import {subscribe} from '../observer/subcriber';

const circle = document.getElementById('circle');
const click = Observable.fromEvent(circle, 'click')
    .flatMap(() => load('/api/movies1.json'));

const next = data => console.log(data);
const error = (err: Response) => console.log(`${err.status}: ${err.statusText}`);

subscribe(click, next, error);
