import { category } from './category.model';

export class Place{
  constructor(public id: string,
    public title: string,
    public description: string,
    public imgUrl: string,
    public price: number,
    public combination: {
      size: string;
    },
    public categories: category[]
    ){}
}
