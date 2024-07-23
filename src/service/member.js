import {ApiClient} from "../../generated-client";
import {Storage} from "../config/storage";

export class MemberService {

    static #instance = null;
    #storage = new Storage();

    constructor() {
        if (!MemberService.#instance) {
            MemberService.#instance = this;
        }
        return MemberService.#instance;
    }

    async registerWorker(worker) {
        //doRegister
    }

    async registerConsumer(consumer) {
        //doRegister
    }

    async login(identity) {
        let token = await this.#storage.getStoredValue(this.#storage.keys.TOKEN)


        //check token
        //doLogin

    }

    async logout() {
        //doLogout
    }

}