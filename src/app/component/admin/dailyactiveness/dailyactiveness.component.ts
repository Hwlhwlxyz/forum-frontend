import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {DatePipe} from "@angular/common"
@Component({
  selector: 'app-dailyactiveness',
  templateUrl: './dailyactiveness.component.html',
  styleUrls: ['./dailyactiveness.component.css']
})
export class DailyactivenessComponent implements OnInit {

  constructor() { }

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Label A' },
  ];
  
  ngOnInit() {
    console.log(this.getPrevSevenDays())
    this.barChartLabels = this.getPrevSevenDays();
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

}
