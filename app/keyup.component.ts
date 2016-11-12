import { Component } from '@angular/core';

@Component({
    selector: 'key-up',
    template: `
        <input #box
        (keyup.enter)="values= values + box.value; box.value='';"
        (blur)="values= values + box.value;">
        <p>{{values}}</p>
    `
})

export class KeyUpComponent_v1 {
    values = '';
    // onKey(value: string) {
    //     this.values += value + ' | ';
    //     value = '';
    // };
}
