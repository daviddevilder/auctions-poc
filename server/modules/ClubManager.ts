import {Club} from '../../common/models/Club';
import {ClubModel} from '../../src/app/schemas/Club';


export namespace ClubManager {
    export async function GetClubs(): Promise<Club[]> {

        // ClubModel.create({
        //     clubId: 'buryfc',
        //     title: 'Bury FC',
        //     subtitle: 'Player Sponsorship Sealed Bid Auction',
        //     logoUrl: '/assets/clubs/buryfc.png',
        //     websiteUrl: 'http://www.buryfc.com',
        //     contactEmail: 'matt@buryfc.com',
        //     contactPhone: '07708138955',
        //     closingDate: new Date('2018-08-30T16:00:00Z'),
        //     bannerUrl: '/assets/clubs/banners/buryfc-banner.png',
        //     bannerText: 'A UNIQUE OPPORTUNITY TO NAME YOUR PRICE TO SPONSOR YOUR FAVOURITE SHAKERS PLAYER.',
        //     introText: 'Welcome to the Bury FC player sponsorship auction! Please scroll down for more information about the auction or ' +
        //                 'click the \'VIEW THE AUCTION LOTS\' button above to start browsing the available players!',
        //     descriptionHtml: '<h5> Player Sponsorship Packages </h5>' +
        //                      '<p>Bury Football Club’s Player Sponsorships offer real value for money for both businesses and supporters,' +
        //                      ' whether you’re looking to gain exposure to over 100,000 people each season or simply looking to meet your' +
        //                      ' Shakers hero.</p> <p>Our Shakers Player Sponsorship packages include:</p> <b><ul><li> - Your Name or' +
        //                      ' Company Name/Logo under the chosen player in the match day programme</li> <br> <li> - 4 Tweets over the' +
        //                      ' course of the season (Start/Christmas/Easter/End) by either sponsored player (to be retweeted by Bury FC)' +
        //                      ' or Football Club</li> <br> <li> - A signed shirt from your player</li> <br> <li> - 2 x Hospitality Tickets' +
        //                      ' for the Forest Green Rovers game to include a Meet &amp; Greet with your dedicated player *</li> <br>' +
        //                      ' <li> - Carrington Experience Package for all sponsors on a set date in September (TBC).</li></ul> </b>' +
        //                      ' <p><i>* if the sponsor is unavailable, an alternative game will be offered.</i></p><br><p><i>For more ' +
        //                      'information please contact us on 0161 764 4881 (option 2) or via email using' +
        //                      ' matthew.hanson@buryfc.co.uk</i></p>'
        // }, function (err) {
        //     if (err) {
        //         console.log(err);
        //     }
        // });
        //
        // ClubModel.create({
        //     clubId: 'chelseafc',
        //     title: 'Chelsea FC',
        //     subtitle: 'Hospitality Auction',
        //     logoUrl: '/assets/clubs/chelseafc.png',
        //     websiteUrl: 'http://www.chelseafc.com',
        //     contactEmail: 'matt@chelseafc.com',
        //     contactPhone: '077842951039',
        //     closingDate: new Date('2018-08-30T16:00:00Z'),
        //     bannerUrl: '/assets/clubs/banners/chelseafc-banner.png',
        //     bannerText: 'A UNIQUE OPPORTUNITY TO NAME YOUR PRICE TO SPONSOR YOUR FAVOURITE BLUES PLAYER.',
        //     introText: 'Welcome to the Chelsea player sponsorship auction! Please scroll down for more information about the auction or ' +
        //                 'click the \'VIEW THE AUCTION LOTS\' button above to start browsing the available players!',
        //     descriptionHtml: '<h5> Hospitality Packages </h5>' +
        //                      '<p>Chelsea FC’s Player Sponsorships offer real value for money for both businesses and supporters,' +
        //                      ' whether you’re looking to gain exposure to over 100,000 people each season or simply looking to meet your' +
        //                      ' Shakers hero.</p> <p>Our Shakers Player Sponsorship packages include:</p> <b><ul><li> - Your Name or' +
        //                      ' Company Name/Logo under the chosen player in the match day programme</li> <br> <li> - 4 Tweets over the' +
        //                      ' course of the season (Start/Christmas/Easter/End) by either sponsored player (to be retweeted by Chelsea)' +
        //                      ' or Football Club</li> <br> <li> - A signed shirt from your player</li> <br> <li> - 2 x Hospitality Tickets' +
        //                      ' for the Forest Green Rovers game to include a Meet &amp; Greet with your dedicated player *</li> <br>' +
        //                      ' <li> - Carrington Experience Package for all sponsors on a set date in September (TBC).</li></ul> </b>' +
        //                      ' <p><i>* if the sponsor is unavailable, an alternative game will be offered.</i></p><br><p><i>For more ' +
        //                      'information please contact us on 0161 764 4881 (option 2) or via email using' +
        //                      ' matthew.hanson@buryfc.co.uk</i></p>'
        // }, function (err) {
        //     if (err) {
        //         console.log(err);
        //     }
        // });

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            ClubModel.find({}, function (err, clubs) {
                try {
                    const results: Club[] = [];
                    clubs.forEach(function (club) {
                        results.push(
                            new Club(club.clubId, club.title, club.subtitle, club.logoUrl, club.websiteUrl, club.contactEmail,
                                club.contactPhone, club.closingDate, club.bannerUrl, club.bannerText, club.introText,
                                club.descriptionHtml));
                    });

                    resolve(results);
                } catch (error) {
                    reject(error);
                }
            });
        });
    }

    export async function GetClubById(clubId: String): Promise<Club> {
        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            ClubModel.findOne({clubId: clubId}, function (err, club: Club) {
                resolve(
                    new Club(club.clubId, club.title, club.subtitle, club.logoUrl, club.websiteUrl, club.contactEmail,
                        club.contactPhone, club.closingDate, club.bannerUrl, club.bannerText, club.introText,
                        club.descriptionHtml));
            });
        });
    }
}