import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'changeTextColor'
})
export class ChangeTextColorPipe implements PipeTransform {
    transform(value: string, color: string): string{
        return '<span style="color:'+color+'">'+value+'</span>';
    }
}