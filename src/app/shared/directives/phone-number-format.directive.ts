import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneNumberFormat]'
})
export class PhoneNumberFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const phoneNumber = this.formatPhoneNumber(input.value);
    input.value = phoneNumber;
  }

  private formatPhoneNumber(value: string): string {
    const digitsOnly = value.replace(/[^\d\b]/g, ''); //regex pattern
    const areaCode = digitsOnly.slice(0, 3);
    const firstPart = digitsOnly.slice(3, 6);
    const secondPart = digitsOnly.slice(6, 8);
    const lastPart = digitsOnly.slice(8, 10);

    return `${areaCode} ${firstPart} ${secondPart} ${lastPart}`;
  }

}
