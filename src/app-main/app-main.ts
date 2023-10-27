import 'app-main.scss';
import { BaseView } from "../base-view/base-view";

export default class AppMain extends BaseView {

    constructor() {
        super();
        this.viewElem = this.createElem();
    }

    createElem(): HTMLElement {
        const wrapper = document.createElement('main');
        wrapper.className = 'app__main';
        return wrapper;
    }
}