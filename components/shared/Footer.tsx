import { Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FooterConfig {
  brandName: string;
  logo: string;
  items: { label: string; href: string }[];
  cta: { label: string; href: string }[];
  links: { label: string; href: string }[];
  social: { label: string; href: string }[];
  policies: { label: string; href: string }[];
  isPremium: boolean;
}

interface FooterProps {
  config: FooterConfig;
}

const Footer: React.FC<FooterProps> = ({ config }) => {
  const year = new Date().getFullYear();

  const { brandName, logo, items, cta, links, social, policies, isPremium } =
    config;

  return (
    <footer className="bg-background">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src={logo} alt={brandName} width={40} height={40} />
              <span className="text-xl font-bold">{brandName}</span>
            </div>
            <div className="space-y-2 flex flex-col">
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium ">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4 ">
            <div className="text-xl font-bold">Services</div>
            <div className="space-y-2 flex flex-col">
              {cta.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium ">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-xl font-bold">Links</div>
            <div className="space-y-2 flex flex-col">
              {links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium ">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-xl font-bold">Social</div>
            <div className="space-y-2 flex flex-col">
              {social.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium ">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Divider
          orientation="horizontal"
          className="bg-secondary-foreground h-px w-full my-4"
        />
        <div className="flex items-center justify-between mt-8">
          <div className="text-base font-medium ">
            &copy; {year} {brandName}. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            {policies.map((policy) => (
              <Link
                key={policy.label}
                href={policy.href}
                className="text-base font-medium ">
                {policy.label}
              </Link>
            ))}
          </div>
        </div>

        {isPremium && (
          <div className="flex items-center justify-center mt-8">
            <span className="text-base font-medium ">
              Powered by{" "}
              <Link href="https://techiden.com" className="text-primary">
                Techiden
              </Link>
            </span>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
