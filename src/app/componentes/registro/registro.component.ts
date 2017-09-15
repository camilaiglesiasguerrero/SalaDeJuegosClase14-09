import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Validators,FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private builder : FormBuilder) { 
  }

  registroValidation: FormGroup = this.builder.group({
  });

  email = new FormControl('',[Validators.required]);
  psw = new FormControl('',Validators.required);
  pswRepeat = new FormControl('',Validators.required);

  ngOnInit() {
  }

}
