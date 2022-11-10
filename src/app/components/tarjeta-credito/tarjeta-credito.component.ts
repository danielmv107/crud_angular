import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[]=[
    {
      titular:'juan pereza',
      numeroTarjeta: '1234567890',
      fechaExpiracion:'11/22',
      cvv:'123'
    },
    {
      titular:'daniel',
      numeroTarjeta: '0987654321',
      fechaExpiracion:'22/11',
      cvv:'456'
    }
  ]

  form: FormGroup

  constructor(private fb:FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      fechaExpiracion: ['',[Validators.required,Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['',[Validators.required,Validators.maxLength(3), Validators.minLength(3)]]
    })

  }

  ngOnInit(): void {
  }

  agregarTarjeta(){


    const tarjeta:any={
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      ccv: this.form.get('ccv')?.value,
    }
    this.listTarjetas.push(tarjeta)
    this.toastr.success('la tarjeta fue registrada con exito', 'Tarjeta Registrada')
    this.form.reset()
    //console.log(tarjeta)
  }

}
