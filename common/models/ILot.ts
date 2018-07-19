export interface ILot {
    lotId?: string;
    clubId?: string;
    title?: string;
    imageUri?: string;
    providedBy?: string;
    reservePrice?: number;
    currentBid?: number;
    currentBidderId?: number;
    tags?: string[];
}