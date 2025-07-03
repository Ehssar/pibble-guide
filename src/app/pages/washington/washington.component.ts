import { Component, OnInit } from '@angular/core';
import { PibbleService } from '../../services/pibble.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.scss']
})
export class WashingtonComponent implements OnInit {
  type = 'washington';

  constructor(private pibbleSvc: PibbleService) { }

  ngOnInit(): void {
  }

}
