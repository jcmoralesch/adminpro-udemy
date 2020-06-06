import { Component, OnInit, Input } from '@angular/core';
import { IncrementadorComponent } from '../incrementador/incrementador.component';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() titulo: string;
  @Input() grafico: any;

  constructor() { }

  ngOnInit() {
  }

}
