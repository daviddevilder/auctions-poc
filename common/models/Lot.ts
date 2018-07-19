export class Lot {

    constructor(public lotId: string,
                public clubId: string,
                public title: string,
                public imageUri: string,
                public providedBy: string,
                public reservePrice: number,
                public currentBid: number,
                public currentBidderId: number,
                public tags: string[]) {
    }
}