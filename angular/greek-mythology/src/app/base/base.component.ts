/**
 * Created By : Lalit
 * Created On : 9/21/19
 */

import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GodsModel} from './gods.model';

@Component({
  selector: 'base-component',
  templateUrl: './base.component.html'
})
export class BaseComponent implements OnInit {

  godsUrl = 'assets/greek-gods.json';
  godsList: GodsModel[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.loadGreekGods();
  }

  loadGreekGods() {
    this.http
      .get(this.godsUrl)
      .subscribe((payload: GodsModel[]) => {
        for (const eachGod of payload) {
          this.godsList.push(eachGod);
        }
      });
  }


}
