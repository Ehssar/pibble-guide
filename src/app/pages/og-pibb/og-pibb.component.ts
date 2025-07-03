import { Component, OnInit } from '@angular/core';
import { PibbleService } from '../../services/pibble.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-og-pibb',
  templateUrl: './og-pibb.component.html',
  styleUrls: ['./og-pibb.component.scss']
})
export class OGPibbComponent implements OnInit {
  type = 'og-pibb';
  imageUrl$!: Observable<string>
  
  constructor(private pibbleSvc: PibbleService) {}

  ngOnInit() {
    this.imageUrl$ = this.pibbleSvc.getPibbleImage(this.type);
  }

}
