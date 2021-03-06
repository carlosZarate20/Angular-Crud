import { Injectable } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { environment } from '../../environments/environment';
declare var ga: Function; // <-- Here we declare GA variable

@Injectable()
export class GoogleAnalyticsService {

  constructor(router: Router) {
    /*if (!environment.production) {
      return;
    }*/
    // tslint:disable-next-line:no-unused-expression
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('set', 'userId', 'USERID');
        ga('send', 'pageview');
      }
    });
  }

}
