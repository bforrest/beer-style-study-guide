import { Subcategory } from './subcategory';

export class Category {
  constructor(
    public id: number,
    public name: string,
    public notes: string,
    public subcategory: Array<Subcategory>,
  ){}
}
