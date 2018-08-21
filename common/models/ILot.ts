export interface ILot {
    lotId?: string;
    organisationId?: string;
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
