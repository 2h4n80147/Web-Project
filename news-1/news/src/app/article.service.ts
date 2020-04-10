import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './IArticle'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  url = 'assets/news.json'

  get(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url)
  }
}
