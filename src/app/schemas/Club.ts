import {Document, Schema, Model, model} from 'mongoose';
import {IClub} from '../../../common/models/IClub';

export interface IClubModel extends IClub, Document {
    clubId: string;
    title: string;
}

export const ClubSchema: Schema = new Schema({
    clubId: String,
    title: String
});

export const ClubModel: Model<IClubModel> = model<IClubModel>('Club', ClubSchema);
