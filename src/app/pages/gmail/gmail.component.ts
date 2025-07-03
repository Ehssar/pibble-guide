import { Component, OnInit } from '@angular/core';
import { PibbleService } from '../../services/pibble.service';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.scss']
})
export class GmailComponent implements OnInit {
  type = 'gmail';

  constructor(private pibbleSvc: PibbleService) { }

  ngOnInit(): void {
  }

}
