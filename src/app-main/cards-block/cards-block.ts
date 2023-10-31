import './cards-block.scss';
import { blockchainsMockResponse } from '../../data/blockchains';
import { BaseView } from "../../base-view/base-view";
import Card from './card/card';

export default class CardsBlock extends BaseView {
    constructor() {
        super();
        this.viewElem = this.createElem();
    }

    private createElem(): HTMLDivElement {
        const wrapper = document.createElement('div');
        blockchainsMockResponse.forEach((item) => {
            const card = new Card(item);
            wrapper.appendChild(card.getView());
        })
        wrapper.className = 'cards-block';

        return wrapper;
    }
}