import { FormGroup } from '@angular/forms';


export function FormValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const firstValue = formGroup.controls[controlName];
    const matchingValue = formGroup.controls[matchingControlName];

    if (matchingValue.errors && !matchingValue.errors.mustMatch) {
      return;
    }

    if (firstValue.value !== matchingValue.value) {
      matchingValue.setErrors({ mustMatch: true });
    } else {
      matchingValue.setErrors(null);
    }
  }
}
