import config from "../config"
import { image } from "../service/image"


export default abstract class canvasAbstract {
    protected items = []
    abstract render(): void
    constructor(
        protected app = document.querySelector('#app') as HTMLDivElement,
        protected el = document.createElement('canvas'),
        protected canvas = el.getContext('2d')!
    ) {
        this.createCanvas()

    }
    protected createCanvas() {
        this.el.width = config.canvas.width
        this.el.height = config.canvas.height
        this.app.insertAdjacentElement('afterbegin', this.el)
    }
    //画贴图
    protected drawModels(num: number) {
        Array(num).fill('').forEach(() => {
            const position = this.position()
            this.canvas.drawImage(image.get("straw")!, position.x, position.y, config.model.width, config.model.height)
        })
    }
    //随机位置
    protected position() {
        console.log(config.canvas.width / config.model.width);
        console.log(Math.floor(Math.random() * (config.canvas.height / config.model.height)));

        return {
            x: Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
            y: Math.floor(Math.random() * (config.canvas.height / config.model.height)) * config.model.height
        }
    }
}