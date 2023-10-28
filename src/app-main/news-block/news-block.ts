import './news-block.scss';
import { BaseView } from "../../base-view/base-view";
import { newsMockResponse, NewsData } from "./news-data";
import NewsItem from "./news/news-item";

export default class NewsBlock extends BaseView {

    constructor() {
        super();
        this.viewElem = this.createElem();
    }

    createElem(): HTMLElement {
        const wrapper = document.createElement('div');
        const left = document.createElement('div');
        const right = document.createElement('div');
        const listWrapper = document.createElement('div');
        const newsList = document.createElement('div');
        const newsControls = document.createElement('div')
        const hideBtn = document.createElement('button');
        const nextBtn = document.createElement('button');
        const hideIcon = document.createElement('i');
        const nextIcon = document.createElement('i');
        wrapper.className = 'news-block';
        left.className = 'news-block__left';
        right.className = 'news-block__right';
        newsList.className = 'news-block__news-list';
        listWrapper.className = 'news-block__list-wrapper';
        newsControls.className = 'news-block__controls';
        hideBtn.className = 'news-block__btn news-block__btn-hide'
        nextBtn.className = 'news-block__btn news-block__btn-next'
        hideIcon.className = 'fa-regular fa-eye-slash';
        nextIcon.className = 'fa-solid fa-arrow-right';
        hideBtn.appendChild(hideIcon)
        nextBtn.appendChild(nextIcon)
        newsControls.append(
            hideBtn,
            nextBtn
        );

        newsMockResponse.forEach((item) => {
            const newsItem = new NewsItem(item);
            newsList.appendChild(newsItem.getView());
        });

        listWrapper.appendChild(newsList);
        left.append(
            listWrapper,
            newsControls
        );
        wrapper.append(left, right);

        return wrapper
    }
}