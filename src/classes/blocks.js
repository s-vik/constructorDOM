import { colSm, row, css} from "../utils/utils";

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }
  toHTML() {
    throw new Error("the method toHTML must be implemented ");
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { tag = "h1", styles } = this.options;
    return row(colSm(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}
export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const {tag = 'p', styles} = this.options;
    return row(colSm(`<${tag}>${this.value}</${tag}>`),css(styles));
  }
}
export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const {styles} = this.options;
    return row(this.value.map(colSm).join(''),css(styles));
  }
}
export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const {alt} = this.options;
    return row(colSm(`<img class="banner" alt=${alt} src=${this.value}/>`))
  }
}
