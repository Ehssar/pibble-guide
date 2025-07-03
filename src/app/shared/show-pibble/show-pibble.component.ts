import { Component, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { PibbleService } from '../../services/pibble.service';

@Component({
  selector: 'app-show-pibble',
  templateUrl: './show-pibble.component.html',
  styleUrls: ['./show-pibble.component.scss']
})
export class ShowPibbleComponent {
  @Input() type!: string;
  imageUrl$!: Observable<string>;

  constructor(private pibbleSvc: PibbleService) {}

  ngOnChanges() {
    this.imageUrl$ = this.pibbleSvc.getPibbleImage(this.type);
  }

}
