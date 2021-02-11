import { block } from "../utils/utils"
import { TextBlock, TitleBlock } from "./blocks"


export class Sidebar {
    constructor(selector, updateCallback) {
        this.el = document.querySelector(selector)
        this.init()
        this.update = updateCallback
    }
    init() {
        this.el.insertAdjacentHTML('afterbegin', this.template)
        this.el.addEventListener('submit',this.add.bind(this))
    }
    add(event) {
        event.preventDefault()
        const type = event.target.name,
              value = event.target.value.value,
              styles = event.target.styles.value;
        let newBlock;
       switch(type){
           case 'text':
            newBlock = new TextBlock(value, {styles})
            case 'title':
            newBlock = new TitleBlock(value, {styles})
       }
       this.update(newBlock);
       event.target.value.value = ''
       event.target.styles.value = ''
    }
    get template() {
        return [block('text'),block('title')].join('');
    }
}
