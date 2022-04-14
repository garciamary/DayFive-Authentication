import { TicketsService } from './../tickets.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets: any = [];

  constructor(private _ticketsService:TicketsService) { }

  ngOnInit(): void {
    this. _ticketsService.getAll().subscribe(
      (tickets: any) => {
        this.tickets = tickets.data;
      }
    )
  }

}
