import canvasAbstract from './canvasAbstract'
import config from '../config'
class Straw extends canvasAbstract {
    render(): void {
        super.drawModels(config.straw.num)
        // this.drawModels()
    }

}
export default new Straw()