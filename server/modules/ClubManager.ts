import {Club} from '../../common/models/Club';
import {ClubModel} from '../../src/app/schemas/Club';


export namespace ClubManager {
    export async function GetClubs(): Promise<Club[]> {

        // ClubModel.create({
        //     clubId: 'buryfc',
        //     title: 'Bury FC',
        //     logoUrl: '/assets/clubs/buryfc.png',
        //     websiteUrl: 'http://www.buryfc.com',
        //     contactEmail: 'matt@buryfc.com',
        //     contactPhone: '07708138955'
        // }, function (err) {
        //     if (err) {
        //         console.log(err);
        //     }
        // });
        //
        // ClubModel.create({
        //     clubId: 'chelseafc',
        //     title: 'Chelsea FC',
        //     logoUrl: '/assets/clubs/chelseafc.png',
        //     websiteUrl: 'http://www.chelseafc.com',
        //     contactEmail: 'matt@chelseafc.com',
        //     contactPhone: '077842951039'
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
                            new Club(club.clubId, club.title, club.logoUrl, club.websiteUrl, club.contactEmail, club.contactPhone));
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
                    new Club(club.clubId, club.title, club.logoUrl, club.websiteUrl, club.contactEmail, club.contactPhone));
            });
        });
    }
}