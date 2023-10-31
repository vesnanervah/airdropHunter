import './carousel-block.scss';
import { BaseView } from "../../base-view/base-view";
import { blockchainsMockResponse } from '../../data/blockchains';

export default class CarouselBlock extends BaseView {
    private carouselItems: HTMLElement[] = [];
    private itemsListContainer: HTMLDivElement | undefined;
    private itemsList: HTMLDivElement | undefined;
    private GAP = 15;
    private ITEM_WIDTH = 40;
    private ANIMATION_TIME = 200;
    private isAvailable = true;

    constructor() {
        super();
        this.viewElem = this.createElem();
        requestAnimationFrame(() => this.fillCarousel());
        window.addEventListener('resize', () => this.fillCarousel());
    }

    private createElem():HTMLElement {
        const wrapper = document.createElement('div');
        const leftControl = this.createCarouselControl('fa-solid fa-arrow-left')
        const rightControl = this.createCarouselControl('fa-solid fa-arrow-right');
        const center = document.createElement('div');
        const items = this.createCarouselItems();
        center.className = 'carousel-block__center';
        wrapper.className = 'carousel-block';
        this.itemsListContainer = center;
        this.itemsList = items;
        center.appendChild(items);
        wrapper.append(
            leftControl,
            center,
            rightControl
        );

        leftControl.addEventListener('click', () => this.handlePrevClick());
        rightControl.addEventListener('click', () => this.handleNextClick());
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

    private createCarouselItems(): HTMLDivElement {
        const wrapper = document.createElement('div');
        wrapper.className = 'carousel-block__items';
        blockchainsMockResponse.forEach((item) => {
            const itemElem = this.createCarouselItem(item.name, item.iconUrl);
            wrapper.appendChild(itemElem);
            this.carouselItems.push(itemElem);
        });
        return wrapper;
    }

    private createCarouselItem(hrefId: string, imgSrc: string): HTMLElement {
        const wrapper = document.createElement('span');
        const img = new Image();
        wrapper.className = 'carousel-block__item';
        img.className = 'carousel-block__img';
        img.src = imgSrc;
        wrapper.addEventListener('click', () => {
            this.handleCarouselItemClick(hrefId);
        });
        wrapper.dataset.name = hrefId;
        wrapper.appendChild(img);
        return wrapper;
    }

    private handleCarouselItemClick(hrefId: string) {
        const ref = document.getElementById(hrefId);
        if (ref) {
            window.scrollTo({
                top: ref.getBoundingClientRect().top + window.scrollY - 25,
                behavior: 'smooth'
            });
            this.animateScroll(ref);
        } ;
    }

    //proper work of carousel requires one more element inside, than user can view.
    private fillCarousel(index = 0) {
        if (this.itemsListContainer.offsetWidth + this.carouselItems[0].offsetWidth  >= this.itemsList.scrollWidth) {
            if (this.carouselItems[index].dataset.name !== this.carouselItems[this.carouselItems.length - 1].dataset.name) { //filter same items
                const clone = this.carouselItems[index].cloneNode(true) as HTMLElement;
                clone.addEventListener('click', () => this.handleCarouselItemClick(clone.dataset.name));
                this.carouselItems.push(clone as HTMLElement);
                this.itemsList.appendChild(clone);
            }
            this.fillCarousel(this.carouselItems[index + 1] ? index + 1 : 0);
        }
    }

    private prependCarousel() {
        this.carouselItems[this.carouselItems.length - 1].remove();
        this.carouselItems.unshift(this.carouselItems[this.carouselItems.length - 1]);
        this.itemsList.prepend(this.carouselItems[0]);
        this.carouselItems.pop();
    }

    private appendCarousel() {
        this.carouselItems[0].remove();
        this.carouselItems.push(this.carouselItems[0]);
        this.itemsList.append(this.carouselItems[0]);
        this.carouselItems.shift();
    }

    private handlePrevClick() {
        if (!this.isAvailable) {
            return
        }
        const move = -1 * (this.ITEM_WIDTH + this.GAP);
        this.prependCarousel();
        this.itemsList.style.transform = `translateX${move}px`;
        this.animateMove(move, 0, () => this.itemsList.style.transform = ``);
    }

    private handleNextClick() {
        if (!this.isAvailable) {
            return
        }
        const move = -1 * (this.ITEM_WIDTH + this.GAP);
        this.animateMove(0, move, () => this.appendCarousel());

    }

    private animateMove(startPoint: number, endPoint: number, cb?: () => void) {
        this.isAvailable = false;
        const animation = this.itemsList.animate([
            { transform: `translateX(${startPoint}px)`},
            { transform: `translateX(${endPoint}px)`}
        ], {
            duration: this.ANIMATION_TIME
        });
        animation.onfinish = () => {
            cb();
            this.isAvailable = true;
        };
    }

    private animateScroll(elem: HTMLElement) {
        // TODO: custom scroll and more complex animation
        elem.animate([
            {transform: 'scale(1.0)'},
            {transform: 'scale(1.12)'},
            {transform: 'scale(1.08)'},
            {transform: 'scale(1.06)'},
            {transform: 'scale(1.04)'},
            {transform: 'scale(1.02)'},
            {transform: 'scale(1.01)'},
        ], {
            duration: 600
        })
    }
}
