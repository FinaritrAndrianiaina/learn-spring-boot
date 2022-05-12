export class Skills {
  name: string;
  damage: number;
}

export class Hero {
  name: string;
  color: string;
  healthpoints: number;
  secret: string;
  birthyear: number;
  skills: Skills[];
}

export const HERO_SCHEMA = {
  title: 'hero schema',
  version: 0,
  description: 'describes a simple hero',
  primaryKey: 'name',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      maxLength: 100, // <- the primary key must have set maxLength
    },
    color: {
      type: 'string',
    },
    healthpoints: {
      type: 'number',
      minimum: 0,
      maximum: 100,
    },
    secret: {
      type: 'string',
    },
    birthyear: {
      type: 'number',
      final: true,
      minimum: 1900,
      maximum: 2050,
    },
    skills: {
      type: 'array',
      maxItems: 5,
      uniqueItems: true,
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          damage: {
            type: 'number',
          },
        },
      },
    },
  },
  required: ['name', 'color'],
  encrypted: ['secret'],
  attachments: {
    encrypted: true,
  },
};
