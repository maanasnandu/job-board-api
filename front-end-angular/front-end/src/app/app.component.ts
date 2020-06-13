import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { Jobs } from './classes/jobs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { JobPost } from './classes/jobpost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front-end';

  constructor(
    private _freeApiService: freeApiService,
    public _router: Router,
    public _location: Location
  ) {}

  lstjobs: Jobs[];
  filteredJobs: Jobs[];
  searchTerm: string;

  JobSelected: Number;
  eachJob: JobPost[];

  ngOnInit() {
    this._freeApiService.getJobs().subscribe((data) => {
      this.lstjobs = data;
    });
    this.filteredJobs = this.lstjobs;
  }

  Search() {
    this.lstjobs = this.lstjobs.filter((res) => {
      return res.title.toLowerCase().match(this.searchTerm.toLowerCase());
    });
  }

  targetId: Number;
  GetJobId(event) {
    this.lstjobs = this.lstjobs.filter((res) => {
      event = res._id;
      return (this.targetId = event);
    });
  }

  // DisplayJobSelected(selectedJobId: any): void {
  // this._freeApiService.getIndividualJobs(selectedJobId).subscribe((data) => {
  // this.lstjobs = data;
  //});
  //}

  refresh(): void {
    location.reload();
  }

  navigateToCard() {
    //Should open a card view of each clicked job
    this._router.navigate(['']);
  }

  onJobSelected(selectedJobId: any): void {
    this._freeApiService.getIndividualJobs(selectedJobId).subscribe((data) => {
      this.eachJob = data;
    });
  }
}
