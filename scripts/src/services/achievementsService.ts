import {Component, View} from 'angular2/angular2';
import { Inject} from 'angular2/di';
import {Http} from 'angular2/http';

export class AchievementsService {
	constructor( @Inject(Http) private http: Http) {		
	}

	getAchievementsOfType(type: string) : any {
		var path = '/api/achievements/' + type;
		return this.http.get(path);
	}

	getAllAchievements() : any {
		var path = '/api/achievements';
		return this.http.get(path);
	}

	addAnAchievement(newAchievement) {
		var path = '/api/achievements';
		return this.http.post(path, JSON.stringify(newAchievement));
	}
}