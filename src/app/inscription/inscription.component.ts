import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.inscriptionForm = fb.group(

      
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8)
        ]),
      
      
        nom: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),

        prenom: new FormControl('',[
          Validators.required,
          Validators.minLength(3)
        ]),
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        tel: new FormControl('',[
          Validators.required,
          Validators.pattern('[002162,002165,002169]{6}[0-9]{7}')
        ]),
        repPassword :new FormControl('',[
          Validators.required,
          Validators.minLength(8)

        ])
      }
     
      
      
    );
  }

  get password() { return this.inscriptionForm.get('password') }
  get nom(){ return this.inscriptionForm.get('nom')}
  get prenom(){ return this.inscriptionForm.get('prenom')}
  get tel(){return this.inscriptionForm.get('tel')}
  get email(){return this.inscriptionForm.get('email')}
  get repPassword(){return this.inscriptionForm.get('repPassword')}




  inscription() {
    console.log(this.inscriptionForm.value);
  }
  ngOnInit() {
  }

}
