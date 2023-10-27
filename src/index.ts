import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.scss';
import AppHeader from './app-header/app-header';


const header = new AppHeader();

document.body.append(
    header.getView()
);