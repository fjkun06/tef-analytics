import { ContactFormValues } from "@/interfaces/contact.interface";

const postData = (data: ContactFormValues): Promise<ContactFormValues> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${JSON.stringify(data)} saved.`);
      resolve({ ...data });
    }, 3000);
  });
};

export default postData;
