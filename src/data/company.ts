// Distributor details, as registered in the Slovak commercial register (ORSR, extract of 9 Nov 2026).
export const company = {
  legalName: "AC ecom s. r. o.",
  address: {
    street: "Bottova 1919/14",
    locality: "Alžbetin Dvor",
    postalCode: "900 42",
    town: "Miloslavov",
  },
  ico: "53 870 441",
  register: "Obchodný register Mestského súdu Bratislava III, oddiel Sro, vložka č. 167354/B",
  email: "info@gabelpalice.sk",
  phone: "+421 910 497 597",
  facebook: "https://www.facebook.com/gabelpoles.sk.cz",
  instagram: "https://www.instagram.com/gabelpoles.sk_cz/",
} as const;

export const phoneHref = `tel:${company.phone.replace(/\s/g, "")}`;
export const addressLine = `${company.address.street}, ${company.address.locality}, ${company.address.postalCode} ${company.address.town}`;
