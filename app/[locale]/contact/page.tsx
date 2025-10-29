import {
  ContactDomainCard,
  PageHeader,
  ContactIconBubble,
  ContactLinkItem,
  ContactSectionContainerItem,
  ContactAndProjectWrapper,
  ContactSectionContainer,
  IconEnvelope,
  IconLinkedIn,
  IconXing,
  IconX,
} from "@/components";

export default function Contact() {
  return (
    <ContactAndProjectWrapper>
      <PageHeader scope="contact" />

      <div className="flex w-full flex-col gap-10">
        <ContactSectionContainer headingKey="socialsTitle">
          <div className="grid w-full grid-cols-2 gap-7 max-md:flex max-md:flex-col">
            <ContactLinkItem
              icon={<IconEnvelope />}
              title="E-Mail"
              href="#"
              label="francktankouan@yahoo.de"
            />
            <ContactLinkItem
              icon={<IconLinkedIn />}
              title="LinkedIn"
              href="https://www.linkedin.com/in/franck-tankouan-2a9a2ab3/"
              label="Tankouan"
            />
            <ContactLinkItem
              icon={<IconXing />}
              title="Github"
              href="https://github.com/thefranckt"
              label="thefranckt"
            />
            <ContactLinkItem
              icon={<IconX />}
              title="Xing"
              href="#"
              label="Franck Tankouan"
            />
          </div>
        </ContactSectionContainer>
        <ContactSectionContainer headingKey="availability.title">
          <ContactSectionContainerItem
            descriptionKey="availability.one"
            icon={
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-primary h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
            }
          />
          <ContactSectionContainerItem
            descriptionKey="availability.two"
            icon={
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-primary h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
            }
          />
        </ContactSectionContainer>
      </div>

      <ContactIconBubble icon={<span>S</span>} />
      <div className="flex justify-center gap-4 max-md:flex-wrap">
        <ContactDomainCard
          titleKey="domainCard"
          descriptionKey="End-to-end machine learning solutions tailored to your business needs."
          icon={<IconEnvelope />}
        />
        <ContactDomainCard
          titleKey="domainCard"
          descriptionKey="End-to-end machine learning solutions tailored to your business needs."
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-primary h-6 w-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
            </svg>
          }
        />
        <ContactDomainCard
          titleKey="domainCard"
          descriptionKey="End-to-end machine learning solutions tailored to your business needs."
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-primary h-6 w-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
            </svg>
          }
        />
      </div>
    </ContactAndProjectWrapper>
  );
}
