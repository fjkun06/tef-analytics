import { AboutInfoCard, AboutPhoto } from "@/components";

export default function Contact() {
  return (
    <div className="flex w-full gap-6 bg-green-300 p-4">
      <AboutPhoto />
      <AboutInfoCard />
    </div>
  );
}
