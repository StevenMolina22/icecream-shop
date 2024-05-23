import PocketBase from 'pocketbase';

export const DB_HOST = process.env.DB_HOST;
export const pb = new PocketBase(DB_HOST);

