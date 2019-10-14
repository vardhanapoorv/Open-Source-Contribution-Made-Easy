/**
 * Created By : Lalit
 * Created On : 9/21/19
 */
import {GodsModel} from './gods.model';
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-base-component',
  templateUrl: './base.component.html',
  styleUrls: [ './base.component.css' ]
})

export class BaseComponent implements OnInit {

  public godsList: GodsModel[] = [];
  public godsUrl = 'assets/greek-gods.json';


  constructor(
    private http: HttpClient
  ) {}

  public ngOnInit(): void {
    this.loadGreekGods();
  }

  public loadGreekGods(): void {
    this.http.get(this.godsUrl).subscribe((payload: any[]) =>
      payload.forEach(eachGod => this.godsList.push(Object.assign(new GodsModel(), eachGod))));
  }
}
