import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Common2Service } from '../../services/common2.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RedcolorDirective } from '../../redcolor.directive';

@Component({
  selector: 'app-test',
  imports: [MatCardModule, MatButtonModule, RedcolorDirective],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  Value: string = 'test';
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
