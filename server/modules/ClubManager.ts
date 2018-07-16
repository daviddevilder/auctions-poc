import {Club} from '../../common/models/Club';
import {ClubModel} from '../../src/app/schemas/Club';


export namespace ClubManager {
    export async function GetClubs(): Promise<Club[]> {

        // ClubModel.create({
        //     clubId: 123,
        //     title: 'Bury FC',
        //     slug: 'buryfc'
        // }, function (err) {
        //     if (err) {
        //         console.log(err);
        //     }
        // });
        //
        // ClubModel.create({
        //     clubId: 124,
        //     title: 'Chelsea FC',
        //     slug: 'chelseafc'
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
                        results.push(new Club(club.clubId, club.title));
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
                resolve(new Club(club.clubId, club.title));
            });
        });
    }
}