import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import PocketBase from "pocketbase";

export const DB_HOST = process.env.DB_HOST;
export const pb = new PocketBase(DB_HOST);

export class DatabaseClient {
  client: PocketBase;
  constructor() {
    this.client = pb;
  }
  // authenticate a user
  async authenticate(email: string, password: string) {
    try {
      const result = await this.client
        .collection("users")
        .authWithPassword(email, password);
      if (!result?.token) throw new Error("Authentication failed terribly");
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  // register a new user
  async register(email: string, password: string) {
    try {
      const result = await this.client
        .collection("users")
        .create({ email, password, passwordConfirm: password });
    } catch (error) {
      console.error(error);
    }
  }
  // check if user is authenticated
  async isAuthenticated(cookieStore: ReadonlyRequestCookies) {
    const cookie = cookieStore.get("pb_auth");
    if (!cookie) return false;

    this.client.authStore.loadFromCookie(cookie?.value || "");
    return this.client.authStore.isValid || false;
  }
  // get user data
  async getUser(cookieStore: ReadonlyRequestCookies) {
    const cookie = cookieStore.get("pb_auth");
    if (!cookie) return false;

    this.client.authStore.loadFromCookie(cookie?.value || "");
    return this.client.authStore.model;
  }
}

export const db = new DatabaseClient();

export default db;