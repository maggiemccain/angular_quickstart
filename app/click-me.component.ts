import { Component } from '@angular/core';

@Component({
    selector: 'click-me',
    template: `
        <button (click)="onClick()">Click me!</button>
    `
})

export class ClickMeComponent {
    // clickMessage = '';
    onClick() {
        console.log('You are my hero!');
    };
}
