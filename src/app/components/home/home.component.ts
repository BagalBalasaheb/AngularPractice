import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Common2Service } from '../../services/common2.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  Value: string = 'home';
  constructor(private commonService: CommonService, private commonService2: Common2Service) { }

  ngOnInit(): void {
    this.commonService.readValue$.subscribe(data => {
      this.Value = data;
    });
  }

  get Value2(): string {
    return this.commonService2.value();
  }

  onClick() {
    let temp = Math.random();
    this.commonService.changeValue(temp.toString());
  }

  onClick2() {
    let temp = Math.random();
    this.commonService2.changeValue(temp.toString());
  }
}
