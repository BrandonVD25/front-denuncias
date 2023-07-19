import { Component, OnInit  ,ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Denuncia } from 'src/app/models/denuncia';
import { DenunciaService } from 'src/app/services/denuncia.service';
import { MessagingService } from 'src/app/services/messaging.service';
@Component({
  selector: 'app-form-denuncia',
  templateUrl: './form-denuncia.page.html',
  styleUrls: ['./form-denuncia.page.scss'],
})
export class FormDenunciaPage implements OnInit {
denuncia= new Denuncia;
folioPresentado: boolean = false;
  estados: any[] = [
    { value: 3, label: 'Aguascalientes' },
    { value: 4, label: 'Campeche' },
    { value: 5, label: 'CDMX' },
  ];
  paises: any[] = [
    { value: 'mexico', label: 'México' },
    { value: 'estadosunidos', label: 'Estados Unidos' },
    { value: 'argentina', label: 'Argentina' },
  ];
  public formulario: FormGroup=this.formBuilder.group({
    empresaSeleccionada: ['', Validators.required],
    paisSeleccionado: ['', Validators.required],
    estadoSeleccionado: ['',Validators.required],
    centro: ['', Validators.required],
    fecha: ['', Validators.required],
    detalle: ['', Validators.required],
    anonimoSeleccionado: ['', Validators.required],
    nombre: ['',Validators.nullValidator],
    correo: ['',Validators.nullValidator],
    telefono: ['',Validators.nullValidator],
    contrasenia: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder,private messageServer:MessagingService,
    private denunciaService: DenunciaService) {}

  ngOnInit() {
    
  }

  actualizarEstados() {
    const paisSeleccionado = this.formulario.get('paisSeleccionado')?.value;

    if (paisSeleccionado === 'mexico') {
      this.formulario.get('estadoSeleccionado')?.setValidators(Validators.required);
    } else {
      this.formulario.get('estadoSeleccionado')?.clearValidators();
    }

    this.formulario.get('estadoSeleccionado')?.updateValueAndValidity();
  }

  actualizarVisibilidad() {
    const anonimoSeleccionado = this.formulario.get('anonimoSeleccionado')?.value;

    if (anonimoSeleccionado === 'no') {
      this.formulario.get('nombre')?.setValidators(Validators.required);
      this.formulario.get('correo')?.setValidators(Validators.required);
      this.formulario.get('telefono')?.setValidators(Validators.required);
    } else {
      this.formulario.get('nombre')?.clearValidators();
      this.formulario.get('correo')?.clearValidators();
      this.formulario.get('telefono')?.clearValidators();
    }

    this.formulario.get('nombre')?.updateValueAndValidity();
    this.formulario.get('correo')?.updateValueAndValidity();
    this.formulario.get('telefono')?.updateValueAndValidity();
  }

  guardarDatos() {
    
    if (this.formulario.valid) {
      this.denuncia.empresaid = parseInt(this.formulario.value.empresaSeleccionada);
      this.denuncia.centro = parseInt(this.formulario.value.centro);
      this.denuncia.fecha = this.formulario.value.fecha;
      this.denuncia.estadoid = parseInt(this.formulario.value.estadoSeleccionado);
      this.denuncia.detalle = this.formulario.value.detalle;
      this.denuncia.contrasenia=this.formulario.value.contrasenia;
      this.denuncia.telefono = this.formulario.value.telefono|| null;
      this.denuncia.correo = this.formulario.value.correo||  null;
      this.denuncia.nombre = this.formulario.value.nombre|| null;
      console.log(this.denuncia)
      var d= this.denuncia
      this.denunciaService.agregarDenuncia(d).subscribe(
        data => {
          console.log(data);
          var respuesta = data.response;
          document.getElementById('folio')!.textContent = respuesta;
          this.folioPresentado = true; 
        }
      );
     
      this.messageServer.success('agregado con exito');
    }else{
      this.messageServer.error('Error. Verifica correctamente tus campos');
    }
    
  }
  
}
