import './news-block.scss';
import { BaseView } from "../../base-view/base-view";
import { newsMockResponse } from "./news-data";
import NewsItem from "./news/news-item";

export default class NewsBlock extends BaseView {

    private sliderChildrens: NewsItem[] = [];
    private sliderPos = 0;
    private maxSliderPos = newsMockResponse.length - 1;
    private touchStart: number | undefined;
    private TOUCH_TO_SWIPE = 100;
    private preSwipeMove = 0;
    private preSwipedElem: HTMLElement | undefined;

    constructor() {
        super();
        this.viewElem = this.createElem();
    }

    private createElem(): HTMLElement {
        const wrapper = document.createElement('div');
        const main = this.createMain(wrapper);
        const tray = this.createTray(wrapper);

        wrapper.append(tray, main);

        return wrapper
    }

    private trayBlock(block: HTMLDivElement): void {
        block.classList.add('trayed');
    }

    private untrayBlock(block: HTMLDivElement): void {
        block.classList.remove('trayed');
    }

    private createMain(wrapper: HTMLDivElement): HTMLDivElement {
        const main = document.createElement('div');
        const left = document.createElement('div');
        const right = document.createElement('div');
        const listWrapper = document.createElement('div');
        const newsList = document.createElement('div');
        const newsControls = document.createElement('div')
        const trayBtn = document.createElement('button');
        const prevBtn = document.createElement('button');
        const nextBtn = document.createElement('button');
        const trayIcon = document.createElement('i');
        const prevIcon = document.createElement('i');
        const nextIcon = document.createElement('i');
        main.className = 'news-block__main';
        left.className = 'news-block__left';
        right.className = 'news-block__right';
        newsList.className = 'news-block__news-list';
        listWrapper.className = 'news-block__list-wrapper';
        newsControls.className = 'news-block__controls';
        trayBtn.className = 'news-block__btn news-block__btn-tray';
        prevBtn.className = 'news-block__btn news-block__btn-prev hidden';
        nextBtn.className = 'news-block__btn news-block__btn-next';
        trayIcon.className = 'fa-regular fa-eye-slash';
        prevIcon.className = 'fa-solid fa-arrow-left'
        nextIcon.className = 'fa-solid fa-arrow-right';
        trayBtn.appendChild(trayIcon);
        prevBtn.appendChild(prevIcon);
        nextBtn.appendChild(nextIcon);
        newsControls.append(trayBtn, prevBtn, nextBtn);
        listWrapper.appendChild(newsList);
        newsMockResponse.forEach((item) => {
            const newsItem = new NewsItem(item);
            this.sliderChildrens.push(newsItem);
            newsList.appendChild(newsItem.getView());
        });
        left.append(listWrapper, newsControls
        );
        main.append(left, right);

        trayBtn.addEventListener('click', () => this.trayBlock(wrapper));
        trayBtn.addEventListener('touchend', () => this.trayBlock(wrapper));
        nextBtn.addEventListener('click', () => this.handleNextClick(newsList, prevBtn, nextBtn));
        prevBtn.addEventListener('click', () => this.handlePrevClick(newsList, prevBtn, nextBtn));
        window.addEventListener('resize', () => this.moveSlider(newsList));    
        main.addEventListener('touchstart', (event: TouchEvent) => this.handleTouchStart(event));
        window.addEventListener('touchmove', (event: TouchEvent) => this.handleTouchMove(event));
        main.addEventListener('touchend', (event: TouchEvent) => { 
            this.handleTouchEnd(event, newsList);
            this.onMoveEnd(prevBtn, nextBtn);
        });

        return main;
    }

    private createTray(wrapper: HTMLDivElement): HTMLDivElement {
        const tray = document.createElement('div');
        const trayText = document.createElement('div');
        const untrayBtn = document.createElement('button');
        const untrayIcon = document.createElement('i');
        trayText.textContent = 'AirDrop Hunter News';
        wrapper.className = 'news-block';
        tray.className = 'news-block__tray';
        untrayBtn.className = 'news-block__btn news-block__btn-untray'
        untrayIcon.className = 'fa-regular fa-eye'
        untrayBtn.appendChild(untrayIcon);
        tray.append(untrayBtn, trayText);
        untrayBtn.addEventListener('click', () => this.untrayBlock(wrapper));

        return tray;
    }

    private handleNextClick(newsList: HTMLDivElement, prevBtn: HTMLButtonElement, nextBtn: HTMLButtonElement) {
        this.sliderPos += 1;
        this.moveSlider(newsList);
        this.onMoveEnd(prevBtn, nextBtn);
    }

    private handlePrevClick(newsList: HTMLDivElement, prevBtn: HTMLButtonElement, nextBtn: HTMLButtonElement) {
        this.sliderPos -= 1;
        this.moveSlider(newsList);
        this.onMoveEnd(prevBtn, nextBtn);
    }

    private onMoveEnd(prevBtn: HTMLButtonElement, nextBtn: HTMLButtonElement) {
        if (this.sliderPos === this.maxSliderPos) {
            nextBtn.classList.add('hidden');
            prevBtn.classList.remove('hidden');
        }
        if (this.sliderPos === 0) {
            prevBtn.classList.add('hidden');
            nextBtn.classList.remove('hidden');
        }
    }


    private moveSlider(movingElem: HTMLDivElement) {
        const move = this.sliderChildrens[0].getView().offsetWidth;
        movingElem.style.transform = `translateX(-${move * this.sliderPos}px)`;
    }

    private handleTouchStart(event: TouchEvent) {
        this.touchStart = event.touches[0].screenX;
    }

    private handleTouchMove(event: TouchEvent) {
        const delta = event.touches[0].screenX - this.touchStart;
        console.log(delta)
        if ((delta < 0 && this.sliderPos === this.maxSliderPos) || (delta > 0 && this.sliderPos === 0)) {
            return; //filter events when swipe in directions where no items left
        }
        if (delta === 0 && this.preSwipedElem) {
            this.preSwipedElem.style.transform = 'translateX(0px)'; //case when user draged to one direction then while still holding touch draged to other direction
            return
        }

        const movingItem = delta < 0 ? this.sliderChildrens[this.sliderPos + 1] : this.sliderChildrens[this.sliderPos - 1];
        delta < this.preSwipeMove ? this.animatePreSwipeLeft(delta, movingItem.getView()) : this.animatePreSwipeRight(delta, movingItem.getView());
        this.blurItem(this.sliderChildrens[this.sliderPos].getView());
        this.preSwipedElem = movingItem.getView();
    }

    private animatePreSwipeLeft(delta: number, movingElem: HTMLElement) {
        if (delta < this.preSwipeMove - 10 && delta > -300) {
            movingElem.style.zIndex = `3`
            this.preSwipeMove -= 10;
            movingElem.style.transform = `translateX(${this.preSwipeMove}px)`; 
        }
    }

    private animatePreSwipeRight(delta: number, movingElem: HTMLElement) {
        if (delta > this.preSwipeMove + 10 && delta < 300) {
            this.preSwipeMove += 10;
            movingElem.style.transform = `translateX(${this.preSwipeMove}px)`;
            movingElem.style.zIndex = '3';
        }
    }

    private blurItem(item: HTMLElement) {
        item.style.opacity = '0.20';
    }

    private handleTouchEnd(event: TouchEvent, movingElem: HTMLDivElement) {
        event.preventDefault();
        
        const delta = event.changedTouches[0].screenX - this.touchStart;
        const swiped = this.sliderChildrens[this.sliderPos];
        if (delta > this.TOUCH_TO_SWIPE &&  this.sliderPos > 0) {
            this.sliderPos -= 1;
            this.moveSlider(movingElem);
        }
        if ((delta * -1) > this.TOUCH_TO_SWIPE &&  this.sliderPos < this.maxSliderPos) {
            this.sliderPos += 1;
            this.moveSlider(movingElem);
        }
        swiped.getView().style.opacity = '1';
        if (this.preSwipedElem) {
            this.preSwipedElem.style.transform = 'translateX(0px)';
            this.preSwipedElem.style.zIndex = '';
        }
    }

}