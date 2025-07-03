import { Component, OnInit } from '@angular/core';
import { PibbleService } from 'src/app/services/pibble.service';

@Component({
  selector: 'app-geebles',
  templateUrl: './geebles.component.html',
  styleUrls: ['./geebles.component.scss']
})
export class GeeblesComponent implements OnInit {
  type = 'geebles'
  constructor(private pibbleSvc: PibbleService) { }

  ngOnInit(): void {
  }

}
