import { displayLog } from './utils';
import { interval, timer } from 'rxjs';

export default () => {
    /** start coding */
    const source = interval(500)
    const subscription = source.subscribe(data => displayLog(data));

    // You can use this two lines as they are the same. (timer is an Observable from rxjs)
    // times es más poderoso, porque podemos crear intervalos
    // setTimeout(() => subscription.unsubscribe(), 3000)
    timer(3000).subscribe(() => subscription.unsubscribe())

    // Creamos timer que empezará después de 4s y se repitira cada 0,1s
    const source2 = timer(4000, 100)
    const subscription2 = source2.subscribe(data => displayLog(`2 - ${data}`));

    // Creo otro timer para cancelar el observable
    timer(6000).subscribe(() => subscription2.unsubscribe());

    /** end coding */
}