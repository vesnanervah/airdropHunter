import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.scss';
import AppHeader from './app-header/app-header';
import AppMain from './app-main/app-main';


const header = new AppHeader();
const main = new AppMain();

document.body.append(
    header.getView(),
    main.getView()
);