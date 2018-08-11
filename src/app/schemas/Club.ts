import {Document, Schema, Model, model} from 'mongoose';
import {IClub} from '../../../common/models/IClub';

export interface IClubModel extends IClub, Document {
    clubId: string;
    title: string;
    subtitle: string;
    logoUrl: string;
    websiteUrl: string;
    contactEmail: string;
    contactPhone: string;
    closingDate: Date;
    bannerUrl: string;
    bannerText: string;
    introText: string;
    descriptionHtml: string;
}

export const ClubSchema: Schema = new Schema({
    clubId: String,
    title: String,
    subtitle: String,
    logoUrl: String,
    websiteUrl: String,
    contactEmail: String,
    contactPhone: String,
    closingDate: Date,
    bannerUrl: String,
    bannerText: String,
    introText: String,
    descriptionHtml: String
});

export const ClubModel: Model<IClubModel> = model<IClubModel>('Club', ClubSchema);
