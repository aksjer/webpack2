import { of ,
  interval,
  forkJoin
} from 'rxjs';
import {
  take,
  delay,
  mergeMap,
  mapTo,
  map
} from 'rxjs/operators';

export const wait$ = of (9, 1, 5).pipe(
  mergeMap(e => of (e).pipe(delay(e * 1000)))
);


const a$ = of ('hello');
const b$ = interval(1000).pipe(take(3), mapTo('world !'));


export const forkJoin$ = forkJoin(a$, b$).pipe(map(e => e.join(' ')));