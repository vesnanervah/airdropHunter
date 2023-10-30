import './news-block.scss';
import { BaseView } from "../../base-view/base-view";
import { newsMockResponse, NewsData } from "./news-data";
import NewsItem from "./news/news-item";

export default class NewsBlock extends BaseView {

    private sliderChildrens: NewsItem[] = [];
    private sliderPos = 0;
    private maxSliderPos = newsMockResponse.length - 1;

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
        nextBtn.addEventListener('click', () => this.handleNextClick(newsList, prevBtn, nextBtn));
        prevBtn.addEventListener('click', () => this.handlePrevClick(newsList, prevBtn, nextBtn));
        window.addEventListener('resize', () => this.moveSlider(newsList));    

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

}