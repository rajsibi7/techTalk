import {Component} from '@angular/core';

@Component({
  selector : 'dashboard',
  templateUrl : 'dashboard.html'
})

export class DashboardComponent {
    myvalue: string = 'one';

    myobj: any;

    ngOnInit(){
      this.myobj = {
        over : {
          one : "one",
          two : "two",
          three : "three",
          four : "four",
        }
      };
    }


  setcrash (){
      delete this.myobj.over;
  }
}
