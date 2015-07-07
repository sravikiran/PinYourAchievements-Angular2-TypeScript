import {Component, View} from 'angular2/angular2';
import { _settings } from '../../settings'

@Component({ 
  selector: 'about'
})
@View({
	templateUrl: _settings.buildPath + '/components/about/about.html',
})
export class About {
  constructor() {
  }
}    

