export class Auction {

    constructor(public clubId: number,
                public title: string,
                public imageUri: string,
                public providedBy: string,
                public reservePrice: number,
                public currentBid: number,
                public currentBidderId: number,
                public tags: string[]) {
    }
}