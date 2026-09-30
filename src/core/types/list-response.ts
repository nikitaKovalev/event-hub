export interface ListResponse<T> {
  readonly data: T[];
  readonly first: number;
  readonly prev: number | null;
  readonly next: number | null;
  readonly last: number;
  readonly pages: number;
  readonly items: number;
}