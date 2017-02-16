import {Observable} from 'rxjs';

export const load = (url: string) =>
    Observable.fromPromise(
        fetch(url)
            .then(response => response.json())
    );
