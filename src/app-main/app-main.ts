import './app-main.scss';
import { BaseView } from "../base-view/base-view";
import CarouselBlock from './carousel-block/carousel-block';
import NewsBlock from './news-block/news-block';

export default class AppMain extends BaseView {
    private carouselBlock = new CarouselBlock();
    private newsBlock = new NewsBlock();

    constructor() {
        super();
        this.viewElem = this.createElem();
    }

    private createElem(): HTMLElement {
        const wrapper = document.createElement('main');
        wrapper.className = 'app__main';

        wrapper.append(
            this.carouselBlock.getView(),
            this.newsBlock.getView()
        );
        return wrapper;
    }


}