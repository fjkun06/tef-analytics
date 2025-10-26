import React from "react";

import { ContactIconBubbleProps } from "@/interfaces/contact.interface";
//17
function ContactIconBubble({ icon }: ContactIconBubbleProps) {
  return (
    <span className="flex size-12 min-w-12 items-center justify-center rounded-full border-blue-100 bg-white/60 text-blue-600 shadow-sm backdrop-blur-sm [&>svg]:h-2/4 [&>svg]:w-2/4 [&>svg]:text-blue-600">
      {icon}
    </span>
  );
}

export default ContactIconBubble;
