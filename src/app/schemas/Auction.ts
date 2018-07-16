import {Document, Schema, Model, model} from 'mongoose';
import {IAuction} from '../../../common/models/IAuction';

export interface IAuctionModel extends IAuction, Document {
    clubId: string;
    title: string;
    imageUri: string;
    providedBy: string;
    reservePrice: number;
    currentBid: number;
    currentBidderId: number;
    tags: string[];
}

export const AuctionSchema: Schema = new Schema({
    clubId: String,
    title: String,
    imageUri: String,
    providedBy: String,
    reservePrice: Number,
    currentBid: Number,
    currentBidderId: Number,
    tags: [{
            type: String
    }]
});

export const AuctionModel: Model<IAuctionModel> = model<IAuctionModel>('Auction', AuctionSchema);
