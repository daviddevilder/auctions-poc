export interface IAuction {
    clubId?: number;
    title?: string;
    imageUri?: string;
    providedBy?: string;
    reservePrice?: number;
    currentBid?: number;
    currentBidderId?: number;
    tags?: string[];
}