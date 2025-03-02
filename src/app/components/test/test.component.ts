import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
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
