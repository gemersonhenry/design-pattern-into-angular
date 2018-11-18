import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app-service.service';

@Component({
  selector: 'bz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.getCommentList().subscribe((commentList) => {
      console.log(commentList);
    });
    this.appService.getAllCommentList().subscribe((commentList) => {
      console.log(commentList);
    });
  }

}
