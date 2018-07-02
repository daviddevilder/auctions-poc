import {Token} from "../../common/models/Token";
const request = require('request');

export namespace TokenManager {
    export async function GetTokens(): Promise<Token[]> {
        const url: String = "https://api.coinmarketcap.com/v2/ticker/?limit=10";

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            request.get(url, async (error, response, body: string) => {
                if (error || (response && response.statusCode !== 200)) {
                    reject(error);
                }

                try {
                    const tokens: Token[] = [];
                    const jsonObject = JSON.parse(body);
                    Object.keys(jsonObject.data).forEach((key) => {
                        tokens.push(new Token(
                            jsonObject.data[key].id,
                            jsonObject.data[key].name,
                            jsonObject.data[key].quotes["USD"].price))
                    });
                    resolve(tokens);
                } catch (jsonParseError) {
                    reject(jsonParseError);
                }
            });
        });
    }
}