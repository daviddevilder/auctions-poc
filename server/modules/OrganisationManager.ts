import {Organisation} from '../../common/models/Organisation';
import {OrganisationModel} from '../../src/app/schemas/Organisation';


export namespace OrganisationManager {
    export async function GetOrganisations(): Promise<Organisation[]> {

        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            OrganisationModel.find({}, function (err, organisations) {
                try {
                    const results: Organisation[] = [];
                    organisations.forEach(function (organisation) {
                        results.push(
                            new Organisation(organisation.organisationId, organisation.title, organisation.subtitle,
                                organisation.primaryColour, organisation.logoUrl, organisation.address, organisation.websiteUrl,
                                organisation.contactEmail, organisation.contactPhone, organisation.closingDate, organisation.bannerUrl,
                                organisation.bannerText, organisation.introText, organisation.descriptionHtml, organisation.faqs,
                                organisation.stripeIntegration));
                    });

                    resolve(results);
                } catch (error) {
                    reject(error);
                }
            });
        });
    }

    export async function GetOrganisationById(organisationId: String): Promise<Organisation> {
        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            OrganisationModel.findOne({organisationId: organisationId}, function (err, organisation: Organisation) {
                resolve(
                    new Organisation(organisation.organisationId, organisation.title, organisation.subtitle, organisation.primaryColour,
                        organisation.logoUrl, organisation.address, organisation.websiteUrl, organisation.contactEmail,
                        organisation.contactPhone, organisation.closingDate, organisation.bannerUrl, organisation.bannerText,
                        organisation.introText, organisation.descriptionHtml, organisation.faqs, organisation.stripeIntegration));
            });
        });
    }
}
