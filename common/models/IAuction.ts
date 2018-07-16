export interface IAuction {
    clubId?: string;
    title?: string;
    imageUri?: string;
    providedBy?: string;
    reservePrice?: number;
    currentBid?: number;
    currentBidderId?: number;
    tags?: string[];
}