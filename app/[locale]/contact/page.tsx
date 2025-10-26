import {
  ContactDomainCard,
  PageHeader,
  ContactIconBubble,
  ContactLinkItem,
  ContactSectionContainerItem,
} from "@/components";

export default function Contact() {
  return (
    <div className="mx-auto max-w-4xl bg-orange-200 px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex h-full w-full flex-col items-center">
        <PageHeader />
        <ContactDomainCard />
        <ContactIconBubble />
        <ContactLinkItem />
        <ContactSectionContainerItem />
      </div>
    </div>
  );
}
