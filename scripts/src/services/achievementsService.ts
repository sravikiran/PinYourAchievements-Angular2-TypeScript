import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AchievementsService {
	constructor(private http: Http) {		
	}

	getAchievementsOfType(type: string) : any {
		var path = `/api/achievements/${type}`;
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