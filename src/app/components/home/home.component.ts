import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  Value: string = 'home';
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.readValue$.subscribe(data => {
      this.Value = data;
    });
  }

  onClick() {
    let temp = Math.random();
    this.commonService.changeValue(temp.toString());
  }
}
