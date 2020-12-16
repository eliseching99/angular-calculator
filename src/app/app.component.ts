import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CalculateService } from './calculate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  // constructor(){
  //   let svc= new CalculateService()
  //   svc.getText();
  // }
}






