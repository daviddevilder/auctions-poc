import {Document, Schema, Model, model} from 'mongoose';
import {ILot} from '../../../common/models/ILot';

export interface ILotModel extends ILot, Document {
    lotId: string;
    clubId: string;
    title: string;
    description: string;
    imageUri: string;
    providedBy: string;
    reservePrice: number;
    estimate: number;
    tags: string[];
    orderNumber: number;
    isFeatured: number;
    bids: object[];
}

export const LotSchema: Schema = new Schema({
    lotId: String,
    clubId: String,
    title: String,
    description: String,
    imageUri: String,
    providedBy: String,
    reservePrice: Number,
    estimate: Number,
    tags: [String],
    orderNumber: Number,
    isFeatured: Number,
    bids: [{
        createdAt: String,
        bidderId: String,
        value: Number
    }]
});

export const LotModel: Model<ILotModel> = model<ILotModel>('Lot', LotSchema);
