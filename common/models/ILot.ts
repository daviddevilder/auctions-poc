export interface ILot {
    lotId?: string;
    clubId?: string;
    title?: string;
    description?: string;
    imageUri?: string;
    providedBy?: string;
    reservePrice?: number;
    estimate?: number;
    tags?: string[];
    orderNumber?: number;
    isFeatured?: number;
    bids?: object[];
}
