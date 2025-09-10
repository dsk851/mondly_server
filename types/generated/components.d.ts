import type { Schema, Struct } from '@strapi/strapi';

export interface OptionsOption extends Struct.ComponentSchema {
  collectionName: 'components_options_options';
  info: {
    displayName: 'option';
  };
  attributes: {
    option: Schema.Attribute.String;
  };
}

export interface StepStep extends Struct.ComponentSchema {
  collectionName: 'components_step_steps';
  info: {
    displayName: 'step';
  };
  attributes: {
    step: Schema.Attribute.String;
  };
}

export interface TempsDuree extends Struct.ComponentSchema {
  collectionName: 'components_temps_durees';
  info: {
    displayName: 'Duree';
  };
  attributes: {
    Jour: Schema.Attribute.Integer;
    Nuit: Schema.Attribute.Integer;
  };
}

export interface TempsTravelDate extends Struct.ComponentSchema {
  collectionName: 'components_temps_travel_dates';
  info: {
    displayName: 'travel_date';
  };
  attributes: {
    end_date: Schema.Attribute.Date;
    start_date: Schema.Attribute.Date;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'options.option': OptionsOption;
      'step.step': StepStep;
      'temps.duree': TempsDuree;
      'temps.travel-date': TempsTravelDate;
    }
  }
}
