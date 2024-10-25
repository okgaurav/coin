import {Component, OnInit, signal} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {InputTextModule} from "primeng/inputtext";
import {FormBuilder, FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import DateFormatPipe from "../../date-format.pipe";
import {coinRequest} from "../../models/navigation-data";
import {FirstService} from "../../services/first.service";

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  currencyForm: any;
  currencyOptions: any;
  request: coinRequest | undefined;
  response:any;
  onSubmit() {
    this.request ={
      startDate: this.dateFormatPipe.transform(this.currencyForm.value.startDate),
      endDate: this.dateFormatPipe.transform(this.currencyForm.value.endDate),
      currency: this.currencyForm.value.currency.code
    };
    console.log(this.request);
    return this.request;
  }



  constructor(private primengConfig: PrimeNGConfig, private fb: FormBuilder, private readonly dateFormatPipe:DateFormatPipe,
              private readonly firstService: FirstService
  ) {}

  ngOnInit(): void {
    this.response = this.firstService.getData();
    this.primengConfig.ripple = true;
    this.initForm();
    this.currencyOptions = [
      { name: 'USD - US Dollar', code: 'USD' },
      { name: 'EUR - Euro', code: 'EUR' },
      { name: 'GBP - British Pound', code: 'GBP' },
      { name: 'INR - Indian Rupee', code: 'INR' },
      { name: 'JPY - Japanese Yen', code: 'JPY' },
      { name: 'AUD - Australian Dollar', code: 'AUD' },
      { name: 'CAD - Canadian Dollar', code: 'CAD' }
    ];
  }

  initForm(){
    this.currencyForm = this.fb.group({
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      currency: ["", Validators.required]
    });
  }
}
