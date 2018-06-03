import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../../ofertas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers:[OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica:string =''
  constructor(private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  ngOnInit() {
    let id = this.route.parent.snapshot.params['id']
    this.ofertasService.getOndeFicaOfertaPorId(id)
        .then((descricao:string)=>{
          this.ondeFica = descricao
        })
  }

}
