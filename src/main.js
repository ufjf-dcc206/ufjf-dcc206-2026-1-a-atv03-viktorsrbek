import './style.css'
import { setupEvents, setupRootAppContent } from './setupRootAppContent.js'
import { iniciaLista } from './lista.js'

const app = document.querySelector('#app');
iniciaLista();
app.append(setupRootAppContent());
setupEvents(app);
