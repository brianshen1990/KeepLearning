import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
  links = [
    { title: 'Dashboard', url: 'dashboard' },
    { title: 'OSScan', url: 'osscan' },
  ];
  constructor(public route: ActivatedRoute) {}
}



