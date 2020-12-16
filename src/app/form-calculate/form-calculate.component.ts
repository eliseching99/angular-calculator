import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-form-calculate',
  templateUrl: './form-calculate.component.html',
  styleUrls: ['./form-calculate.component.css']
})
export class FormCalculateComponent {
  success=false;
  calculatedResult: number = 0;

  calcForm = new FormGroup({
    firstNum: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
    ]),
    secondNum: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
    ]),
    choice: new FormControl('', Validators.required)

  });
 
  constructor(public calculateService: CalculateService) {
    calculateService.getText()
  }
  
  result(): void {
    let x = this.calcForm.get('choice')?.value
    switch (x) {
      case ("+"):
        // console.log(this.calculateService.add(this.calcForm.get('firstNum')?.value, this.calcForm.get('secondNum')?.value))
        this.calculatedResult = (this.calculateService.add(this.calcForm.get('firstNum')?.value, this.calcForm.get('secondNum')?.value));
        return;
      case ("-"):
        // console.log(this.calculateService.minus(this.calcForm.get('firstNum')?.value, this.calcForm.get('secondNum')?.value))
        this.calculatedResult = (this.calculateService.minus(this.calcForm.get('firstNum')?.value, this.calcForm.get('secondNum')?.value))
        return;
      case ("/"):
        if(this.calcForm.get('firstNum')?.value===0||this.calcForm.get('secondNum')?.value===0)
        {
          return;
        }
        // console.log(this.calculateService.divide(this.calcForm.get('firstNum')?.value, this.calcForm.get('secondNum')?.value))
        this.calculatedResult = (this.calculateService.divide(this.calcForm.get('firstNum')?.value, this.calcForm.get('secondNum')?.value))
        return;
      case ("*"):
        // console.log(this.calculateService.multiply(this.calcForm.get('firstNum')?.value, this.calcForm.get('secondNum')?.value))
        this.calculatedResult =  (this.calculateService.multiply(this.calcForm.get('firstNum')?.value, this.calcForm.get('secondNum')?.value))
        return;
      default:
        return;
    }
  }





  // constructor(){
  //   let svc= new CalculateService()
  //   svc.getText();
  // }
}
