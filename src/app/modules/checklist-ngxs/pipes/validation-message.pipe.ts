import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'validationMessage'
})
export class ValidationMessagePipe implements PipeTransform {
  transform(value: ValidationErrors | null | undefined):string{
    if(!value) return ""
    if(value['required']) return "Don't Leave This Blank"
    if(value['hasSpaces']) return "Remove Any Spaces"
    return ""
  }
}