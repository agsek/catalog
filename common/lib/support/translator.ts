import {WindowEx} from '../../types';
import {Config} from './config';
declare var window: WindowEx;

const instance = new Config((window && window.getTranslations && window.getTranslations()) || Object.create(null));

function translate(key: string, defaults?: string): string {
    return instance.find(key, defaults || key);
}

export {
    translate,
    translate as __,
    translate as __t,
    translate as _t
};
