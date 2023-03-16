import { Component, OnInit } from '@angular/core';
import * as $ from "jquery"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'alarma';

  ngOnInit():void {
    $(document).ready(function(){
      $("#btnAbrir").on('click', function(){
        alert("Mensaje desde el Botón");
      })
    });
  }
}
