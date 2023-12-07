import { displayLog } from './utils';
import { Observable } from 'rxjs';

export default () => {
    /** start coding */
    // Así como creo nuevo Observable
    const myObservable = new Observable(function(observer) {
        observer.next("Hello") // con .next() hago push de valores, desde el observable al observer
        setTimeout(() => {
            observer.next(" world.")
        }, 2000);
    })


    const subscribeToMyObservable = myObservable.subscribe(evento => displayLog(evento))
    /** end coding */
}