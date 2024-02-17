interface TeamMember {
	firstName: string;
	middleInitial?: string;
	lastName: string;
	description: string;
	email?: string;
	phoneNumber?: string;
	img: string;
}

import AllisonWestover from './images/alli-westover.jpg';
import BillGibson from './images/bill-gibson.jpg';
import BlakeRatcliff from './images/blake-ratcliff.jpg';
import BobZeek from './images/bob-zeek.jpg';
import CarlosValencia from './images/carlos-valencia.jpg';
import DaveSchlichting from './images/dave-schlichting.jpg';
import DonaldHecker from './images/donald-hecker.jpg';
import FloGold from './images/flo-gold.jpg';
import GeneGordon from './images/gene-gordon.jpg';
import GeorgeKessler from './images/george-kessler.jpg';
import GladysHall from './images/gladys-hall.jpg';
import GlennJohnson from './images/glenn-johnson.jpg';
import JenniferLeonard from './images/jennifer-leonard.jpg';
import JulioZambrana from './images/julio-zambrana.jpg';
import LisaPassarelli from './images/lisa-passarelli.jpg';
import LoyTrevino from './images/loy-trevino.jpg';
import LukeSammons from './images/luke-sammons.jpg';
import MikeBennet from './images/mike-bennet.jpg';
import NancyHall from './images/nancy-hall.jpg';
import PhongDo from './images/phong-do.jpg';
import RoyBellard from './images/roy-bellard.jpg';
import StacyHale from './images/stacy-hale.jpg';
import YolandaSimmons from './images/yolanda-simmons.jpg';

// TODO: move photos to public folder
export const members: TeamMember[] = [
	{
		firstName: 'Blake',
		lastName: 'Ratcliff',
		description: 'Program Manager',
		email: 'steven.b.ratcliff@nasa.gov',
		phoneNumber: '(832) 795-8581',
		img: BlakeRatcliff
	},
	{
		firstName: 'George',
		middleInitial: 'J',
		lastName: 'Kessler',
		description: 'Director of Projects',
		email: 'george.j.kessler@nasa.gov',
		phoneNumber: '(713) 213-6487',
		img: GeorgeKessler
	},
	{
		firstName: 'Bob',
		lastName: 'Zeek',
		description: 'MSFC Project Resource Manage and Co-Founder',
		email: 'robert.c.zeek@nasa.gov',
		phoneNumber: '(256) 542-7219',
		img: BobZeek
	},
	{
		firstName: 'Stacy',
		middleInitial: 'L',
		lastName: 'Hale',
		description: 'Founder and Projects Manager',
		email: 'stacy.l.hale@nasa.gov',
		phoneNumber: '(832) 226-3963',
		img: StacyHale
	},
	{
		firstName: 'Flo',
		lastName: 'Gold',
		description: 'Video & Media',
		email: 'florence.v.gold@nasa.gov',
		phoneNumber: '(406) 690-2661',
		img: FloGold
	},
	{
		firstName: 'Roy',
		lastName: 'Bellard',
		description: 'Hardware Education Manager',
		email: 'elroy-bellard-1@nasa.gov',
		phoneNumber: '(281) 787-1495',
		img: RoyBellard
	},
	{
		firstName: 'Jennifer',
		middleInitial: 'M',
		lastName: 'Leonard',
		description: 'Softgoods Lead',
		email: 'jennifer.m.leonard@nasa.gov',
		phoneNumber: '(281) 898-2382',
		img: JenniferLeonard
	},
	{
		firstName: 'Phong',
		lastName: 'Do',
		description: 'Softgoods',
		email: 'phong.t.do@nasa.gov',
		phoneNumber: '(281) 483-3184',
		img: PhongDo
	},
	{
		firstName: 'Loy',
		lastName: 'Trevino',
		description: 'Business Partnership',
		email: 'elroy.w.trevino@nasa.gov',
		phoneNumber: '(281) 244-0706',
		img: LoyTrevino
	},
	{
		firstName: 'Luke',
		lastName: 'Sammons',
		description: 'Technician',
		img: LukeSammons
	},
	{
		firstName: 'Julio',
		lastName: 'Zambrana',
		description: 'Flight Hardware Processing Assistant',
		email: 'jzambra@okstate.edu',
		img: JulioZambrana
	},
	{
		firstName: 'Gladys',
		lastName: 'Hall',
		description: 'Project Coordinator',
		email: 'gladys.e.hall@nasa.gov',
		phoneNumber: '(281) 244-0733',
		img: GladysHall
	},
	{
		firstName: 'Nancy',
		lastName: 'Hall',
		description: 'GRC Project Manager',
		email: 'nancy.r.hall@nasa.gov',
		phoneNumber: '(216) 385-6302',
		img: NancyHall
	},
	{
		firstName: 'Allison',
		lastName: 'Westover',
		description: 'Culinary Project Manager Design and Prototype Engineer',
		email: 'allison.r.westover@nasa.gov',
		phoneNumber: '(281) 898-2486',
		img: AllisonWestover
	},
	{
		firstName: 'Carlos',
		lastName: 'Valencia',
		description: 'Hardware Assembly Specialist',
		email: 'juan.c.valencia@nasa.gov',
		phoneNumber: '(832) 537-8768',
		img: CarlosValencia
	},
	{
		firstName: 'Bill',
		lastName: 'Gibson',
		description: 'Hardware Support Specialist',
		email: 'william.e.gibson@nasa.gov',
		phoneNumber: '(256) 529-3804',
		img: BillGibson
	},
	{
		firstName: 'Glenn',
		lastName: 'Johnson',
		description: 'Design & Prototyping',
		email: 'glenn.f.johnson@nasa.gov',
		phoneNumber: '(281) 755-2823',
		img: GlennJohnson
	},
	{
		firstName: 'Lisa',
		lastName: 'Passarelli',
		description: 'Interim Softgoods Manager',
		email: 'lisa.c.passarelli@nasa.gov',
		phoneNumber: '(231) 861-8454',
		img: LisaPassarelli
	},
	{
		firstName: 'Yolanda',
		lastName: 'Simmons',
		description: 'LaRC Program Manager',
		email: 'yolanda.watford.simmons@nasa.gov',
		phoneNumber: '(757) 864-1569',
		img: YolandaSimmons
	},
	{
		firstName: 'Mike',
		lastName: 'Bennett',
		description: 'Flight Configuration Project Manager',
		email: 'donald.m.bennett@nasa.gov',
		phoneNumber: '(281) 483-0938',
		img: MikeBennet
	},
	{
		firstName: 'Gene',
		lastName: 'Gordon',
		description: 'Mentor',
		email: 'gene@nanoracks.com',
		img: GeneGordon
	},
	{
		firstName: 'Dave',
		lastName: 'Schlichting',
		description: 'Mentor',
		email: 'dave@nanoracks.com',
		img: DaveSchlichting
	},
	{
		firstName: 'Donald',
		middleInitial: 'A',
		lastName: 'Hecker',
		description: 'Flight Hardware Project Manager',
		email: 'donald.a.hecker@nasa.gov',
		phoneNumber: '(281) 244-2852',
		img: DonaldHecker
	}
];
