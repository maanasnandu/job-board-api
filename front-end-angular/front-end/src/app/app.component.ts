import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { Jobs } from './classes/jobs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front-end';

  constructor(private _freeApiService: freeApiService) {}

  lstjobs: Jobs[];

  ngOnInit() {
    this._freeApiService.getJobs().subscribe((data) => {
      this.lstjobs = data;
    });
  }
}
