import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../../common/global-constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  logged:boolean=false;

  public onClickRegister() {
    
  }

  ngOnInit(): void {
    
    this.logged=GlobalConstants.logged;
  }
}
