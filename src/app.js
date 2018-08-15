import {
  HELLO
} from './modules/hello';
import {
  wait$,
  forkJoin$
} from './modules/rxjs';
import {
  observer
} from './modules/observer';

console.log(HELLO);
// wait$.subscribe(observer);
forkJoin$.subscribe(observer);