import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Gif, SearchGifsResponse } from 'src/app/interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private apiKey: string = 'q4S1vpwgkg67zXGmv42XxK1tv0Ih8Yag';

  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial () {
    return [...this._historial];
  }

  constructor(private http: HttpClient) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
  }

  buscarGifs(query: string) {

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));

    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${ this.apiKey }&q=${ query }&limit=10`)
          .subscribe((resp) => {
            console.log(resp.data);
            this.resultados = resp.data;
          });
    
  }

}
