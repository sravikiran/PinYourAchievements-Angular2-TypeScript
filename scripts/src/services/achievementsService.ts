import {Component, View} from 'angular2/angular2';
import { Inject} from 'angular2/di';
import {Http} from 'angular2/http';

export class AchievementsService
{
	myData : Array<string>;
	serverData: any;
	
	constructor(@Inject(Http) private http:Http){
		this.myData = new Array<string>();
		
		this.myData.push('milk');
		this.myData.push('honey');
		this.myData.push('cheese');
		
		http.get('/api/sample')
            .map(response => response.json())
            .subscribe(data => {
				this.serverData = data;
				});
	}
	
	getSomeData() : Array<string> 
	{
		return this.myData;
	}
	
	getServerData(): any{
		return this.serverData;
	}
	
	getAchievements(type: string): any{
		var path = '/api/achievements/' + type;
		console.log(path);
		return this.http.get(path);
	}
	
	getAllAchievements(): any{
		var path = '/api/achievements';
		console.log(path);
		return this.http.get(path);
	}
	
	addAnAchievement(newAchievement){
		console.log(newAchievement);
		var path = '/api/achievements';
		console.log(path);
		return this.http.post(path, JSON.stringify(newAchievement), {
			type:'application/json'
		});
	}
}