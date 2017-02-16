import {Observable} from 'rxjs';

export const load = (url: string) => Observable.create((observer) => {
    fetch(url)
        .then(response => response.json(), observer.error)
        .then(response => {
            observer.next(response);
            observer.complete();
        });
});
