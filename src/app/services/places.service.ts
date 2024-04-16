import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ECostRating, IPlaceCard } from '../components/place-card/place-card.model';
import { RestaurantService } from './google-api.service';

const mocks: IPlaceCard[] = [{
  id: 'place1',
  name: 'Ван гог',
  address: 'ул. Вангога д.1',
  avaliableStatus: 'в течении полу часа',
  costRating: ECostRating.OverPrice,
  kitchenList: ['Итальянская', 'Испанская'],
  placeType: 'Ресторан',
  rating: 4.8,
  image: '',
},
{
  id: 'place2',
  name: 'Ресторан классической национальной грузинской кухни Карамджян',
  address: 'ул.Мрхацтлы Бэрханджана 520',
  avaliableStatus: 'Сегодня вечером после 18:00',
  costRating: ECostRating.Medium,
  kitchenList: ['Грузинская', 'Армянская', 'Кавказская'],
  placeType: 'Таверна',
  rating: 3.1,
  image: '',
},];

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(
    private restaurantService: RestaurantService
  ) { }

  getPlaceById(id: string): Observable<IPlaceCard> {
    return of(mocks.find(place => place.id === id))
  }

  getAllPlaces(): Observable<IPlaceCard[]> {
    return of(mocks)
  }
}
