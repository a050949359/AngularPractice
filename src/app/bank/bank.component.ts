import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  @Input() bankName: string;
  @Input('account-id') id: string;

  normalizedBankName: string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
