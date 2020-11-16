import { Abv } from './abv';
import { Gravity } from './gravity';
import { Ibu } from './ibu';
import { Srm } from './srm';

export class Stats {
  constructor(
    public ibu: Ibu,
    public og: Gravity,
    public fg: Gravity,
    public srm: Srm,
    public abv: Abv,
  ){}
}
