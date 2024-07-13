import type { Schema, Attribute } from '@strapi/strapi';

export interface GenresGenres extends Schema.Component {
  collectionName: 'components_genres_genres';
  info: {
    displayName: 'genres';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'genres.genres': GenresGenres;
    }
  }
}
