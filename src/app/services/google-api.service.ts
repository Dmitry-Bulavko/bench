import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

// Define the location to center the search
const center = { lat: 42.291149, lng: 18.840295 };

// Define the request parameters for the Places API search
const request = {
  location: center,
  radius: '500',
  type: ['restaurant', 'bar', 'fastfood']
};

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  public places: BehaviorSubject<any[]> = new BehaviorSubject([]);


  private apiKey = '';

  constructor() { }

  // Load the Google Maps JavaScript API
  private loadGoogleMaps(): void {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places`;
    document.head.appendChild(script);
  }

  // Retrieve an array of nearby restaurants with their data
  getNearbyRestaurants(): void {
    // Load the Google Maps JavaScript API
    this.loadGoogleMaps();

    setTimeout(() => {
        console.log('load')
        const service = new (window as any).google.maps.places.PlacesService(document.createElement('div'));
        service.nearbySearch(request, (results, status) => {
          if (status === (window as any).google.maps.places.PlacesServiceStatus.OK) {
            // Map the search results to an array of restaurants with their data
            const restaurants = results;
            this.places.next(restaurants);
          }
        });
    }, 10000)

  }
}
