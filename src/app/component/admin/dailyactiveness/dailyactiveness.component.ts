import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
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
    scales: {
      yAxes: [{
         scaleLabel: {
            display: true,
            labelString: 'daily activness'
         }
      }],
      xAxes: [{
        scaleLabel: {
           display: true,
           labelString: 'date(Month/Date)'
        }
     }]
   }
  };

  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [0,0,0,0,0,0,0], label: 'Daily Activeness' },
  ];
  
  ngOnInit() {
    console.log(this.getPrevSevenDays())
    this.barChartLabels = this.getPrevSevenDays("getMonthAndDate");
    this.getDailyActiveness();
  }

  getPrevSevenDays(arg="getTime"){
    let result = [];
    let dayPointer = new Date(new Date().setHours(0,0,0,0));
    dayPointer.setDate(dayPointer.getDate()-7)

    for(let i = 0 ; i < 7 ; i ++){
      dayPointer.setDate(dayPointer.getDate() + 1);
      if(arg==="getMonthAndDate"){
        result.push((dayPointer.getMonth()+1) +'/'+ dayPointer.getDate())
      }
      if(arg==="getTime"){
        result.push(dayPointer.getTime())
      }
      
    }
    //console.log(result)
    return result;
  }

  getDailyActiveness() {
    let daysList = this.getPrevSevenDays();
    for(let i = 0 ; i < 7 ; i ++){ 
      this.infoService.dailyActiveness(daysList[i]).subscribe(response => {
        let count = response["count"];
        this.barChartData[0].data[i] = count;
        console.log(this.barChartData[0].data[i])
      });
    }

    return this.barChartData[0].data;
  }

}
