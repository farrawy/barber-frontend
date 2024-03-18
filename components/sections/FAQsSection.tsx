import { Box } from "@mui/material";
import React from "react";
import AccordionFAQs from "../shared/AccordionFAQs";
import { Button } from "../ui/button";

const FAQsSection = () => {
  const faqs = [
    {
      value: "1",
      trigger: "How do I book an appointment?",
      content:
        "You can book an appointment by calling us at 123-456-7890 or by visiting our website and using the online booking form.",
    },
    {
      value: "2",
      trigger: "How long does a haircut take?",
      content:
        "A standard haircut takes around 30 minutes. However, this can vary depending on the style and type of haircut you want.",
    },
    {
      value: "3",
      trigger: "Do you offer hair coloring services?",
      content:
        "Yes, we offer a range of hair coloring services. Please contact us for more information.",
    },
    {
      value: "4",
      trigger: "Do you offer hair styling services for special occasions?",
      content:
        "Yes, we offer hair styling services for special occasions such as weddings, proms, and other events.",
    },
    {
      value: "5",
      trigger: "What are your opening hours?",
      content:
        "We are open from 9am to 6pm Monday to Friday, and from 10am to 4pm on Saturday. We are closed on Sundays.",
    },
  ];
  return (
    <Box className="sm:p-20 p-8 flex flex-col">
      <h3 className="sm:text-5xl text-2xl font-bold !leading-snug">
        Frequently Asked Questions
      </h3>
      <p className="sm:text-xl text-base">
        Find answers to common questions about our barbershop services and
        booking process.
      </p>

      <Box className="flex flex-col gap-4">
        {faqs.map((faq) => (
          <AccordionFAQs
            key={faq.value}
            value={faq.value}
            trigger={faq.trigger}
            content={faq.content}
          />
        ))}
      </Box>
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: ".5rem",
        }}>
        <h3 className="sm:text-2xl text-lg font-bold !leading-snug">
          Still Have Questions?
        </h3>
        <p className="sm:text-lg text-sm  font-light">
          Contact us for further assistance.
        </p>

        <Button className="mt-4">Contact</Button>
      </Box>
    </Box>
  );
};

export default FAQsSection;
