import {Document, Schema, Model, model} from "mongoose";
import {IPortfolio} from "../../../common/models/IPortfolio";
import {Holding} from "../../../common/models/Holding";

export interface IPortfolioModel extends IPortfolio, Document {
    id: string;
    name: string;
    holdings: Holding[];
}

export var PortfolioSchema: Schema = new Schema({
    id: String,
    name: String,
    holdings: [{
        tokenId: String,
        quantity: String
    }]
});

export const PortfolioModel: Model<IPortfolioModel> = model<IPortfolioModel>("Portfolio", PortfolioSchema);