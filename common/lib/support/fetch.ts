import {isString} from './helpers';
import {stringify} from 'qs';

export type RequestMethod = 'get' | 'post';
export type CredentialsMethod = 'omit' | 'same-origin' | 'include';

export function fetchData(url: string, body: string|any = null, method: RequestMethod = 'get', credentials: CredentialsMethod = 'include'): any {
    const headers = new Headers();

    headers.append('X-Requested-With', 'XMLHttpRequest');

    if (!isString(body)) {
        body = stringify(body, {arrayFormat: 'brackets'});
    }

    if (method.match(/(get|head)/i)) {
        if (isString(body) && String(body).length) {
            // tslint:disable-next-line
            const sep = url.includes('?') ? '&' : '?';
            url = `${url}${sep}${body}`;
        }
        body = null;
    }

    if (method.match(/(post|put)/i) && isString(body)) {
        headers.append('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
    }

    let options: RequestInit = {
        credentials,
        headers,
        method
    };

    if (body) {
        options = {...options, body};
    }

    const request = new Request(url, options);

    return fetch(request);
}
