export interface IOrganisation {
    organisationId?: string;
    title?: string;
    subtitle?: string;
    primaryColour?: string;
    logoUrl?: string;
    address?: string;
    websiteUrl?: string;
    contactEmail?: string;
    contactPhone?: string;
    closingDate?: Date;
    bannerUrl?: string;
    bannerText?: string;
    introText?: string;
    descriptionHtml?: string;
    faqs?: object[];
}
