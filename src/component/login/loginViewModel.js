//import {ApiClient, DefaultApi} from "generated-client";



export class LoginViewModel {

    static #instance = null;
    #rheneApi = new Identity(); //new ApiClient();
    #identity = undefined; //new this.#rheneApi.Identity();
    #bindings = {};

    constructor() {
        if (!LoginViewModel.#instance) {
            LoginViewModel.#instance = this;
        }
        return LoginViewModel.#instance;
    }

    addBindings(binding) {
        this.#bindings.add(binding);
    }

    updateAllBindings() {
        for (const binding in this.#bindings) {
            binding.updateElement();
        }
    }

    set identity(newIdentity) {
        this.#identity = newIdentity;
        this.updateAllBindings();
    }

    get identity() {
        return this.#identity;
    }

}