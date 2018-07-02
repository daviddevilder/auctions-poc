import {Holding} from "./Holding";

export class Portfolio {
    public totalValue: number;

    constructor(public name: string,
                public holdings: Holding[]) {
    }
}