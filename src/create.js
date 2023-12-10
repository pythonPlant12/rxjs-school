import { displayLog } from './utils';
import { fromEvent } from 'rxjs';

export default () => {
    /** start coding */
    const actionBtn = document.getElementById('action-btn')

    // Creo observable fromEvent, pasandole el elemento del botón y la acción que quiero escuchar
    const source = fromEvent(actionBtn, 'click')
    source.subscribe(datos => {
        displayLog(`click event at pos (${datos.x}, ${datos.y})`)
    })

    fromEvent(document, 'mousemove').subscribe(evento => {
            console.log(evento)
        }
    )
    /** end coding */
}