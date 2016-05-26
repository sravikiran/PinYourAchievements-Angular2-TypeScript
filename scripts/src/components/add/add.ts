import {Component} from '@angular/core';
import { _settings } from '../../settings'
import {FormBuilder, Validators, FORM_DIRECTIVES, ControlGroup} from '@angular/common';
import {Router} from '@angular/router';
import {AchievementsService} from '../../services/achievementsService';

@Component({
  selector: 'add',
  providers: [FormBuilder],
  templateUrl: _settings.buildPath + '/components/add/add.html',
  directives: [FORM_DIRECTIVES]
})
export class Add {
  addAchievementForm: any;

  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private achievementsService: AchievementsService) {

    this.addAchievementForm = formBuilder.group({
      title: [''],
      type: [''],
      from: ['']
    });
  }

  addAchievement() {
    this.achievementsService.addAnAchievement(this.addAchievementForm.value)
      .subscribe(result => {
        this.router.navigateByUrl('/');
      });
  }
}
