import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionProps {
  value: string;
  trigger: string;
  content: string;
  type?: "single" | "multiple";
  isCollapsible?: boolean;
}

const AccordionFAQs: React.FC<AccordionProps> = ({
  value,
  trigger,
  content,
  type = "single",
  isCollapsible = true,
}) => {
  return (
    <div>
      <Accordion type={type} collapsible={isCollapsible}>
        <AccordionItem value={value}>
          <AccordionTrigger className="text-left text-base sm:font-bold">
            {trigger}
          </AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionFAQs;
