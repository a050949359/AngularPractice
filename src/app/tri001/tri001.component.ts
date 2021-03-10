import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../programs.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tri001',
  templateUrl: './tri001.component.html'
})
export class Tri001Component implements OnInit {
  public s: JSON;//因為會有多筆，先建一個any型別的陣列資料來接回傳值
  constructor(private programService: ProgramsService) {}
  ngOnInit() {
    this.getData(); //程式一啟動時即撈取資料
  }
  getData() {
    this.programService.getYouBikeData().subscribe(
      (response: JSON) => {
        this.s = response;
        console.log(this.s); //log接到的資料
      },
      (error: HttpErrorResponse) => this.programService.HandleError(error)
    );
  }
}
