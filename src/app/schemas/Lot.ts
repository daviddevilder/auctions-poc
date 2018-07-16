import {Document, Schema, Model, model} from 'mongoose';
import {ILot} from '../../../common/models/ILot';

export interface ILotModel extends ILot, Document {
    clubId: string;
    title: string;
    imageUri: string;
    providedBy: string;
    reservePrice: number;
    currentBid: number;
    currentBidderId: number;
    tags: string[];
}

export const LotSchema: Schema = new Schema({
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

export const LotModel: Model<ILotModel> = model<ILotModel>('Lot', LotSchema);
