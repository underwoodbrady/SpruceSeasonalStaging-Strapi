import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    ButtonURL: Schema.Attribute.String;
  };
}

export interface ComponentsLabeledImage extends Struct.ComponentSchema {
  collectionName: 'components_components_labeled_images';
  info: {
    displayName: 'LabeledImage';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Label: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    LinkText: Schema.Attribute.String;
    LinkURL: Schema.Attribute.String;
  };
}

export interface SectionsAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_uses';
  info: {
    displayName: 'About Us';
  };
  attributes: {
    ButtonLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    Heading: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsContactUsForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_us_forms';
  info: {
    displayName: 'Contact Us Form';
    icon: 'message';
  };
  attributes: {
    Introduction: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ButtonLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
    Heading: Schema.Attribute.String;
    MobileBackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Subheading: Schema.Attribute.String;
  };
}

export interface SectionsJoinOurMailingList extends Struct.ComponentSchema {
  collectionName: 'components_sections_join_our_mailing_lists';
  info: {
    displayName: 'Join Our Mailing List';
    icon: 'envelop';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    Subheading: Schema.Attribute.String;
  };
}

export interface SectionsMeetTheTeam extends Struct.ComponentSchema {
  collectionName: 'components_sections_meet_the_teams';
  info: {
    displayName: 'Meet The Team';
    icon: 'user';
  };
  attributes: {
    ButtonLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    Heading: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsOurServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_services';
  info: {
    displayName: 'Our Services';
    icon: 'apps';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    Subheading: Schema.Attribute.String;
  };
}

export interface SectionsOurWork extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_works';
  info: {
    displayName: 'Our Work';
    icon: 'picture';
  };
  attributes: {
    ButtonLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
    Heading: Schema.Attribute.String;
    Images: Schema.Attribute.Component<'components.labeled-image', true>;
  };
}

export interface SectionsPageHeading extends Struct.ComponentSchema {
  collectionName: 'components_sections_page_headings';
  info: {
    displayName: 'Page Heading';
    icon: 'bold';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsTheProcess extends Struct.ComponentSchema {
  collectionName: 'components_sections_the_processes';
  info: {
    displayName: 'The Process';
    icon: 'bulletList';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.button': ComponentsButton;
      'components.labeled-image': ComponentsLabeledImage;
      'components.link': ComponentsLink;
      'sections.about-us': SectionsAboutUs;
      'sections.contact-us-form': SectionsContactUsForm;
      'sections.hero': SectionsHero;
      'sections.join-our-mailing-list': SectionsJoinOurMailingList;
      'sections.meet-the-team': SectionsMeetTheTeam;
      'sections.our-services': SectionsOurServices;
      'sections.our-work': SectionsOurWork;
      'sections.page-heading': SectionsPageHeading;
      'sections.the-process': SectionsTheProcess;
    }
  }
}
