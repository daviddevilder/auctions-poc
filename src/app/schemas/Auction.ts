import {Document, Schema, Model, model} from "mongoose";
import {IAuction} from "../../../common/models/IAuction";

export interface IAuctionModel extends IAuction, Document {
    clubId: number;
    title: string;
    imageUri: string;
    providedBy: string;
    reservePrice: number;
    currentBid: number;
    currentBidderId: number;
    tags: string[];
}

export var AuctionSchema: Schema = new Schema({
    clubId: Number,
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

export const AuctionModel: Model<IAuctionModel> = model<IAuctionModel>("Auction", AuctionSchema);