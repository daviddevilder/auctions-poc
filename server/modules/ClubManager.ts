import {Club} from '../../common/models/Club';
import {ClubModel} from '../../src/app/schemas/Club';


export namespace ClubManager {
    export async function GetClubs(): Promise<Club[]> {

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            ClubModel.find({}, function (err, clubs) {
                try {
                    const results: Club[] = [];
                    clubs.forEach(function (club) {
                        results.push(
                            new Club(club.clubId, club.title, club.subtitle, club.primaryColour, club.logoUrl, club.websiteUrl,
                                club.contactEmail, club.contactPhone, club.closingDate, club.bannerUrl, club.bannerText, club.introText,
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
                    new Club(club.clubId, club.title, club.subtitle, club.primaryColour, club.logoUrl, club.websiteUrl,
                        club.contactEmail, club.contactPhone, club.closingDate, club.bannerUrl, club.bannerText, club.introText,
                        club.descriptionHtml));
            });
        });
    }
}
