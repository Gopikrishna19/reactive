export const subscribe = (
    source,
    next = value => console.log(`value: ${value}`),
    error = error => console.log(`error: ${error}`),
    complete = () => console.log('complete')
) =>
    source.subscribe(next, error, complete);
