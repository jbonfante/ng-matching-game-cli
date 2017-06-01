import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToTime'
})
export class SecondsToTimePipe implements PipeTransform {
  times = {
    year: 31557600,
    month: 2629746,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  }

  transform(seconds, shortFormat:boolean = true): string {
    let time_string: string = '';
    let plural: string = '';
    let time_key: string = '';
    for(var key in this.times){
      if(Math.floor(seconds / this.times[key]) > 0){
        if(Math.floor(seconds / this.times[key]) >1  && !shortFormat){
          plural = 's';
        }
        else{
          plural = '';
        }
        time_key = key.toString();
        if(shortFormat) time_key = time_key.slice(0,1);
        time_string += Math.floor(seconds / this.times[key]).toString() + '' + time_key + plural + ' ';
        seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);

      }
    }
    return time_string;
  }

}
