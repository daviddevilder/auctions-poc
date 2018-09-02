export class Lot {

    constructor(public lotId: string,
                public organisationId: string,
                public title: string,
                public description: string,
                public imageUri: string,
                public providedBy: string,
                public reservePrice: number,
                public estimate: number,
                public tags: string[],
                public orderNumbder: number,
                public isFeatured: number,
                public bids: object[],
                public winningBidId: string) {
    }
}