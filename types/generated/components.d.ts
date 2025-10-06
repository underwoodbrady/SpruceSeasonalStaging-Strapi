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
    Description: Schema.Attribute.Blocks;
    Heading: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    Subheading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.button': ComponentsButton;
      'components.link': ComponentsLink;
      'sections.about-us': SectionsAboutUs;
      'sections.hero': SectionsHero;
    }
  }
}
