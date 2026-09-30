type Operator = 'lt' | 'lte' | 'gt' | 'gte' | 'eq' | 'ne' | 'in' | 'contains' | 'startsWith' | 'endsWith';

type Leaves<T> = T extends object
  ? { [K in keyof T]-?: K extends string | number
      ? `${K}` | `${K}.${Leaves<T[K]>}`
      : never
    }[keyof T]
  : never;

export type QueryConditions<T extends Record<string, any>> = {
  [K in Leaves<T>]?: any | { [Op in Operator]?: any };
};

export interface QueryList {
  _sort?: string;
  _page?: number;
  _per_page?: number;
}
