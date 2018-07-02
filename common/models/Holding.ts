export class Holding {
    public tokenName: string;
    public value: number;

    constructor(public tokenId: string,
                public quantity: number) {
    }
}