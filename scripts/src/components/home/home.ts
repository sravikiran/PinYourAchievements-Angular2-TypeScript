import {Component} from '@angular/core';
import { _settings } from '../../settings'
import {AchievementsService} from '../../services/achievementsService';

@Component({
  selector: 'home',
  providers: [AchievementsService],
  templateUrl: _settings.buildPath + "/components/home/home.html"
})
export class Home {
  achievements: Array<any>;

  constructor(private achievementsService: AchievementsService) {
    achievementsService.getAllAchievements()
      .subscribe(a => {
          this.achievements = a;
      });
  }
}