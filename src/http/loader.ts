import {Observable} from 'rxjs';

export const load = (url: string) =>
    Observable.defer(
        () => Observable.fromPromise(
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    return Promise.reject(response);
                })
        )
    );
