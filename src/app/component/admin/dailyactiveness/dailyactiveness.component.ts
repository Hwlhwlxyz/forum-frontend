import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {DatePipe} from "@angular/common"
import { InfoService } from 'src/app/service/info.service';
@Component({
  selector: 'app-dailyactiveness',
  templateUrl: './dailyactiveness.component.html',
  styleUrls: ['./dailyactiveness.component.css']
})
export class DailyactivenessComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Label A' },
  ];
  
  ngOnInit() {
    console.log(this.getPrevSevenDays())
    this.barChartLabels = this.getPrevSevenDays();
    this.barChartData[0].data = this.getDailyActiveness();
  }

  getPrevSevenDays(){
    let result = [];
    let dayPointer = new Date();
    dayPointer.setDate(dayPointer.getDate()-7)

    for(let i = 0 ; i < 7 ; i ++){
      dayPointer.setDate(dayPointer.getDate() + 1);
      result.push((dayPointer.getMonth()+1) +'/'+ dayPointer.getDate())
    }
    console.log(dayPointer)
    return result;
  }

  getDailyActiveness() {
    let dayPointer = new Date();
    let result = [];
    dayPointer.setDate(dayPointer.getDate() - 7);

    for(let i = 0 ; i < 7 ; i ++){
      dayPointer.setDate(dayPointer.getDate() + 1);
      this.infoService.dailyActiveness(dayPointer.getTime()).subscribe(response => {
        var count = response["count"];
        result.push(count);
      });
    }

    return result;
  }

}
