import type { Schema, Struct } from '@strapi/strapi';

export interface ArrayArticleSections extends Struct.ComponentSchema {
  collectionName: 'components_array_article_sections';
  info: {
    displayName: 'articleSections';
    icon: 'book';
  };
  attributes: {
    articleSection: Schema.Attribute.Component<'object.article-section', true>;
  };
}

export interface ObjectArticleSection extends Struct.ComponentSchema {
  collectionName: 'components_object_article_sections';
  info: {
    displayName: 'articleSection';
    icon: 'bulletList';
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
      'object.article-section': ObjectArticleSection;
    }
  }
}
