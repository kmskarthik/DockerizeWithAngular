import { Directive, OnInit, HostBinding, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector : '[appDropDown]'
})
export class DropDowDirective {

    @HostBinding('class.open') isOpen = false;

    constructor(private elRef: ElementRef){

    }

    @HostListener("click") mouseClick() {
        this.isOpen = !this.isOpen;
    }

    //To Clos dropdown on anywhere within the page.
    /*@HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }*/

}