import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votacao',
  templateUrl: './votacao.page.html',
  styleUrls: ['./votacao.page.scss'],
})
export class VotacaoPage implements OnInit {
  isPresidente: boolean = true;
  fotoPadrao: string = "https://filestore.community.support.microsoft.com/api/images/6061bd47-2818-4f2b-b04a-5a9ddb6f6467?upload=true";

  presidenteNome: string;
  presidentePartido: string;
  fotoPresi: string = this.fotoPadrao;
  primeiroNumPresi: string;
  segundoNumPresi: string;
  numPresidente: string;

  vereadorNome: string;
  vereadorPartido: string;
  fotoVeri: string = this.fotoPadrao;
  numVereador: any = [];

  btnConfirmar: boolean = false;
  telaVotoConfirmado: boolean = false;

  presidentes: any = [
    {nome: 'Burro', partido: 'TTD', totalVotos: 0, foto: "https://super.abril.com.br/wp-content/uploads/2017/06/de-onde-veio-a-expressc3a3o-cor-de-burro-quando-foge.png", num: 12}, 
    {nome: 'Shrek', partido: 'PSD', totalVotos: 0, foto: "https://img.quizur.com/f/img5ec71b6abc7d42.15252864.jpg?lastEdited=1590106990", num: 16}
  ];

  vereadores: any = [
    {nome: 'Fada Madrinha', partido: 'PSD', totalVotos: 0, foto: "https://pbs.twimg.com/media/DwRGgVwX0AciTqD.jpg", num: 54112}, 
    {nome: 'Gato de Botas', partido: 'TTD', totalVotos: 0, foto: "https://tvcinemaemusica.files.wordpress.com/2010/06/gato_de_botas_01.jpg", num: 33221}
  ];

  constructor() { }

  ngOnInit() {
  }

  presidente() {
    this.numPresidente = this.primeiroNumPresi + this.segundoNumPresi; 

    if (this.numPresidente == '12' && this.primeiroNumPresi && this.segundoNumPresi) {
      this.presidenteNome = this.presidentes[0].nome;
      this.presidentePartido = this.presidentes[0].partido;
      this.fotoPresi = this.presidentes[0].foto;
      this.btnConfirmar = true;

      this.presidentes[0].totalVotos = this.presidentes[0].totalVotos + 1;
    } else if (this.numPresidente == '16' && this.primeiroNumPresi && this.segundoNumPresi) {
      this.presidenteNome = this.presidentes[1].nome;
      this.presidentePartido = this.presidentes[1].partido;
      this.fotoPresi = this.presidentes[1].foto;
      this.btnConfirmar = true;

      this.presidentes[1].totalVotos = this.presidentes[1].totalVotos + 1;
    } else {
      this.semPresidente();
    }
  }

  vereador() {

    if (this.numVereador[0] && this.numVereador[1] && this.numVereador[2] && this.numVereador[3] && this.numVereador[4]) {
      var num = this.numVereador[0] + this.numVereador[1] + this.numVereador[2] + this.numVereador[3] + this.numVereador[4];

      if (num == '54112') {
        this.vereadorNome = this.vereadores[0].nome;
        this.vereadorPartido = this.vereadores[0].partido;
        this.fotoVeri = this.vereadores[0].foto;
        this.btnConfirmar = true;

        this.vereadores[0].totalVotos = this.vereadores[0].totalVotos + 1;
      } else if (num == '33221') {
        this.vereadorNome = this.vereadores[1].nome;
        this.vereadorPartido = this.vereadores[1].partido;
        this.fotoVeri = this.vereadores[1].foto;
        this.btnConfirmar = true;

        this.vereadores[1].totalVotos = this.vereadores[1].totalVotos + 1;
      }
    } else {
      this.semVereador();
    }

  }

  confirmarVoto(tipo: any) {

    if (tipo == 1) {
      this.isPresidente = false;

      if ((!this.primeiroNumPresi && !this.segundoNumPresi) || !(this.numPresidente == '12' || this.numPresidente == '16')) {
        this.isPresidente = true;
        return alert("Escolha uma opção primeiro");
      } 
    }

    if (tipo == 2) {
      this.telaVotoConfirmado = true;

      this.primeiroNumPresi = '';    
    }
    
  }

  votarNovamente() {
    this.telaVotoConfirmado = false;
    this.isPresidente = true;

    this.semPresidente();
    this.limparPresi();

    this.semVereador();
    this.limparVeri();

    console.log("->", this.presidentes[0].totalVotos)
    console.log("->", this.vereadores[1].totalVotos)
  }

  limparPresi() {
    this.primeiroNumPresi = '';
    this.segundoNumPresi = '';
  }

  limparVeri() {
    this.numVereador = [];
    console.log("this.numVereador", this.numVereador)
  }

  semPresidente() {
    this.presidenteNome = '';
    this.presidentePartido = '';
    this.fotoPresi = this.fotoPadrao;
    this.btnConfirmar = false;
  }

  semVereador() {
    this.vereadorNome = '';
    this.vereadorPartido = '';
    this.fotoVeri = this.fotoPadrao;
    this.btnConfirmar = false;
  }

}
