import { conf } from "@/conf/conf";
import { ContactType } from "@/types";
import { Client, Databases, ID, Models } from "node-appwrite";

export class Service {
  client = new Client();
  databases: Databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async verifyGoogleReCaptchaToken(token: string) {
    try {
      const response = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `secret=${conf.recaptchaSecretKey}&response=${token}`,
        }
      );

      return (await response.json()) as {
        success: boolean;
        challenge_ts: string;
        hostname: string;
        action: string;
        "error-codes"?: string[];
      };
    } catch (error) {
      return {
        success: false,
        challenge_ts: token,
        hostname: "",
        action: "",
      };
    }
  }

  async createContact(data: Omit<Omit<ContactType, "captchaToken">, "tnc">) {
    try {
      const response = await this.databases.createDocument<
        Models.Document & Omit<Omit<ContactType, "captchaToken">, "tnc">
      >(
        conf.appwriteDatabaseId,
        conf.appwriteContactCollectionId,
        ID.unique(),
        data
      );
      return response;
    } catch (error: any) {
      throw error.message;
    }
  }

  async cleanCollection(databaseId: string, collectionId: string) {
    try {
      const documentsModel = await this.databases.listDocuments(
        databaseId,
        collectionId
      );
      const { documents, total } = documentsModel;

      const promises: Promise<any>[] = [];

      documents.forEach((document) => {
        promises.push(
          this.databases.deleteDocument(databaseId, collectionId, document.$id)
        );
      });

      await Promise.all(promises);

      return {
        success: true,
        total,
        deleted: documents.length,
      };
    } catch (error) {
      return {
        success: false,
        name: "Appwrite error",
        error,
      };
    }
  }
}

export default Service;
