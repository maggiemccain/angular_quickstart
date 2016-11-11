import { Component } from '@angular/core';
import { Hero } from './hero';
// import { ClickMeComponent } from './click-me.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My favorite hero is {{myHero.name}}</h2>
        <p>Heroes:</p>
        <ul>
            <li *ngFor="let hero of heroes">
                {{hero.name}}
            </li>
        </ul>
        <click-me></click-me>
        <p *ngIf="heroes.length > 3">There are many heroes!</p>
        <key-up></key-up>
    `
})

export class AppComponent {
    title = 'Tour of Heroes';
    heroes = [
        new Hero(1, 'Windstorm'),
        new Hero(13, 'Bombasto'),
        new Hero(15, 'Magneta'),
        new Hero(20, 'Tornado')
      ];
    myHero = this.heroes[0];

    // constructor() {
    //   this.title = 'Tour of Heroes';
    //   this.myHero = 'Super Mags';
    // }
}
