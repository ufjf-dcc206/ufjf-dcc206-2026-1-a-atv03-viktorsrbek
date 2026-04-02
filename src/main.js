import './style.css'
import { setupCounter } from './counter.js'
import { setupRootAppContent } from './setupRootAppContent.js'

document.querySelector('#app').innerHTML = setupRootAppContent();

setupCounter(document.querySelector('#counter'))
