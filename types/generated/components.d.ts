import type { Schema, Struct } from '@strapi/strapi';

export interface ArrayArticleSections extends Struct.ComponentSchema {
  collectionName: 'components_array_article_sections';
  info: {
    description: '';
    displayName: 'articleSections';
    icon: 'bulletList';
  };
  attributes: {
    para: Schema.Attribute.Text;
    sectionHeading: Schema.Attribute.String;
  };
}

export interface MapSectionPara extends Struct.ComponentSchema {
  collectionName: 'components_map_section_paras';
  info: {
    displayName: 'sectionPara';
    icon: 'message';
  };
  attributes: {
    para: Schema.Attribute.Text;
    sectionHeading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'array.article-sections': ArrayArticleSections;
      'map.section-para': MapSectionPara;
    }
  }
}
