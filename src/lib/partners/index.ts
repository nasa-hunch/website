export interface Partner {
	name: string;
	logo: string;
	href: string;
}

export const partners: Partner[] = [
	{
		name: 'World Association of Chefs Societies',
		logo: '/images/partners/world-chefs.jpg',
		href: 'https://worldchefs.org/'
	},
	{
		name: 'Lone Star Flight Museum',
		logo: '/images/partners/lone-start-flight-museum-partner.jpg',
		href: 'https://lonestarflight.org/'
	},
	{
		name: 'Houston Space Center',
		logo: '/images/partners/space-center-houston-partner.jpg',
		href: 'https://spacecenter.org/'
	},
	{
		name: 'Edge Factor',
		logo: '/images/partners/edgefactor.png',
		href: 'https://edgefactor.com/'
	},
	{
		name: 'Lockheed Martin',
		logo: '/images/partners/lockheed-partner.png',
		href: 'https://www.lockheedmartin.com/en-us/index.html'
	},
	{
		name: 'Sandvick Coromant',
		logo: '/images/partners/sandvik.png',
		href: 'https://www.sandvik.coromant.com/en-us/'
	},
	{
		name: 'Haas Automation Inc.',
		logo: '/images/partners/haas.png',
		href: 'https://www.haascnc.com/'
	},
	{
		name: 'Sierra Nevada Corporation',
		logo: '/images/partners/snc.png',
		href: 'https://www.sncorp.com/'
	},
	{
		name: 'techshot',
		logo: '/images/partners/techshot.png',
		href: 'https://www.techshot.com/'
	},
	{
		name: 'Mastercam',
		logo: '/images/partners/mastercam.png',
		href: 'https://www.mastercam.com/'
	},
	{
		name: 'Knights Manufacturing',
		logo: '/images/partners/knights.png',
		href: 'https://www.knightarmco.com/'
	},
	{
		name: 'Larsen Motorsports',
		logo: '/images/partners/larsen.png',
		href: 'https://www.larsenmotorsports.com/'
	},
	{
		name: 'Integrate Systems, Inc.',
		logo: '/images/partners/integratesystems.png',
		href: 'https://integrate-systems.com/'
	},
	{
		name: 'Space Foundation',
		logo: '/images/partners/space-foundation.png',
		href: 'https://www.spacefoundation.org/'
	},
	{
		name: 'GeneHaas Foundation',
		logo: '/images/partners/gh.png',
		href: 'https://ghaasfoundation.org/'
	},
	{
		name: 'SME Education Foundation',
		logo: '/images/partners/sme.png',
		href: 'https://www.smeef.org/'
	},
	{
		name: 'Axiom Space',
		logo: '/images/partners/axiom.png',
		href: 'https://www.axiomspace.com/'
	},
	{
		name: 'Blazing Trails',
		logo: '/images/partners/blazing-trails.png',
		href: 'https://www.blazingtrails.info/'
	},
	{
		name: 'Association for Career and Technical Education',
		logo: '/images/partners/ACTElogo.png',
		href: 'https://www.acteonline.org/'
	},
	{
		name: 'American Culinary Federation',
		logo: '/images/partners/ACF-logo-2.png',
		href: 'https://www.acfchefs.org/'
	},
	{
		name: 'Raspberry Pi',
		logo: '/images/partners/RPi-Logo-Black-Stacked-Reg-PRINT.png',
		href: 'https://www.raspberrypi.org/'
	},
	{
		name: 'Eastern Florida State College',
		logo: '/images/partners/Eastern-Florida-State-College-Partner-Logo-bw.jpg',
		href: 'https://www.easternflorida.edu/'
	},
	{
		name: 'Sullivan University',
		logo: '/images/partners/SU_logo_trans_BW-1.png',
		href: 'https://www.sullivan.edu/'
	}
].map((x) => ({ ...x, logo: 'https://nasahunch.com' + x.logo }));
