import {PageLogin} from "../component/page-login.js";
import {PageTwo} from "../component/page-two.js";
import {PageLoading} from "../component/page-loading.js";

//Initialize views
customElements.define('page-loading', PageLoading);
customElements.define('page-login', PageLogin);
customElements.define('page-two', PageTwo);

//Initialize service
