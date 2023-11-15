import { ContactType } from "@/types";

export class Service {
  async contactForm(formData: ContactType) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      return await response.json();
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export const service = new Service();

export default service;
