import { Injectable } from '@angular/core';
import { IProduto, produtos1 } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: IProduto[] = produtos1;

  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id === produtoId)
  }
}
