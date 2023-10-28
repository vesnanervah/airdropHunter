import { BaseView } from "../../../base-view/base-view";
import { NewsData } from "../news-data";

export default class NewsItem extends BaseView {
    constructor(data: NewsData) {
        super();
        this.viewElem = this.createElem(data);
    }

    createElem(data: NewsData): HTMLElement {
        const wrapper = document.createElement('div');
        const newsDate = document.createElement('div');
        const newsHeader = document.createElement('h3');
        const newsText = document.createElement('div');
        newsDate.textContent = `${data.date.day} ${data.date.time}`;
        newsHeader.textContent = data.header;
        newsText.textContent = data.text;
        wrapper.className = 'news-block__news-item';
        newsDate.className = 'news-block__date';
        newsHeader.className = 'news-block__header';
        newsText.className = 'news-block__text';

        wrapper.append(
            newsDate,
            newsHeader,
            newsText,
        );
        return wrapper;
    }
}