import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  event_list = [
    {
      event:' Event 1',
      img: 'https://img1.wsimg.com/isteam/ip/fc926424-2205-4dc3-89b5-220eb4fc93ec/Slide%2001.png/:/rs=w:1300,h:800',
      eventStartDate: new Date('2019/05/20'),
      eventEndingDate: new Date('2019/05/24')
    },
    {
      event:' Event 2',
      img: 'https://img1.wsimg.com/isteam/ip/fc926424-2205-4dc3-89b5-220eb4fc93ec/Slide%2004.png/:/rs=w:1300,h:800',
      eventStartDate: new Date('2019/07/28'),
      eventEndingDate: new Date('2019/07/30')
    },
    
    {
      event:' Event 3',
      img: 'https://img1.wsimg.com/isteam/ip/fc926424-2205-4dc3-89b5-220eb4fc93ec/Slide%2002.png/:/rs=w:1300,h:800',
      eventStartDate: new Date('2019/07/28'),
      eventEndingDate: new Date('2019/07/30')
    },
    {
      event:' Event 4',
      img: 'https://img1.wsimg.com/isteam/ip/fc926424-2205-4dc3-89b5-220eb4fc93ec/Slide%2003.png/:/rs=w:1300,h:800',
      eventStartDate: new Date('2019/07/28'),
      eventEndingDate: new Date('2019/07/30')
    },
    
  ]

  upcoming_events =  this.event_list.filter( event => event.eventStartDate > new Date());
  past_events = this.event_list.filter(event => event.eventEndingDate < new Date());
  current_events =  this.event_list.filter( event => (event.eventStartDate >= new Date() && (event.eventEndingDate <= new Date())))
  constructor() { }

  ngOnInit(): void {
  }

}
