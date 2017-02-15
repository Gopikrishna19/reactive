import {Observable} from 'rxjs';
import {load} from './loader'
import {subscribe} from '../observer/subcriber';

const circle = document.getElementById('circle');
const click = Observable.fromEvent(circle, 'click')
    .flatMap(() => load('/api/movies.json'));

const next = data => console.log(data);

subscribe(click, next);
