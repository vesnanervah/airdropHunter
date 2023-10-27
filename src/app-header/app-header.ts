import { BaseView } from "../base-view/base-view";
import './app-header.scss';
import TopBar from "./top-bar/top-bar";
import BottomBar from "./bottom-bar/bottom-bar";

export default class AppHeader extends BaseView {
    private topBar: TopBar = new TopBar();
    private bottomBar: BottomBar = new BottomBar();

    constructor() {
        super();
        this.viewElem = this.createView();
    }

    private createView(): HTMLElement {
        const wrapper = document.createElement('header');
        wrapper.className = 'app__header';

        wrapper.append(
            this.topBar.getView(),
            this.bottomBar.getView()
        );

        return wrapper;
    }
}