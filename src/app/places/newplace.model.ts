import { category } from './category.model';

/* eslint-disable @typescript-eslint/naming-convention */
export interface Inewplace {
  placeId: string;
  placeName: string;
  price: number;
  combination: { size: string };
  categories: category[];
}
