import {Component, View, NgFor} from 'angular2/angular2';
import { _settings } from '../../settings'
import {AchievementsService} from '../../services/achievementsService';
import {Inject} from 'angular2/di';

@Component({
  selector: 'home',
  injectables: [AchievementsService]
})
@View({
  templateUrl: _settings.buildPath + "/components/home/home.html",
  directives: [NgFor]
})
export class Home {
  achievements: Array<any>;

  constructor(@Inject(AchievementsService) private achievementsService: AchievementsService) {
    achievementsService.getAllAchievements()
      .map(r => r.json())
      .subscribe(a => {
          this.achievements = a;
      });
  }
}