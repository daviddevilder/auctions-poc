export class Organisation {

    constructor(public organisationId: string,
                public title: string,
                public subtitle: string,
                public primaryColour: string,
                public logoUrl: string,
                public websiteUrl: string,
                public contactEmail: string,
                public contactPhone: string,
                public closingDate: Date,
                public bannerUrl: string,
                public bannerText: string,
                public introText: string,
                public descriptionHtml: string,
                public faqs: object[]) {
    }
}
