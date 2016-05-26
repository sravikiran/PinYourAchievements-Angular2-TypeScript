// Angular2
import {bootstrap} from '@angular/platform-browser-dynamic';
// Angular2 Router Injectables https://github.com/angular/angular/blob/f999d5a1566d3b830fd1a23ed554cbed4e1215e8/modules/angular2/router.ts
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {AchievementsService} from './services/achievementsService'
import {HTTP_PROVIDERS} from '@angular/http';
import {FORM_PROVIDERS} from '@angular/common';

import {MyApp} from './components/app/app';

// Second parameter provides a set of additional bindings 
// that will be used by Component (in our case application)
// read more here: https://angular.io/docs/js/latest/api/core/bootstrap-function.html
bootstrap(MyApp, [ROUTER_PROVIDERS, HTTP_PROVIDERS, FORM_PROVIDERS, AchievementsService]);
