import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

import {Routes} from "@angular/router";

import { _settings } from '../../settings';
import {Home} from '../home/home';
import {Add} from '../add/add';

@Component({
  selector: 'my-app',
  templateUrl: _settings.buildPath + '/components/app/app.html',
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  { path: '/', component: Home },
  { path: '/add', component: Add },
  { path: "*", component: Home }
])
export class MyApp { }
