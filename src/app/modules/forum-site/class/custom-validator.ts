import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidator {
     static validateTitle(control: AbstractControl): ValidationErrors | null{
          const value = control.value as string;
          if(value.trim()==="") return {hasSpaces: true};
          return null;
     }
     static validateURL(control: AbstractControl): ValidationErrors | null{
          const value = control.value as string;
          const pattern = new RegExp(
               '^([a-zA-Z]+:\\/\\/)?' + 
                 '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + 
                 '((\\d{1,3}\\.){3}\\d{1,3}))' + 
                 '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + 
                 '(\\?[;&a-z\\d%_.~+=-]*)?' + 
                 '(\\#[-a-z\\d_]*)?$', 
               'i'
             );
          if(value.trim()==="") return {hasSpaces: true};
          if(!pattern.test(value)) return {invalidURL: true};
          return null;
     }
}