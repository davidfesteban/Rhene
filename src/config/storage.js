import {Preferences} from '@capacitor/preferences';

export class Storage {

    static #instance = null;

    keys = Object.freeze({
        TOKEN: "token",
        USER: "user"
    });

    constructor() {
        if (!Storage.#instance) {
            Storage.#instance = this;
        }
        return Storage.#instance;
    }


    async saveValue(key, model) {
        await Preferences.set({
            key: key,
            value: JSON.stringify(model)
        });
    }


    async getStoredValue(key) {
        const ret = await Preferences.get({key: key});
        return JSON.parse(ret.value);
    }

}

