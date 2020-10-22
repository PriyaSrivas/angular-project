import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-cards',
templateUrl: './cards.component.html',
styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
cards: Object[];
constructor() { 
this.cards = [
{
icons: '../../assets/images/icons.png',
title: 'Cab For every pocket',
body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
},
{
icons: '../../assets/images/icons.png',
title: 'Cab For every pocket',
body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
},
{
icons: '../../assets/images/icons.png',
title: 'Cab For Every Pocket',
body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
},
{
icons: '../../assets/images/icons.png',
title: 'Cab For Every Pocket',
body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
},
{
icons: '../../assets/images/icons.png',
title: 'Cab For Every Pocket',
body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
},
{
icons: '../../assets/images/icons.png',
title: 'Cab For Every Pocket',
body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
},
];
}
ngOnInit(): void {
}
}
