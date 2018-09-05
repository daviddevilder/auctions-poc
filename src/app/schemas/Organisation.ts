import {Document, Schema, Model, model} from 'mongoose';
import {IOrganisation} from '../../../common/models/IOrganisation';

export interface IOrganisationModel extends IOrganisation, Document {
    organisationId: string;
    title: string;
    subtitle: string;
    primaryColour: string;
    logoUrl: string;
    address: string;
    websiteUrl: string;
    contactEmail: string;
    contactPhone: string;
    closingDate: Date;
    bannerUrl: string;
    bannerText: string;
    introText: string;
    descriptionHtml: string;
    faqs: object[];
}

export const OrganisationSchema: Schema = new Schema({
    organisationId: String,
    title: String,
    subtitle: String,
    primaryColour: String,
    logoUrl: String,
    address: String,
    websiteUrl: String,
    contactEmail: String,
    contactPhone: String,
    closingDate: Date,
    bannerUrl: String,
    bannerText: String,
    introText: String,
    descriptionHtml: String,
    faqs: [{
        question: String,
        answer: String,
    }]
});

export const OrganisationModel: Model<IOrganisationModel> = model<IOrganisationModel>('Organisation', OrganisationSchema);
