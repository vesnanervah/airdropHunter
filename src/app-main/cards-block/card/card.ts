import { BaseView } from '../../../base-view/base-view';
import { Blockchain } from '../../../data/blockchains';
import './card.scss';

export default class Card extends BaseView {
    constructor(data: Blockchain) {
        super();
        this.viewElem = this.createElem(data);
    }

    private createElem(data: Blockchain): HTMLDivElement {
        const wrapper = document.createElement('div');
        const top = document.createElement('div');
        const bottom = document.createElement('div');
        const meet = document.createElement('div');
        const img = new Image();
        const name = document.createElement('span');
        const description = document.createElement('div');
        const cast = document.createElement('div');
        const castHead = document.createElement('div');
        const castBody = document.createElement('div');
        const expected = document.createElement('div');
        const probability = document.createElement('div');
        const expectedPlaceholder = document.createElement('div');
        const probabilityPlaceholder = document.createElement('div');
        const expectedValue = document.createElement('div');
        const probabilityValue = document.createElement('div');
        const tarrifs = this.createTariffs(data);
        const buy = document.createElement('button');

        wrapper.className = 'card';
        top.className = 'card__top';
        bottom.className = 'card__bottom';
        meet.className = 'card__meet';
        img.className = 'card__img';
        name.className = 'card__name';
        description.className = 'card__description'
        cast.className = 'card__cast';
        castHead.className = 'card__cast_source';
        expected.className = 'card__expected';
        probability.className = 'card__probability';
        expectedValue.className = 'card__expected_value';
        probabilityValue.className = 'card__probability_value';
        buy.className = 'card__buy';
        castBody.className = 'card__cast_data'

        wrapper.setAttribute('id', data.name);
        img.src = data.iconUrl;
        name.textContent = data.name;
        description.textContent = data.description;
        castHead.textContent = 'On artificial AI:';
        expectedPlaceholder.textContent = 'expected airdrop';
        probabilityPlaceholder.textContent = 'probability';
        expectedValue.textContent = data.expectedDrop;
        probabilityValue.textContent = data.probability;
        buy.textContent = 'Buy';

        wrapper.append(top, bottom);
        top.append(meet, description);
        meet.append(img, name);
        bottom.append(cast, tarrifs, buy);
        cast.append(castHead, castBody);
        castBody.append(expected, probability);
        expected.append(expectedPlaceholder, expectedValue);
        probability.append(probabilityPlaceholder, probabilityValue);
        return wrapper;
    }

    private createTariffs(data: Blockchain): HTMLDivElement {
        const tarrifs = document.createElement('div');
        const head = document.createElement('div');
        const body = document.createElement('div');
        const tariffHeader = document.createElement('span');
        const costHeader = document.createElement('span');
        head.className = 'card__tariffs_head';
        body.className = 'card__tarrifs_body';
        tariffHeader.textContent = 'Tariff';
        costHeader.textContent = 'Cost, $';
        head.append(tariffHeader, costHeader);

        data.tarrifs.forEach((item) => {
            const tariff = document.createElement('div');
            const accounts = document.createElement('span');
            const cost = document.createElement('span');
            const link = document.createElement('a');
            accounts.textContent = `${item.accounts} accounts`;
            cost.textContent = `${item.cost}`;
            link.textContent = 'Details';
            link.setAttribute('href', item.link);
            tariff.className = 'card__tariff';
            tariff.append(accounts, cost, link);
            body.appendChild(tariff);
        });

        tarrifs.className = 'card__tariffs';

        tarrifs.append(head, body);
        return tarrifs
    }
}