import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  public articles = []
  ngOnInit(): void {
    this.articleService.get().subscribe(data => {
      this.articles = data
      console.log(data)
    })
  }

}
