import './carousel-block.scss';
import { BaseView } from "../../base-view/base-view";
import { blockchainItems } from "./blockchain-items";

export default class CarouselBlock extends BaseView {
    
    constructor() {
        super();
        this.viewElem = this.createElem();
    }

    private createElem():HTMLElement {
        const wrapper = document.createElement('div');
        const leftControl = this.createCarouselControl('fa-solid fa-arrow-left')
        const rightControl = this.createCarouselControl('fa-solid fa-arrow-right');
        const center = document.createElement('div');
        const items = this.createCarouselItems();
        center.className = 'carousel-block__center';
        wrapper.className = 'carousel-block';

        center.appendChild(items);
        wrapper.append(
            leftControl,
            center,
            rightControl
        );
        return wrapper
    }

    private createCarouselControl(iconClass: string): HTMLElement {
        const wrapper = document.createElement('button');
        const icon = document.createElement('i');
        icon.className = iconClass;
        wrapper.className = 'carousel-block__control';
        wrapper.appendChild(icon);
        return wrapper;
    }

    private createCarouselItems(): HTMLElement {
        const wrapper = document.createElement('div');
        wrapper.className = 'carousel-block__items';
        blockchainItems.forEach((item) => {
            const itemElem = this.createCarouselItem(item.hrefId, item.imgSrc);
            wrapper.appendChild(itemElem);
        });

        return wrapper;
    }

    private createCarouselItem(hrefId: string, imgSrc: string): HTMLElement {
        const wrapper = document.createElement('span');
        const ref = document.getElementById(hrefId);
        const img = new Image();
        wrapper.className = 'carousel-block__item';
        img.className = 'carousel-block__img';
        img.src = imgSrc;
        wrapper.addEventListener('click', () => {
            this.handleCarouselItemClick(ref);
        });
        wrapper.appendChild(img);
        return wrapper;
    }

    private handleCarouselItemClick(refElem: HTMLElement) {
        // smooth scroll
    }
}
