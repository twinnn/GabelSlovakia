import React from "react";

type Partner = {
  name: string;
  title: string;
  href: string;
  logo: string;
};

const partners: Partner[] = [
  {
    name: "ZSL",
    title: "Zväz slovenského lyžovania",
    href: "https://www.zvazslovenskeholyzovania.sk/",
    logo: "/images/logos/partners/Ski_Team_Slovakia.png",
  },
  {
    name: "SFNW",
    title: "Športová federácia Nordic Walking",
    href: "https://sfnw.sk/",
    logo: "/images/logos/partners/SFNW.png",
  },
  {
    name: "GO NOOW",
    title: "GO NOOW – športové oblečenie a palice",
    href: "https://www.go-noow.sk/",
    logo: "/images/logos/partners/GO-NOOW.png",
  },
];

export const Partners = () => {
  return (
    <section id="partners" aria-labelledby="partners-heading" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ul className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {partners.map((partner) => (
            <li key={partner.name}>
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${partner.title} (otvorí sa v novej karte)`}
                title={partner.title}
                className="inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gabel-yellow rounded-sm"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.title} – logo`}
                  loading="lazy"
                  decoding="async"
                  className="h-15 md:h-20 w-auto object-contain "
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
