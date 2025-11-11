import {
  ContactDomainCard,
  PageHeader,
  ContactLinkItem,
  // ContactSectionContainerItem,
  ContactAndProjectWrapper,
  ContactSectionContainer,
} from "@/components";
import ContactInput from "@/components/contact/ContactInput";
import { domains, socials } from "@/utils/contact.page.constants";
// import { availability, domains, socials } from "@/utils/contact.page.constants";

export default function Contact() {
  return (
    <ContactAndProjectWrapper>
      <div className="w-full">
        <PageHeader scope="contact" />
      </div>

      <div className="flex w-full flex-col gap-10">
        <ContactSectionContainer headingKey="socialsTitle">
          <div className="grid w-full grid-cols-2 gap-7 max-md:flex max-md:flex-col">
            {socials.map((social) => (
              <ContactLinkItem key={social.title} {...social} />
            ))}
          </div>
        </ContactSectionContainer>
        <ContactSectionContainer headingKey="availability.title">
          {/* {availability.map((item) => (
            <ContactSectionContainerItem key={item.descriptionKey} {...item} />
          ))} */}

          <ContactInput labelKey="email" isRequired={true} />
          <ContactInput labelKey="Name" />
          <ContactInput labelKey="Message" isTextArea={true} isRequired />
        </ContactSectionContainer>
      </div>

      <div className="flex w-full justify-between gap-4 max-md:flex-wrap">
        {domains.map((domain) => (
          <ContactDomainCard key={domain.titleKey} {...domain} />
        ))}
      </div>
    </ContactAndProjectWrapper>
  );
}
