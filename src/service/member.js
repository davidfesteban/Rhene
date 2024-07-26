
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
        //new DefaultApi().myConsumerProfileGet().then().catch()
        //doRegister
    }

    async registerConsumer(consumer) {
        //doRegister
    }

    async login(identity) {
        //this.#token = await this.#storage.getStoredValue(this.#storage.keys.TOKEN)


        //check token
        //doLogin

    }

    async logout() {
        //doLogout
    }

}