import {Component, View, NgFor} from 'angular2/angular2';
import { _settings } from '../../settings'
import {DummyService} from '../../services/dummyService';
import {Inject} from 'angular2/di';

@Component({
  selector: 'home',
  injectables: [DummyService]
})
@View({
  templateUrl: _settings.buildPath + "/components/home/home.html",
  directives: [NgFor]
})
// Component controller
export class Home {
  myStrings: Array<string>;
  value: string;
  achievements: Array<any>;

  constructor( @Inject(DummyService) private dummyService: DummyService) {
    dummyService.getAllAchievements()
      .map(r => r.json())
      .subscribe(a => {
          this.achievements = a;
      });
  }
}    

