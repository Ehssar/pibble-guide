import { Component, OnInit } from '@angular/core';
import { PibbleService } from 'src/app/services/pibble.service';

@Component({
  selector: 'app-pb-cups',
  templateUrl: './pb-cups.component.html',
  styleUrls: ['./pb-cups.component.scss']
})
export class PBCupsComponent implements OnInit {
  type = 'pb-cup'
  constructor(private pibbleSvc: PibbleService) { }

  ngOnInit(): void {
  }

}
