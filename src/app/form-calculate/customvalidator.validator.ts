import { AbstractControl, ValidatorFn } from '@angular/forms';
import { FormGroup } from "@angular/forms";

// export function blue(n2:number,choice:string): ValidatorFn {  
//     return (if);
// }

// add(n1:number, n2 : number){
//     return (n1+n2);
//   }
export function ZeroValidationError(
    controlName: string,
    matchingControlName: string
): ValidatorFn {

    // return (control: FormGroup): { [key: string]: any } | null =>  
    //     control.value?.toLowerCase() === 'blue' 
    //         ? null : {wrongColor: control.value};
    //SOLVE THE BUG that makes form invalid
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
        const control = (formGroup as FormGroup).controls[controlName];
        const matchingControl = (formGroup as FormGroup).controls[matchingControlName];
        if (control.value === 0 && matchingControl.value === "/") {
            control.setErrors({ 'invalid': true });
        } else {
           
        }
        return null;
    };
}
/** A hero's name can't match the hero's alter ego */
// export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
//     const name = control.get('name');
//     const alterEgo = control.get('alterEgo');
  
//     return name && alterEgo && name.value === alterEgo.value ? { identityRevealed: true } : null;
//   };
/** A hero's name can't match the hero's alter ego */
// export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
//     const name = control.get('name');
//     const alterEgo = control.get('alterEgo');
  
//     return name && alterEgo && name.value === alterEgo.value ? { identityRevealed: true } : null;
//   };

// export function testValidation(secondNum: number, choice: string): ValidatorFn {
//     return(form:FormGroup):{[key:string]:boolean}|null=>{

//     }
// }


// export function MyAwesomeRangeValidator(): ValidatorFn(fg: FormGroup) => {
//     const start = fg.get('rangeStart')?.value;
//     const end = fg.get('rangeEnd')?.value;
//    return start !== null && end !== null && start < end 
//      ? null 
//      : { range: true };
//   };

// export function MyAwesomeRangeValidator(): ValidatorFn = (fg: FormGroup) => {
//     const start = fg.get('rangeStart').value;
//     const end = fg.get('rangeEnd').value;
//    return start !== null && end !== null && start < end 
//      ? null 
//      : { range: true };
//   };