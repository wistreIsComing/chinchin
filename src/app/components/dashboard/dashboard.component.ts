import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RecordsService } from '../../services/records.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Record } from '../../interfaces/records';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  records: Record[];


  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private http: HttpClient,
    public recordsService: RecordsService
    ) { }

  ngOnInit(): void {
    this.getMovements();
  }

  getMovements() {
    this.recordsService.getRecords().subscribe(records => {
      this.records = records;
    });
  }

}
