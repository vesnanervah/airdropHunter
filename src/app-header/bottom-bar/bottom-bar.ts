import './bottom-bar.scss';
import { BaseView } from "../../base-view/base-view";

export default class BottomBar extends BaseView {
    constructor() {
        super();
        this.viewElem = this.createElem();
    }

    createElem(): HTMLElement {
        const wrapper = document.createElement('div');
        const logo = new Image();
        const depoBtn = document.createElement('button');
        const walletBtn = document.createElement('button');
        const left = document.createElement('div');
        const right = document.createElement('div');
        wrapper.className = 'header__bottom-bar';
        depoBtn.className = 'header__btn header__btn-depo';
        walletBtn.className = 'header__btn header__btn-wallet'
        right.className = 'header__btns';

        logo.src = './img/logo.png'
        depoBtn.textContent = 'Deposit';
        walletBtn.textContent = 'Connect Wallet';

        left.append(logo);
        right.append(depoBtn, walletBtn);
        wrapper.append(left, right);
        return wrapper
    }
}