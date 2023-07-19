export class Denuncia{
constructor(){

} 
folio ?: number;
empresaid ?: number;
empresaName ?: string;
estadoid ?: number;
estadoName ?: string;
paisid ?:number;
paisName ?:string;
detalle?: string;
fecha?: string; 
centro?: number;
contrasenia?: string;
estatusid?: number;
estatusInfo?: string;
contactoid?: number;
nombre?:string;
correo?:string;
telefono?:string;
comentario?:string;
setFolio(folio: any) {
    this.folio = folio;
  }

  getFolio(): any {
    return this.folio;
  }

}
