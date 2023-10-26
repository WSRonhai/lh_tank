import './assets/index.scss'
// import './canvas/straw'
import straw from './canvas/straw'
import config from './config'
import { promise } from './service/image'
const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'

async function bootstrap() {
    await Promise.all(promise)
    straw.render()
}
void bootstrap() 