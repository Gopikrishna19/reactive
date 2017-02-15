import {Observable} from 'rxjs';
import {load} from './loader'
import {subscribe} from '../observer/subcriber';

const circle = document.getElementById('circle');
const click = Observable.fromEvent(circle, 'click');

const next = () => load('/api/movies.json').subscribe(data => console.log(data));

subscribe(click, next);
