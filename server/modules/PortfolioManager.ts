import {PortfolioModel} from "../../src/app/schemas/Portfolio";
import {Portfolio} from "../../common/models/Portfolio";

export namespace PortfolioManager {
    export async function GetPortfolios(): Promise<Portfolio[]> {
        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            PortfolioModel.find({}, function (err, portfolios) {
                try {
                    var results: Portfolio[] = [];
                    portfolios.forEach(function (portfolio) {
                        results.push(new Portfolio(portfolio.name, portfolio.holdings));
                    });

                    resolve(results);
                } catch (error) {
                    reject(error);
                }
            });
        });
    }

    export async function CreatePortfolio(name: string, holdings: any): Promise<void> {
        PortfolioModel.create({name: name, holdings: holdings}, function (err) {
            if (err) {
                console.log("Failed to create portfolio");
            }
        });
    }
}