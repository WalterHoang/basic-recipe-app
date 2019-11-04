import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api/api.service';
/**
 * This component holds the navigation bar
 * for a user to navigate the app
 */
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  collapsed = true;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  onSaveData() {
    console.log('calling api service');
    this.apiService.storeRecipes();
  }
  onFetchData() {
    console.log('calling api service');
    this.apiService.fetchRecipes();
  }
}
