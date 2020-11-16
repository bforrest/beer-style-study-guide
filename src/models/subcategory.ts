import { Stats } from './stats';

export class Subcategory {
  constructor(
  public id: string,
  public name: string,
  public aroma: string,
  public appearance: string,
  public flavor: string,
  public mouthfeel: string,
  public impression: string,
  public comments: string,
  public history: string,
  public ingredients: string,
  public comparison: string,
  public examples: string,
  public tags: string,
  public stats: Stats,
  ){}
}
