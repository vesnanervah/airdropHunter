import './top-bar.scss';
import { BaseView } from "../../base-view/base-view";

export default class TopBar extends BaseView {
    constructor() {
        super();
        this.viewElem = this.createElem();
    }

    private createElem(): HTMLElement {
        const wrapper = document.createElement('div');
        const ghLink = document.createElement('a');
        const txtSpan = document.createElement('span');
        const icon = document.createElement('i');
        wrapper.className = 'header__top-bar';
        ghLink.className = 'header__gh-link';
        txtSpan.className = 'header__text';
        icon.className = 'header__icon fa-brands fa-github'
        txtSpan.textContent = '@vesnanervah';
        ghLink.append(
            txtSpan, icon
        );
        ghLink.setAttribute('href', 'https://github.com/vesnanervah');
        wrapper.appendChild(ghLink);
        return wrapper;
    }
}