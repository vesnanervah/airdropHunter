class BaseView {
    protected viewElem: HTMLElement | undefined;

    getView(): HTMLElement | undefined {
        return this.viewElem;
    }

    hide(): void {
        this.viewElem.classList.add('hidden');
    }

    reveal(): void {
        this.viewElem.classList.remove('hidden');
    }

    isHidden(): boolean {
        return this.viewElem.classList.contains('hidden');
    }
}

export { BaseView }