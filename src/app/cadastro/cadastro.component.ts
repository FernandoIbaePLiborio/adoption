import { Component, OnInit } from '@angular/core';
import { Radio } from '../shared/radio/radio.model';

@Component({
  selector: 'pet-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  ownPetsOptions: Radio[] = [
    { label: 'Yes', value: 'YES' },
    { label: 'No', value: 'NO' }
  ]

  constructor() { }

  ngOnInit() {
  }

  salvar(cadastro: any){
    console.log(cadastro);
  }

}
