import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface AccountSchema {
  createdAt: Generated<Timestamp>;
  email: string;
  id: Generated<string>;
  isAdmin: Generated<boolean>;
  lastLoginAt: Timestamp | null;
  password: string;
  username: string;
}

export interface DB {
  account: AccountSchema;
}
