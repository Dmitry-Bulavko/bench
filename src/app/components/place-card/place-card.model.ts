export interface IPlaceCard {
    id: string;
    name: string;
    rating: number;
    costRating: ECostRating;
    address: string;
    kitchenList: string[];
    avaliableStatus: string;
    image: '';
    placeType: string;
}

export enum ECostRating {
    Cheap,
    Medium,
    Expensive,
    OverPrice
}