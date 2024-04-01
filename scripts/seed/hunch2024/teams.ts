import { PrismaClient } from '@prisma/client';

import { githubURL } from './url';

interface TeamMember {
  firstName: string;
  middleInitial?: string;
  lastName: string;
  role: string;
  email?: string;
  phone?: string;
  pfp: string;
}

const members: TeamMember[] = [
  {
    firstName: 'Blake',
    lastName: 'Ratcliff',
    role: 'Program Manager',
    email: 'steven.b.ratcliff@nasa.gov',
    phone: '(832) 795-8581',
    pfp: 'blake-ratcliff.jpg'
  },
  {
    firstName: 'George',
    middleInitial: 'J',
    lastName: 'Kessler',
    role: 'Director of Projects',
    email: 'george.j.kessler@nasa.gov',
    phone: '(713) 213-6487',
    pfp: 'george-kessler.jpg'
  },
  {
    firstName: 'Bob',
    lastName: 'Zeek',
    role: 'MSFC Project Resource Manager and Co-Founder',
    email: 'robert.c.zeek@nasa.gov',
    phone: '(256) 542-7219',
    pfp: 'bob-zeek.jpg'
  },
  {
    firstName: 'Stacy',
    middleInitial: 'L',
    lastName: 'Hale',
    role: 'Founder and Projects Manager',
    email: 'stacy.l.hale@nasa.gov',
    phone: '(832) 226-3963',
    pfp: 'stacy-hale.jpg'
  },
  {
    firstName: 'Flo',
    lastName: 'Gold',
    role: 'Video & Media',
    email: 'florence.v.gold@nasa.gov',
    phone: '(406) 690-2661',
    pfp: 'flo-gold.jpg'
  },
  {
    firstName: 'Roy',
    lastName: 'Bellard',
    role: 'Hardware Education Manager',
    email: 'elroy-bellard-1@nasa.gov',
    phone: '(281) 787-1495',
    pfp: 'roy-bellard.jpg'
  },
  {
    firstName: 'Jennifer',
    middleInitial: 'M',
    lastName: 'Leonard',
    role: 'Softgoods Lead',
    email: 'jennifer.m.leonard@nasa.gov',
    phone: '(281) 898-2382',
    pfp: 'jennifer-leonard.jpg'
  },
  {
    firstName: 'Phong',
    lastName: 'Do',
    role: 'Softgoods',
    email: 'phong.t.do@nasa.gov',
    phone: '(281) 483-3184',
    pfp: 'phong-do.jpg'
  },
  {
    firstName: 'Loy',
    lastName: 'Trevino',
    role: 'Business Partnership',
    email: 'elroy.w.trevino@nasa.gov',
    phone: '(281) 244-0706',
    pfp: 'loy-trevino.jpg'
  },
  {
    firstName: 'Luke',
    lastName: 'Sammons',
    role: 'Technician',
    pfp: 'luke-sammons.jpg'
  },
  {
    firstName: 'Julio',
    lastName: 'Zambrana',
    role: 'Flight Hardware Processing Assistant',
    email: 'jzambra@okstate.edu',
    pfp: 'julio-zambrana.jpg'
  },
  {
    firstName: 'Gladys',
    lastName: 'Hall',
    role: 'Project Coordinator',
    email: 'gladys.e.hall@nasa.gov',
    phone: '(281) 244-0733',
    pfp: 'gladys-hall.jpg'
  },
  {
    firstName: 'Nancy',
    lastName: 'Hall',
    role: 'GRC Project Manager',
    email: 'nancy.r.hall@nasa.gov',
    phone: '(216) 385-6302',
    pfp: 'nancy-hall.jpg'
  },
  {
    firstName: 'Allison',
    lastName: 'Westover',
    role: 'Culinary Project Manager, Design and Prototype Engineer',
    email: 'allison.r.westover@nasa.gov',
    phone: '(281) 898-2486',
    pfp: 'alli-westover.jpg'
  },
  {
    firstName: 'Carlos',
    lastName: 'Valencia',
    role: 'Hardware Assembly Specialist',
    email: 'juan.c.valencia@nasa.gov',
    phone: '(832) 537-8768',
    pfp: 'carlos-valencia.jpg'
  },
  {
    firstName: 'Bill',
    lastName: 'Gibson',
    role: 'Hardware Support Specialist',
    email: 'william.e.gibson@nasa.gov',
    phone: '(256) 529-3804',
    pfp: 'bill-gibson.jpg'
  },
  {
    firstName: 'Glenn',
    lastName: 'Johnson',
    role: 'Design & Prototyping',
    email: 'glenn.f.johnson@nasa.gov',
    phone: '(281) 755-2823',
    pfp: 'glenn-johnson.jpg'
  },
  {
    firstName: 'Lisa',
    lastName: 'Passarelli',
    role: 'Interim Softgoods Manager',
    email: 'lisa.c.passarelli@nasa.gov',
    phone: '(231) 861-8454',
    pfp: 'lisa-passarelli.jpg'
  },
  {
    firstName: 'Yolanda',
    lastName: 'Simmons',
    role: 'LaRC Program Manager',
    email: 'yolanda.watford.simmons@nasa.gov',
    phone: '(757) 864-1569',
    pfp: 'yolanda-simmons.jpg'
  },
  {
    firstName: 'Mike',
    lastName: 'Bennett',
    role: 'Flight Configuration Project Manager',
    email: 'donald.m.bennett@nasa.gov',
    phone: '(281) 483-0938',
    pfp: 'mike-bennet.jpg'
  },
  {
    firstName: 'Gene',
    lastName: 'Gordon',
    role: 'Mentor',
    email: 'gene@nanoracks.com',
    pfp: 'gene-gordon.jpg'
  },
  {
    firstName: 'Dave',
    lastName: 'Schlichting',
    role: 'Mentor',
    email: 'dave@nanoracks.com',
    pfp: 'dave-schlichting.jpg'
  },
  {
    firstName: 'Donald',
    middleInitial: 'A',
    lastName: 'Hecker',
    role: 'Flight Hardware Project Manager',
    email: 'donald.a.hecker@nasa.gov',
    phone: '(281) 244-2852',
    pfp: 'donald-hecker.jpg'
  }
].map((x) => ({ ...x, pfp: `${githubURL}/team/${x.pfp}` }));

export async function main(client: PrismaClient) {
  if ((await client.teamMember.count()) > 0) {
    console.log('Team members already seeded, skipping...');
    return;
  }

  await client.teamMember.createMany({
    data: members.map((member) => ({
      role: member.role,
      email: member.email,
      phone: member.phone,
      pfp: member.pfp,
      name: `${member.firstName} ${member.middleInitial ? member.middleInitial + ' ' : ''}${
        member.lastName
      }`
    }))
  });
}
