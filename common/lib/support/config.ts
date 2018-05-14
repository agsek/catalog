import {Props, WindowEx} from '../../types';
declare var window: WindowEx;


class Config {
    private props: Props;
    private cache: Props;
    private readonly separator: string = '/';

    constructor(properties: Props) {
        this.props = properties;
        this.cache = Object.create(null);
    }

    public find(key: string, defaults?: any): any {
        if (!key || !(this.props instanceof Object) || Array.isArray(this.props)) {
           return defaults;
        }

        if (this.props[key] || this.cache[key]) {
            return this.props[key] || this.cache[key];
        }

        const parts = key.split(this.separator).filter((value) => value !== '');
        let obj: {} = this.props;

        for (const part of parts) {
            if (obj instanceof Object && obj[part]) {
                obj = obj[part];
            } else {
                return this.cache[key] = obj[part] || defaults;
            }
        }

        return this.cache[key] = obj || defaults;
    }
}


const props = (window.getConfig ? window.getConfig() : Object.create(null));
const instance = new Config(props);

function getStoreConfig(path: string, defaults?: any): any {
    return instance.find(path, defaults);
}

export {
    Config,
    getStoreConfig
};
