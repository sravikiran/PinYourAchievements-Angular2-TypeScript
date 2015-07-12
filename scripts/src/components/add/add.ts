import {Component, View} from 'angular2/angular2';
import { _settings } from '../../settings'
import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';
import {Inject} from 'angular2/di';
import {Router} from 'angular2/router';
import {AchievementsService} from '../../services/achievementsService';

@Component({
  selector: 'add',
  injectables: [FormBuilder]
})
@View({
  templateUrl: _settings.buildPath + '/components/add/add.html',
  directives: [formDirectives]
})
export class Add {
  addAchievementForm: any;

  constructor( @Inject(FormBuilder) private formBuilder: FormBuilder,
    @Inject(Router) private router: Router,
    @Inject(AchievementsService) private achievementsService: AchievementsService) {

    this.addAchievementForm = formBuilder.group({
      title: [''],
      type: [''],
      from: ['']
    });
  }

  addAchievement() {
    this.achievementsService.addAnAchievement(this.addAchievementForm.value)
      .map(r => r.json())
      .subscribe(result => {
        this.router.parent.navigate('/');
      });
  }
}
