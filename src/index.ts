import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.scss';
import './index.css';

console.log('Setup complete');

const homeIcon = document.createElement('i');
homeIcon.className = 'fa-solid fa-house';

const testDiv = document.createElement('div');
testDiv.textContent = 'Test';
document.body.append(testDiv);


document.body.append(homeIcon);