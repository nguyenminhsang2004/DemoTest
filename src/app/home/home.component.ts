import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private route:Router) { }
  codeJava(){
		this.route.navigate(['/code', 'java']);
	}
  codePython(){
		this.route.navigate(['/code', 'python']);
	}
  codeC(){
		this.route.navigate(['/code', 'csharp']);
	}

  ngOnInit(): void {
  }

}
