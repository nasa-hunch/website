interface TeamMember {
	firstName: string;
	middleInitial?: string;
	lastName: string;
	description: string;
	email?: string;
	phoneNumber?: string;
    img: string;
}

export const members: TeamMember[] = [
	{
		firstName: 'Blake',
		lastName: 'Ratcliff',
		description: 'HUNCH Program Manager',
		email: 'steven.b.ratcliff@nasa.gov',
		phoneNumber: '(832) 795-8581',
		img: '/images/meet-the-team/blake-ratcliff.jpg'
	},
	{
		firstName: 'Geroge',
		lastName: 'Kessler',
		description: 'HUNCH Director of Projects',
		email: 'george.j.kessler@nasa.gov',
		phoneNumber: '(713) 213-6487',
		img: '/images/meet-the-team/george-kessler.jpg'
	},
	{
		firstName: 'Bob',
		lastName: 'Zeek',
		description: 'MSFC Project Resource Manage and Co-Founder',
		email: 'robert.c.zeek@nasa.gov',
		phoneNumber: '(256) 542-7219',
		img: '/images/meet-the-team/bob-zeek.jpg'
	},
	{
		firstName: 'Stacy',
		lastName: 'Hale',
		description: 'HUNCH Founder and Projects Manager',
		email: 'stacy.l.hale@nasa.gov',
		phoneNumber: '(832) 226-3963',
		img: '/images/meet-the-team/stacy-hale.jpg'
	},
	{
		firstName: 'Flo',
		lastName: 'Gold',
		description: 'Video & Media',
		email: 'florence.v.gold@nasa.gov',
		phoneNumber: '(406) 690-2661',
		img: '/images/meet-the-team/flo-gold.jpg'
	},
	{
		firstName: 'Roy',
		lastName: 'Bellard',
		description: 'Hardware Education Manager',
		email: 'elroy-bellard-1@nasa.gov',
		phoneNumber: '(281) 787-1495',
		img: '/images/meet-the-team/roy-bellard.jpg'
	},
	{
		firstName: 'Jennifer',
		middleInitial: 'M',
		lastName: 'Leonard',
		description: 'Softgoods Lead',
		email: 'jennifer.m.leonard@nasa.gov',
		phoneNumber: '(281) 898-2382',
		img: '/images/meet-the-team/jennifer-leonard.jpg'
	},
	{
		firstName: 'Phong',
		lastName: 'Do',
		description: 'Softgoods',
		email: 'phong.t.do@nasa.gov',
		phoneNumber: '(281) 483-3184',
		img: '/images/meet-the-team/phong-do.jpg'
	},
	{
		firstName: 'Loy',
		lastName: 'Trevino',
		description: 'Business Partnership',
		email: 'elroy.w.trevino@nasa.gov',
		phoneNumber: '(281) 244-0706',
		img: '/images/meet-the-team/loy-trevino.jpg'
	},
	{
		firstName: 'Luke',
		lastName: 'Sammons',
		description: 'HUNCH Technician',
		img: '/images/meet-the-team/luke-sammons.jpg'
	},
	{
		firstName: 'Julio',
		lastName: 'Zambrana',
		description: 'Flight hardware Processing Assistant',
		email: 'jzambra@okstate.edu',
		img: '/images/meet-the-team/julio-zambrana.jpg'
	},
	{
		firstName: 'Gladys',
		lastName: 'Hall',
		description: 'Project Coordinator',
		email: 'gladys.e.hall@nasa.gov',
		phoneNumber: '(281) 244-0733',
		img: '/images/meet-the-team/gladys-hall.jpg'
	},
	{
		firstName: 'Nancy',
		lastName: 'Hall',
		description: 'GRC Project Manager',
		email: 'nancy.r.hall@nasa.gov',
		phoneNumber: '(216) 385-6302',
		img: '/images/meet-the-team/Nancy-Hall.jpg'
	},
	{
		firstName: 'Allison',
		lastName: 'Westover',
		description: 'Culinary Project Manager Design and Prototype Engineer',
		email: 'allison.r.westover@nasa.gov',
		phoneNumber: '(281) 898-2486',
		img: '/images/meet-the-team/alli-westover.jpg'
	},
	{
		firstName: 'Carlos',
		lastName: 'Valencia',
		description: 'Hardware Assembly Specialist',
		email: 'juan.c.valencia@nasa.gov',
		phoneNumber: '(832) 537-8768',
		img: '/images/meet-the-team/carlos-valencia.jpg'
	},
	{
		firstName: 'Bill',
		lastName: 'Gibson',
		description: 'Hardware Support Specialist',
		email: 'william.e.gibson@nasa.gov',
		phoneNumber: '(256) 529-3804',
		img: '/images/meet-the-team/bill-gibson.jpg'
	},
	{
		firstName: 'Glenn',
		lastName: 'Johnson',
		description: 'Design & Prototype',
		email: 'glenn.f.johnson@nasa.gov',
		phoneNumber: '(281) 755-2823',
		img: '/images/meet-the-team/glenn-johnson.jpg'
	},
	{
		firstName: 'Lisa',
		lastName: 'Passarelli',
		description: 'Interim Softgoods Manager',
		email: 'lisa.c.passarelli@nasa.gov',
		phoneNumber: '(231) 861-8454',
		img: '/images/meet-the-team/lisa-passarerlli.jpg'
	},
	{
		firstName: 'Yolanda',
		lastName: 'Simmons',
		description: 'LaRC Program Manager',
		email: 'yolanda.watford.simmons@nasa.gov',
		phoneNumber: '(757) 864-1569',
		img: '/images/meet-the-team/yolanda-simmons.jpg'
	},
	{
		firstName: 'Mike',
		lastName: 'Bennett',
		description: 'Flight Configuration Project Manager',
		email: 'donald.m.bennett@nasa.gov',
		phoneNumber: '(281) 483-0938',
		img: '/images/meet-the-team/mike-bennet.jpg'
	},
	{
		firstName: 'Gene',
		lastName: 'Gordon',
		description: 'NASA HUNCH Mentor',
		email: 'gene@nanoracks.com',
		img: '/images/meet-the-team/gene-gordon.jpg'
	},
	{
		firstName: 'Dave',
		lastName: 'Schlichting',
		description: 'NASA HUNCH Mentor',
		email: 'dave@nanoracks.com',
		img: '/images/meet-the-team/dave-schlichting.jpg'
	},
	{
		firstName: 'Donald',
		middleInitial: 'A',
		lastName: 'Hecker',
		description: 'Flight Hardware Project Manager',
		email: 'donald.a.hecker@nasa.gov',
		phoneNumber: '281-244-2852',
		img: '/images/meet-the-team/donald-hecker.jpg'
	}
].map(x => ({ ...x, img: "https://nasahunch.com" + x.img }))
