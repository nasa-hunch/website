import { PrismaClient } from '@prisma/client';

import { githubURL } from './url';

export interface Partner {
  name: string;
  logo: string;
  website: string;
}

const partners: Partner[] = [
  {
    name: 'World Association of Chefs Societies',
    logo: 'world-chefs.jpg',
    website: 'https://worldchefs.org/'
  },
  {
    name: 'Lone Star Flight Museum',
    logo: 'lone-start-flight-museum-partner.jpg',
    website: 'https://lonestarflight.org/'
  },
  {
    name: 'Houston Space Center',
    logo: 'space-center-houston-partner.jpg',
    website: 'https://spacecenter.org/'
  },
  {
    name: 'Edge Factor',
    logo: 'edgefactor.png',
    website: 'https://edgefactor.com/'
  },
  {
    name: 'Lockheed Martin',
    logo: 'lockheed-partner.png',
    website: 'https://www.lockheedmartin.com/en-us/index.html'
  },
  {
    name: 'Sandvick Coromant',
    logo: 'sandvik.png',
    website: 'https://www.sandvik.coromant.com/en-us/'
  },
  {
    name: 'Haas Automation Inc.',
    logo: 'haas.png',
    website: 'https://www.haascnc.com/'
  },
  {
    name: 'Sierra Nevada Corporation',
    logo: 'snc.png',
    website: 'https://www.sncorp.com/'
  },
  {
    name: 'techshot',
    logo: 'techshot.png',
    website: 'https://www.techshot.com/'
  },
  {
    name: 'Mastercam',
    logo: 'mastercam.png',
    website: 'https://www.mastercam.com/'
  },
  {
    name: 'Knights Manufacturing',
    logo: 'knights.png',
    website: 'https://www.knightarmco.com/'
  },
  {
    name: 'Larsen Motorsports',
    logo: 'larsen.png',
    website: 'https://www.larsenmotorsports.com/'
  },
  {
    name: 'Integrate Systems, Inc.',
    logo: 'integratesystems.png',
    website: 'https://integrate-systems.com/'
  },
  {
    name: 'Space Foundation',
    logo: 'space-foundation.png',
    website: 'https://www.spacefoundation.org/'
  },
  {
    name: 'GeneHaas Foundation',
    logo: 'gh.png',
    website: 'https://ghaasfoundation.org/'
  },
  {
    name: 'SME Education Foundation',
    logo: 'sme.png',
    website: 'https://www.smeef.org/'
  },
  {
    name: 'Axiom Space',
    logo: 'axiom.png',
    website: 'https://www.axiomspace.com/'
  },
  {
    name: 'Blazing Trails',
    logo: 'blazing-trails.png',
    website: 'https://www.blazingtrails.info/'
  },
  {
    name: 'Association for Career and Technical Education',
    logo: 'ACTElogo.png',
    website: 'https://www.acteonline.org/'
  },
  {
    name: 'American Culinary Federation',
    logo: 'ACF-logo-2.png',
    website: 'https://www.acfchefs.org/'
  },
  {
    name: 'Raspberry Pi',
    logo: 'RPi-Logo-Black-Stacked-Reg-PRINT.png',
    website: 'https://www.raspberrypi.org/'
  },
  {
    name: 'Eastern Florida State College',
    logo: 'Eastern-Florida-State-College-Partner-Logo-bw.jpg',
    website: 'https://www.easternflorida.edu/'
  },
  {
    name: 'Sullivan University',
    logo: 'SU_logo_trans_BW-1.png',
    website: 'https://www.sullivan.edu/'
  }
].map((x) => ({ ...x, logo: `${githubURL}/partners/${x.logo}` }));

export async function main(client: PrismaClient) {
  if ((await client.partner.count()) > 0) {
    console.log('Partners already seeded, skipping...');
    return;
  }

  await client.partner.createMany({
    data: partners
  });
}
