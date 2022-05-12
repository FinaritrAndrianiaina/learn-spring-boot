import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class CrisisResolver implements Resolve<string[]> {
  constructor() {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<string[]> {
    console.log(state.root.queryParamMap.keys);
    return of(["cyclone","incendie"]);
  }
}
