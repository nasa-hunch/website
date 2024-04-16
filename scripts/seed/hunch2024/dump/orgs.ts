interface Marker {
	name: string;
	address: {
		address: string;
		city: string;
		state: string;
		zip: string;
	};
	location: {
		lat: number;
		lng: number;
	};
}

export const nasa: Marker[] = [
	{
		name: 'NASA Johnson Space Center',
		address: { address: '2101 E NASA Pkwy', city: 'Houston', state: 'TX', zip: '$4' },
		location: {
			lat: 29.5593451,
			lng: -95.089998
		}
	},
	{
		name: 'NASA Glenn Research Center',
		address: { address: '21000 Brookpark Rd', city: 'Cleveland', state: 'OH', zip: '$4' },
		location: {
			lat: 41.4161008,
			lng: -81.858251
		}
	},
	{
		name: 'NASA Goddard Space Flight Center',
		address: { address: '8800 Greenbelt Rd', city: 'Greenbelt', state: 'MD', zip: '$4' },
		location: {
			lat: 38.99495,
			lng: -76.852344
		}
	},
	{
		name: 'NASA Langley Research Center',
		address: { address: '1 Nasa Dr', city: 'Hampton', state: 'VA', zip: '$4' },
		location: {
			lat: 37.0862472,
			lng: -76.3808799
		}
	},
	{
		name: 'NASA Marshall Space Flight Center',
		address: { address: 'Martin Rd SW', city: 'Huntsville', state: 'AL', zip: '$4' },
		location: {
			lat: 34.6458874,
			lng: -86.6756394
		}
	},
	{
		name: 'NASA Stennis Space Center',
		address: {
			address: 'Stennis Space Ctr Of Nasa',
			city: 'John C. Stennis Space Center',
			state: 'MS',
			zip: '$4'
		},
		location: {
			lat: 30.3604373,
			lng: -89.6023025
		}
	},
	{
		name: 'Jet Propulsion Laboratory',
		address: { address: '4800 Oak Grove Dr', city: 'Pasadena', state: 'CA', zip: '$4' },
		location: {
			lat: 34.2013081,
			lng: -118.1713944
		}
	},
	{
		name: 'NASA Neil A. Armstrong Flight Research Center',
		address: { address: '4800 Lilly Ave', city: 'Edwards', state: 'CA', zip: '$4' },
		location: {
			lat: 34.9498939,
			lng: -117.8875503
		}
	},
	{
		name: 'NASA Ames Research Center',
		address: { address: 'De France Ave', city: 'Mountain View', state: 'CA', zip: '$4' },
		location: {
			lat: 37.4149371,
			lng: -122.0631175
		}
	}
];

export const schools: Marker[] = [
	{
		name: 'Cypress Woods High School',
		address: { address: '13550 Woods-Spillane Blvd', city: 'Cypress', state: 'TX', zip: '$4' },
		location: {
			lat: 29.9706084,
			lng: -95.68184509999999
		}
	},
	{
		name: 'Warren Tech Central',
		address: { address: '13300 W 2nd Pl', city: 'Lakewood', state: 'CO', zip: '$4' },
		location: {
			lat: 39.715583,
			lng: -105.1505058
		}
	},
	{
		name: 'Lakewood High School',
		address: { address: '9700 W 8th Ave', city: 'Lakewood', state: 'CO', zip: '$4' },
		location: {
			lat: 39.7282615,
			lng: -105.1063444
		}
	},
	{
		name: 'Conroe High School',
		address: { address: '3200 W Davis St', city: 'Conroe', state: 'TX', zip: '$4' },
		location: {
			lat: 30.321586,
			lng: -95.4849174
		}
	},
	{
		name: 'Delphi Community High School',
		address: { address: '301 Armory Rd', city: 'Delphi', state: 'IN', zip: '$4' },
		location: {
			lat: 40.5752792,
			lng: -86.6659011
		}
	},
	{
		name: 'Denver South High School',
		address: { address: '1700 E Louisiana Ave', city: 'Denver', state: 'CO', zip: '$4' },
		location: {
			lat: 39.69216290000001,
			lng: -104.9660181
		}
	},
	{
		name: 'The Manning School',
		address: { address: '13200 W 32nd Ave', city: 'Golden', state: 'CO', zip: '$4' },
		location: {
			lat: 39.7609759,
			lng: -105.1485317
		}
	},
	{
		name: 'Cypress Springs High School',
		address: { address: '7909 Fry Rd', city: 'Cypress', state: 'TX', zip: '$4' },
		location: {
			lat: 29.8922485,
			lng: -95.72003889999999
		}
	},
	{
		name: 'Orleans Niagara Boces',
		address: { address: '4232 Shelby Basin Rd', city: 'Medina', state: 'NY', zip: '$4' },
		location: {
			lat: 43.20342249999999,
			lng: -78.4306106
		}
	},
	{
		name: 'Frontier High School',
		address: { address: '4432 Bayview Rd', city: 'Beach City', state: 'TX', zip: '$4' },
		location: {
			lat: 36.91964654440103,
			lng: -76.133757202224
		}
	},
	{
		name: 'Cypress Lakes High School',
		address: { address: '5750 Greenhouse Rd', city: 'Katy', state: 'TX', zip: '$4' },
		location: {
			lat: 29.8541101,
			lng: -95.7035636
		}
	},
	{
		name: 'Alvin High School',
		address: { address: '802 S Johnson St', city: 'Alvin', state: 'TX', zip: '$4' },
		location: {
			lat: 29.418152,
			lng: -95.2515507
		}
	},
	{
		name: 'Cypress Ridge High School',
		address: { address: '7900 N Eldridge Pkwy', city: 'Houston', state: 'TX', zip: '$4' },
		location: {
			lat: 29.892453,
			lng: -95.6046483
		}
	},
	{
		name: 'Bridgeland High School',
		address: { address: '10707 Mason Rd', city: 'Cypress', state: 'TX', zip: '$4' },
		location: {
			lat: 29.931314,
			lng: -95.75897169999999
		}
	},
	{
		name: 'Clear Springs High School',
		address: { address: '501 Palomino Ln', city: 'League City', state: 'TX', zip: '$4' },
		location: {
			lat: 29.5000863,
			lng: -95.14328049999999
		}
	},
	{
		name: 'Warren Tech North',
		address: { address: '11325 Allendale Dr', city: 'Arvada', state: 'CO', zip: '$4' },
		location: {
			lat: 39.8091518,
			lng: -105.1260819
		}
	},
	{
		name: 'Manvel High School',
		address: { address: '19601 Hwy 6', city: 'Manvel', state: 'TX', zip: '$4' },
		location: {
			lat: 29.47340025593174,
			lng: -95.36532077352642
		}
	},
	{
		name: 'Cherokee Trail High School',
		address: { address: '25901 E Arapahoe Rd', city: 'Aurora', state: 'CO', zip: '$4' },
		location: {
			lat: 39.5921289,
			lng: -104.6864756
		}
	},
	{
		name: 'Wyoming Indian High School',
		address: { address: '636 Blue Sky Hwy', city: 'Ethete', state: 'WY', zip: '$4' },
		location: {
			lat: 43.0141981,
			lng: -108.7726508
		}
	},
	{
		name: 'Oliver Ames High School',
		address: { address: '100 Lothrop St', city: 'North Easton', state: 'MA', zip: '$4' },
		location: {
			lat: 42.0551495,
			lng: -71.1112498
		}
	},
	{
		name: 'Fairport High School',
		address: { address: '1 Dave Paddock Way', city: 'Fairport', state: 'NY', zip: '$4' },
		location: {
			lat: 43.0798664,
			lng: -77.41506249999999
		}
	},
	{
		name: 'Avon High School',
		address: { address: '510 W Avon Rd', city: 'Avon', state: 'CT', zip: '$4' },
		location: {
			lat: 41.7834386,
			lng: -72.8621958
		}
	},
	{
		name: 'Half Hollow Hills High School East',
		address: { address: '50 Vanderbilt Pkwy', city: 'Dix Hills', state: 'NY', zip: '$4' },
		location: {
			lat: 40.80236010000001,
			lng: -73.3591387
		}
	},
	{
		name: 'Bozeman Gallatin High School',
		address: { address: '4455 Annie St', city: 'Bozeman', state: 'MT', zip: '$4' },
		location: {
			lat: 45.6915397,
			lng: -111.1011962
		}
	},
	{
		name: 'Tri-County Regional Vocational Technical High School',
		address: { address: '147 Pond St', city: 'Franklin', state: 'MA', zip: '$4' },
		location: {
			lat: 42.0959974,
			lng: -71.42302459999999
		}
	},
	{
		name: 'Jackson Hole High School',
		address: { address: '1910 High School Rd', city: 'Jackson', state: 'WY', zip: '$4' },
		location: {
			lat: 43.4569169,
			lng: -110.8020899
		}
	},
	{
		name: 'Clear Creek High School',
		address: { address: '2305 E Main St', city: 'League City', state: 'TX', zip: '$4' },
		location: {
			lat: 29.52489889999999,
			lng: -95.0707285
		}
	},
	{
		name: 'Westlake Charter High School',
		address: { address: '4400 E Commerce Way', city: 'Sacramento', state: 'CA', zip: '$4' },
		location: {
			lat: 38.6512052,
			lng: -121.5255688
		}
	},
	{
		name: 'Northeast Early College',
		address: { address: '11200 E 45th Ave', city: 'Denver', state: 'CO', zip: '$4' },
		location: {
			lat: 39.7760487,
			lng: -104.8533121
		}
	},
	{
		name: 'Pacific Ridge School',
		address: { address: '6269 El Fuerte St', city: 'Carlsbad', state: 'CA', zip: '$4' },
		location: {
			lat: 33.1240962,
			lng: -117.2494375
		}
	},
	{
		name: 'Lebanon County Career & Tech',
		address: { address: '833 Metro Dr', city: 'Lebanon', state: 'PA', zip: '$4' },
		location: {
			lat: 40.34121349999999,
			lng: -76.390895
		}
	},
	{
		name: 'Peru High School',
		address: { address: '17 School St', city: 'Peru', state: 'NY', zip: '$4' },
		location: {
			lat: 44.5825954,
			lng: -73.5333708
		}
	},
	{
		name: 'Platt Technical High School',
		address: { address: '600 Orange Ave', city: 'Milford', state: 'CT', zip: '$4' },
		location: {
			lat: 41.2496298,
			lng: -73.0465033
		}
	},
	{
		name: 'Wheeling High School',
		address: { address: '900 S Elmhurst Rd', city: 'Wheeling', state: 'IL', zip: '$4' },
		location: {
			lat: 42.1259362,
			lng: -87.9386557
		}
	},
	{
		name: 'Chatfield Senior High School',
		address: { address: '7227 S Simms St', city: 'Littleton', state: 'CO', zip: '$4' },
		location: {
			lat: 39.5871576,
			lng: -105.1319371
		}
	},
	{
		name: 'de Toledo High School',
		address: { address: '22622 Vanowen St', city: 'West Hills', state: 'CA', zip: '$4' },
		location: {
			lat: 34.19304499999999,
			lng: -118.620091
		}
	},
	{
		name: 'Greater Lawrence Technical School',
		address: { address: '57 River Rd', city: 'Concord', state: 'NH', zip: '$4' },
		location: {
			lat: 42.69272974259219,
			lng: -71.19544911988524
		}
	},
	{
		name: 'Petaluma High School',
		address: { address: '201 Fair St', city: 'Petaluma', state: 'CA', zip: '$4' },
		location: {
			lat: 38.227529,
			lng: -122.6463401
		}
	},
	{
		name: 'Kennett High School',
		address: {
			address: "409 Eagle's Way",
			city: 'North Conway',
			state: 'NH',
			zip: '03860'
		},
		location: {
			lat: 44.0050967,
			lng: -71.09810329999999
		}
	},
	{
		name: 'California Academy of Mathematics and Science School',
		address: { address: '1000 E Victoria St', city: 'Carson', state: 'CA', zip: '$4' },
		location: {
			lat: 33.8610309,
			lng: -118.2547536
		}
	},
	{
		name: 'Passaic County Technical and Vocational Schools',
		address: { address: '45 Reinhardt Road', city: 'Wayne', state: 'NJ', zip: '$4' },
		location: {
			lat: 40.92996184492638,
			lng: -74.20344226655318
		}
	},
	{
		name: 'Miami Valley Career Tech Center',
		address: { address: '6800 Hoke Road', city: 'Clayton', state: 'OH', zip: '$4' },
		location: {
			lat: 39.84468124360479,
			lng: -84.32764836177513
		}
	},
	{
		name: 'Olympia High School',
		address: { address: '1302 North Street SE', city: 'Olympia', state: 'WA', zip: '$4' },
		location: {
			lat: 40.3966357297922,
			lng: -89.2476423886532
		}
	},
	{
		name: 'Columbia Area Career Center',
		address: { address: '4203 S Providence Rd', city: 'Columbia', state: 'MO', zip: '$4' },
		location: {
			lat: 38.903756,
			lng: -92.33718499999999
		}
	},
	{
		name: 'Braham Area High School',
		address: { address: '531 Elmhurst Ave S', city: 'Braham', state: 'MN', zip: '$4' },
		location: {
			lat: 45.7195824,
			lng: -93.17768799999999
		}
	},
	{
		name: 'Saint Thomas Academy',
		address: {
			address: '949 Mendota Heights Road',
			city: 'Mendota Heights',
			state: 'MN',
			zip: '$4'
		},
		location: {
			lat: 44.867371784571596,
			lng: -93.13757739831011
		}
	},
	{
		name: 'Armstrong High School',
		address: { address: '10635 36th Ave N', city: 'Plymouth', state: 'MN', zip: '$4' },
		location: {
			lat: 45.0201783,
			lng: -93.4154047
		}
	},
	{
		name: 'Berks Career and Technology Center West Campus',
		address: { address: '1057 County Rd', city: 'Leesport', state: 'PA', zip: '$4' },
		location: {
			lat: 40.3883309,
			lng: -76.0008314
		}
	},
	{
		name: 'Bucks County Technical High School',
		address: { address: '610 Wistar Rd', city: 'Fairless Hills', state: 'PA', zip: '$4' },
		location: {
			lat: 40.1611267,
			lng: -74.8523646
		}
	},
	{
		name: 'Frontier Central High School',
		address: { address: '4432 Bayview Rd', city: 'Hamburg', state: 'NY', zip: '$4' },
		location: {
			lat: 42.7661759,
			lng: -78.8315774
		}
	},
	{
		name: 'Billings Career Center',
		address: { address: '3723 Central Ave', city: 'Billings', state: 'MT', zip: '$4' },
		location: {
			lat: 45.7705133,
			lng: -108.6099095
		}
	},
	{
		name: 'Minnetonka High School',
		address: { address: '18301 Highway 7', city: 'Minnetonka', state: 'MN', zip: '$4' },
		location: {
			lat: 44.9091775,
			lng: -93.51099789999999
		}
	},
	{
		name: 'Council Rock South High School',
		address: { address: '2002 Rock Way', city: 'Holland', state: 'PA', zip: '$4' },
		location: {
			lat: 40.21316169999999,
			lng: -74.9760675
		}
	},
	{
		name: 'Monroe One - Eastern Monroe Career Center (EMCC)',
		address: {
			address: "41 O'Connor Rd",
			city: 'Fairport',
			state: 'NY',
			zip: '14450'
		},
		location: {
			lat: 43.1056911,
			lng: -77.4599368
		}
	},
	{
		name: 'Eau Gallie High School',
		address: { address: '1400 Commodore Blvd', city: 'Melbourne', state: 'FL', zip: '$4' },
		location: {
			lat: 28.1309297,
			lng: -80.6477342
		}
	},
	{
		name: 'Shakopee High School',
		address: { address: '100 17th Ave W', city: 'Shakopee', state: 'MN', zip: '$4' },
		location: {
			lat: 44.7702922,
			lng: -93.5271772
		}
	},
	{
		name: 'Ben Barber Innovation Academy',
		address: { address: '1120 W Debbie Ln', city: 'Mansfield', state: 'TX', zip: '$4' },
		location: {
			lat: 32.5926013,
			lng: -97.1599136
		}
	},
	{
		name: 'Denbigh High School',
		address: { address: '259 Denbigh Blvd #3313', city: 'Newport News', state: 'VA', zip: '$4' },
		location: {
			lat: 37.1261358,
			lng: -76.5482626
		}
	},
	{
		name: 'Tuscarora High School',
		address: { address: '801 N King St', city: 'Leesburg', state: 'VA', zip: '$4' },
		location: {
			lat: 39.13299019999999,
			lng: -77.558382
		}
	},
	{
		name: 'Spotswood High School',
		address: { address: '368 Blazer Dr', city: 'Penn Laird', state: 'VA', zip: '$4' },
		location: {
			lat: 38.3753811,
			lng: -78.7630769
		}
	},
	{
		name: 'Lake Washington Institute of Technology',
		address: { address: '11605 132nd Ave NE', city: 'Kirkland', state: 'WA', zip: '$4' },
		location: {
			lat: 47.7050333,
			lng: -122.1671528
		}
	},
	{
		name: 'Priceville High School',
		address: { address: '2650 N Bethel Rd', city: 'Decatur', state: 'AL', zip: '$4' },
		location: {
			lat: 34.54954070000001,
			lng: -86.8971354
		}
	},
	{
		name: 'Career Academies of Decatur',
		address: { address: '1229 Westmead St SW', city: 'Decatur', state: 'AL', zip: '$4' },
		location: {
			lat: 34.5805883,
			lng: -87.00585740000001
		}
	},
	{
		name: 'Space Coast Junior/Senior High',
		address: { address: '6150 Banyan St', city: 'Cocoa', state: 'FL', zip: '$4' },
		location: {
			lat: 28.4771815,
			lng: -80.8273669
		}
	},
	{
		name: 'Bridge Builder Academy',
		address: { address: '1221 W Campbell Rd #209', city: 'Richardson', state: 'TX', zip: '$4' },
		location: {
			lat: 32.9776478,
			lng: -96.7615292
		}
	},
	{
		name: 'East Troy High School',
		address: { address: '3128 Graydon Ave', city: 'East Troy', state: 'WI', zip: '$4' },
		location: {
			lat: 42.7880806,
			lng: -88.4176104
		}
	},
	{
		name: 'North Carolina School of Science and Mathematics',
		address: { address: '1219 Broad St', city: 'Durham', state: 'NC', zip: '$4' },
		location: {
			lat: 36.01803080000001,
			lng: -78.9215708
		}
	},
	{
		name: 'THEO Christian Solutions',
		address: { address: '1301 Custer Rd #616', city: 'Plano', state: 'TX', zip: '$4' },
		location: {
			lat: 33.01672719999999,
			lng: -96.73471219999999
		}
	},
	{
		name: 'Polk State College - Clear Springs Advanced Technology Center',
		address: { address: '310 Technology Dr', city: 'Bartow', state: 'FL', zip: '$4' },
		location: {
			lat: 27.914713,
			lng: -81.766115
		}
	},
	{
		name: 'Milton Hershey School',
		address: { address: '1201 Homestead St', city: 'Flower Mound', state: 'TX', zip: '$4' },
		location: {
			lat: 40.2678702,
			lng: -76.689755
		}
	},
	{
		name: 'East Hickman High School',
		address: { address: '7700 TN-7', city: 'Lyles', state: 'TN', zip: '$4' },
		location: {
			lat: 35.923457,
			lng: -87.286733
		}
	},
	{
		name: 'Bridging Communities Regional Career & Technical Center',
		address: {
			address: '7930 New, New Chippin Ln',
			city: 'New Kent',
			state: 'VA',
			zip: '23124'
		},
		location: {
			lat: 37.5158534,
			lng: -76.9799496
		}
	},
	{
		name: 'Stone Bridge High School',
		address: { address: '43100 Hay Rd', city: 'Ashburn', state: 'VA', zip: '$4' },
		location: {
			lat: 39.04896699999999,
			lng: -77.5084825
		}
	},
	{
		name: 'Milby High School',
		address: { address: '1601 Broadway St', city: 'Houston', state: 'TX', zip: '$4' },
		location: {
			lat: 29.7107916,
			lng: -95.27746719999999
		}
	},
	{
		name: 'Pioneer Technology & Arts Academy Fate Campus Rockwall County',
		address: { address: '5920 I-30', city: 'Fate', state: 'TX', zip: '$4' },
		location: {
			lat: 32.9401501,
			lng: -96.3741842
		}
	},
	{
		name: 'Hewitt-Trussville High School',
		address: { address: '6450 Husky Parkway.', city: 'Trussville', state: 'AL', zip: '$4' },
		location: {
			lat: 33.665161,
			lng: -86.5903385
		}
	},
	{
		name: 'Dade Middle School',
		address: { address: '250 Pace Dr', city: 'Trenton', state: 'GA', zip: '$4' },
		location: {
			lat: 34.872279,
			lng: -85.5184977
		}
	},
	{
		name: 'Brewbaker Technology Magnet High School',
		address: { address: '4405 Brewbaker Dr', city: 'Montgomery', state: 'AL', zip: '$4' },
		location: {
			lat: 32.32369539999999,
			lng: -86.2196756
		}
	},
	{
		name: 'Dade County Schools',
		address: { address: '250 Pace Dr', city: 'Trenton', state: 'GA', zip: '$4' },
		location: {
			lat: 34.8724212,
			lng: -85.5183563
		}
	},
	{
		name: 'Legacy Christian Academy Upper School',
		address: { address: 'Fighting Eagles Ln', city: 'Frisco', state: 'TX', zip: '$4' },
		location: {
			lat: 33.1317239,
			lng: -96.84368239999999
		}
	},
	{
		name: 'Pioneer Technology & Arts Academy North Dallas (PTAA)',
		address: { address: '15720 Hillcrest Rd', city: 'Dallas', state: 'TX', zip: '$4' },
		location: {
			lat: 32.9630685,
			lng: -96.78562230000001
		}
	},
	{
		name: 'Franklin County High School',
		address: { address: '833 Bypass Rd', city: 'Winchester', state: 'TN', zip: '$4' },
		location: {
			lat: 35.18890100000001,
			lng: -86.0878046
		}
	},
	{
		name: 'Black River Technical College',
		address: { address: '1410 Highway 304 East', city: 'Pocahontas', state: 'AR', zip: '$4' },
		location: {
			lat: 36.239859,
			lng: -90.951221
		}
	},
	{
		name: 'Black River Technical College, Paragould',
		address: { address: '1 Black River Drive', city: 'Paragould', state: 'AR', zip: '$4' },
		location: {
			lat: 36.0877021,
			lng: -90.4661081
		}
	},
	{
		name: 'Grafton High School',
		address: { address: '403 Grafton Dr', city: 'Yorktown', state: 'VA', zip: '$4' },
		location: {
			lat: 37.1636087,
			lng: -76.4701145
		}
	},
	{
		name: 'Northview High School',
		address: { address: '10625 Parsons Rd', city: 'Johns Creek', state: 'GA', zip: '$4' },
		location: {
			lat: 34.0391126,
			lng: -84.17774039999999
		}
	},
	{
		name: 'Texas Academy of Biomedical Sciences',
		address: { address: '300 Trinity Campus Cir', city: 'Fort Worth', state: 'TX', zip: '$4' },
		location: {
			lat: 32.7571203,
			lng: -97.337848
		}
	},
	{
		name: 'Grand Prairie Collegiate Institute',
		address: { address: '1502 College St', city: 'Grand Prairie', state: 'TX', zip: '$4' },
		location: {
			lat: 32.748184,
			lng: -97.024244
		}
	},
	{
		name: 'H. H. Dow High School',
		address: { address: '3901 N Saginaw Rd', city: 'Midland', state: 'MI', zip: '$4' },
		location: {
			lat: 43.6407382,
			lng: -84.2754104
		}
	},
	{
		name: 'iSchool of Lewisville STEM Campus',
		address: { address: '650 Bennett Ln', city: 'Lewisville', state: 'TX', zip: '$4' },
		location: {
			lat: 33.0258484,
			lng: -96.97489979999999
		}
	},
	{
		name: 'Dade County High School',
		address: { address: '300 Tradition Ln', city: 'Trenton', state: 'GA', zip: '$4' },
		location: {
			lat: 34.85998858710859,
			lng: -85.50694562578765
		}
	},
	{
		name: 'The Academies At Jonesboro High School',
		address: { address: '301 Hurricane Drive', city: 'Jonesboro', state: 'AR', zip: '$4' },
		location: {
			lat: 35.82473,
			lng: -90.7066637
		}
	},
	{
		name: 'Glenelg High School',
		address: { address: '14025 Burntwoods Rd', city: 'Glenelg', state: 'MD', zip: '$4' },
		location: {
			lat: 39.2756491,
			lng: -77.0019487
		}
	},
	{
		name: 'Career Institute North',
		address: { address: '13420 Midway Rd', city: 'Dallas', state: 'TX', zip: '$4' },
		location: {
			lat: 32.9301795,
			lng: -96.8384399
		}
	},
	{
		name: 'The Einstein School',
		address: { address: '4011 W Plano Pkwy #132', city: 'Plano', state: 'TX', zip: '$4' },
		location: {
			lat: 33.0106532,
			lng: -96.7701383
		}
	},
	{
		name: 'Lincoln Technical Institute',
		address: { address: '70 McKee Dr', city: 'Mahwah', state: 'NJ', zip: '$4' },
		location: {
			lat: 41.0840349,
			lng: -74.1481
		}
	},
	{
		name: 'Beau Chêne High School',
		address: { address: '7076 LA-93', city: 'Arnaudville', state: 'LA', zip: '$4' },
		location: {
			lat: 30.4033806,
			lng: -92.0010959
		}
	},
	{
		name: 'Dakota High School',
		address: { address: '21051 21 Mile Rd', city: 'Macomb', state: 'MI', zip: '$4' },
		location: {
			lat: 42.64530440000001,
			lng: -82.9096452
		}
	},
	{
		name: 'The Willow School',
		address: { address: '5624 Freret St', city: 'New Orleans', state: 'LA', zip: '$4' },
		location: {
			lat: 29.9351674,
			lng: -90.11408469999999
		}
	},
	{
		name: 'Jesuit Dallas',
		address: { address: '12345 Inwood Rd', city: 'Dallas', state: 'TX', zip: '$4' },
		location: {
			lat: 32.9178584,
			lng: -96.8190903
		}
	},
	{
		name: 'West Grand High School',
		address: { address: '208 12th St', city: 'Kremmling', state: 'CO', zip: '$4' },
		location: {
			lat: 40.0602099,
			lng: -106.3796157
		}
	},
	{
		name: 'Wekiva High School',
		address: { address: '2501 Hiawassee Rd', city: 'Apopka', state: 'FL', zip: '$4' },
		location: {
			lat: 28.636956,
			lng: -81.4737774
		}
	},
	{
		name: 'Meridian Technology Center',
		address: { address: '1312 S Sangre Rd', city: 'Stillwater', state: 'OK', zip: '$4' },
		location: {
			lat: 36.1068788,
			lng: -97.1070083
		}
	},
	{
		name: 'Oak Ridge High School',
		address: { address: '27330 Oak Ridge School Rd', city: 'Conroe', state: 'TX', zip: '$4' },
		location: {
			lat: 30.1711794,
			lng: -95.4437324
		}
	},
	{
		name: 'James Bowie High School',
		address: { address: '2101 Highbank Dr', city: 'Arlington', state: 'TX', zip: '$4' },
		location: {
			lat: 32.66383219999999,
			lng: -97.0744885
		}
	},
	{
		name: 'RL Turner High School',
		address: { address: '1600 S Josey Ln', city: 'Carrollton', state: 'TX', zip: '$4' },
		location: {
			lat: 32.9484841,
			lng: -96.8912985
		}
	},
	{
		name: 'Grand Oaks High School',
		address: { address: '4800 Riley Fuzzel Rd', city: 'Spring', state: 'TX', zip: '$4' },
		location: {
			lat: 30.12376330000001,
			lng: -95.36454479999999
		}
	},
	{
		name: 'Windsor High School',
		address: { address: '50 Sage Park Rd', city: 'Windsor', state: 'CT', zip: '$4' },
		location: {
			lat: 41.8443326,
			lng: -72.6551022
		}
	},
	{
		name: 'Albert P. Brewer High School',
		address: { address: '59 Eva Rd', city: 'Somerville', state: 'AL', zip: '$4' },
		location: {
			lat: 34.4133327,
			lng: -86.7053107
		}
	},
	{
		name: 'Grand Rapids Community College',
		address: { address: '143 Bostwick Ave NE', city: 'Grand Rapids', state: 'MI', zip: '$4' },
		location: {
			lat: 42.96689680000001,
			lng: -85.6667224
		}
	},
	{
		name: 'Independence High School',
		address: { address: '23115 Learning Cir', city: 'Ashburn', state: 'VA', zip: '$4' },
		location: {
			lat: 38.97647659999999,
			lng: -77.55346340000001
		}
	},
	{
		name: 'Woodside High School',
		address: { address: '13450 Woodside Ln', city: 'Newport News', state: 'VA', zip: '$4' },
		location: {
			lat: 37.1733127,
			lng: -76.5247974
		}
	},
	{
		name: 'Maxwell High School of Technology',
		address: { address: '990 McElvaney Ln NW', city: 'Lawrenceville', state: 'GA', zip: '$4' },
		location: {
			lat: 33.9543025,
			lng: -84.0596005
		}
	},
	{
		name: 'Grissom High School',
		address: { address: '1001 Haysland Rd SW', city: 'Huntsville', state: 'AL', zip: '$4' },
		location: {
			lat: 34.6426691,
			lng: -86.576543
		}
	},
	{
		name: 'Plano ISD Academy High School',
		address: { address: '1701 Alma Dr', city: 'Plano', state: 'TX', zip: '$4' },
		location: {
			lat: 33.0224482,
			lng: -96.7189718
		}
	},
	{
		name: 'Cullman Area Technology Academy',
		address: { address: '17640 US-31', city: 'Cullman', state: 'AL', zip: '$4' },
		location: {
			lat: 34.2227683,
			lng: -86.85771489999999
		}
	},
	{
		name: 'Academy of Science & Technology',
		address: { address: '3701 College Park Dr', city: 'The Woodlands', state: 'TX', zip: '$4' },
		location: {
			lat: 30.20453409999999,
			lng: -95.4717661
		}
	},
	{
		name: 'Dade Elementary School',
		address: { address: '306 Wolverine Dr', city: 'Trenton', state: 'GA', zip: '$4' },
		location: {
			lat: 34.8729328,
			lng: -85.512348
		}
	},
	{
		name: 'Old Colony Regional Vocational Technical High School',
		address: { address: '476 North Ave', city: 'Rochester', state: 'MA', zip: '$4' },
		location: {
			lat: 41.7858981,
			lng: -70.8714335
		}
	},
	{
		name: 'Gloucester High School',
		address: { address: '6680 Short Ln', city: 'Gloucester', state: 'VA', zip: '$4' },
		location: {
			lat: 37.3818445,
			lng: -76.52515869999999
		}
	},
	{
		name: 'North Side High School',
		address: { address: '2211 Mckinley Ave', city: 'Fort Worth', state: 'TX', zip: '$4' },
		location: {
			lat: 32.7853469,
			lng: -97.3698898
		}
	},
	{
		name: 'Harley School',
		address: { address: '1981 Clover St', city: 'Rochester', state: 'NY', zip: '$4' },
		location: {
			lat: 43.1204261,
			lng: -77.5497065
		}
	},
	{
		name: 'Magnet Cove High School',
		address: { address: '472 Magnet School Rd', city: 'Malvern', state: 'AR', zip: '$4' },
		location: {
			lat: 34.4452518,
			lng: -92.83573059999999
		}
	},
	{
		name: 'Nathan Hale-Ray High School',
		address: { address: '15 School Rd', city: 'Moodus', state: 'CT', zip: '$4' },
		location: {
			lat: 41.4933377,
			lng: -72.4435615
		}
	},
	{
		name: 'The Woodlands High School',
		address: { address: '6101 Research Forest Dr', city: 'The Woodlands', state: 'TX', zip: '$4' },
		location: {
			lat: 30.1943386,
			lng: -95.50411720000001
		}
	},
	{
		name: 'Miami Valley Career Technology Center',
		address: { address: '6800 Hoke Rd', city: 'Clayton', state: 'OH', zip: '$4' },
		location: {
			lat: 39.84465709999999,
			lng: -84.3276462
		}
	},
	{
		name: 'Kent State University at Salem',
		address: { address: '2491 OH-45', city: 'Salem', state: 'OH', zip: '$4' },
		location: {
			lat: 40.8640232,
			lng: -80.8355998
		}
	},
	{
		name: 'Ranger High Tech Academy',
		address: { address: '5580 Lear Nagle Rd', city: 'North Ridgeville', state: 'OH', zip: '$4' },
		location: {
			lat: 41.3877697,
			lng: -82.0004089
		}
	},
	{
		name: 'Makua Lani Christian Academy High School Campus',
		address: { address: '74-4966 Kealakaa St', city: 'Kailua-Kona', state: 'HI', zip: '$4' },
		location: {
			lat: 19.67715159999999,
			lng: -155.9879902
		}
	},
	{
		name: 'Albertville High School',
		address: { address: '402 E McCord Ave', city: 'Albertville', state: 'AL', zip: '$4' },
		location: {
			lat: 34.260831,
			lng: -86.204869
		}
	},
	{
		name: 'Wallace State Community College',
		address: { address: '801 Main Street Northwest', city: 'Hanceville', state: 'AL', zip: '$4' },
		location: {
			lat: 34.0709642,
			lng: -86.78198119999999
		}
	},
	{
		name: 'New Kent High School',
		address: { address: '7365 Egypt Rd', city: 'New Kent', state: 'VA', zip: '$4' },
		location: {
			lat: 37.5101372,
			lng: -76.98113099999999
		}
	},
	{
		name: 'Warhill High School',
		address: { address: '4615 Opportunity Way', city: 'Williamsburg', state: 'VA', zip: '$4' },
		location: {
			lat: 37.3333282,
			lng: -76.7563323
		}
	},
	{
		name: 'Clear Falls High School',
		address: { address: '4380 Village Way', city: 'League City', state: 'TX', zip: '$4' },
		location: {
			lat: 29.5092391,
			lng: -95.0245707
		}
	},
	{
		name: 'Jasper High School',
		address: { address: '1501 Viking Dr', city: 'Jasper', state: 'AL', zip: '$4' },
		location: {
			lat: 33.8342639,
			lng: -87.2579288
		}
	},
	{
		name: 'Tri County Career Center',
		address: { address: '15676 OH-691', city: 'Nelsonville', state: 'OH', zip: '$4' },
		location: {
			lat: 39.4329081,
			lng: -82.21010369999999
		}
	},
	{
		name: 'Brazoswood High School',
		address: { address: '302 Brazoswood Dr', city: 'Clute', state: 'TX', zip: '$4' },
		location: {
			lat: 29.026378,
			lng: -95.41531599999999
		}
	},
	{
		name: 'St. John Valley Technology Center',
		address: { address: '431 US-1', city: 'Frenchville', state: 'ME', zip: '$4' },
		location: {
			lat: 47.2777135,
			lng: -68.4241895
		}
	},
	{
		name: 'SMSD Center for Academic Achievement',
		address: { address: '8200 W 71st St', city: 'Overland Park', state: 'KS', zip: '$4' },
		location: {
			lat: 39.00149069999999,
			lng: -94.6802101
		}
	},
	{
		name: 'Allen ISD STEAM Center',
		address: { address: '1680 Ridgeview Dr', city: 'Allen', state: 'TX', zip: '$4' },
		location: {
			lat: 33.1272814,
			lng: -96.7160093
		}
	},
	{
		name: 'Platteville High School',
		address: { address: '710 E Madison St', city: 'Platteville', state: 'WI', zip: '$4' },
		location: {
			lat: 42.7421619,
			lng: -90.46362069999999
		}
	},
	{
		name: 'Northeast Arkansas Career & Technical Center',
		address: { address: '1727 S Main St', city: 'Jonesboro', state: 'AR', zip: '$4' },
		location: {
			lat: 35.824529,
			lng: -90.70805999999999
		}
	},
	{
		name: "St. Mark's School Of Texas",
		address: { address: '10600 Preston Rd', city: 'Dallas', state: 'TX', zip: '$4' },
		location: {
			lat: 32.8907333,
			lng: -96.80129579999999
		}
	},
	{
		name: 'Palm Bay High School',
		address: { address: '101 Pirate Ln', city: 'Melbourne', state: 'FL', zip: '$4' },
		location: {
			lat: 28.0483465,
			lng: -80.6177922
		}
	},
	{
		name: 'Summit School',
		address: { address: '4515 E Muirwood Dr', city: 'Phoenix', state: 'AZ', zip: '$4' },
		location: {
			lat: 33.302104,
			lng: -111.98602
		}
	},
	{
		name: 'Meade County High School',
		address: { address: '938 Old State Rd', city: 'Brandenburg', state: 'KY', zip: '$4' },
		location: {
			lat: 37.99390309999999,
			lng: -86.1730453
		}
	},
	{
		name: 'Charles Henderson High School',
		address: { address: '150 S George Wallace Dr', city: 'Troy', state: 'AL', zip: '$4' },
		location: {
			lat: 31.8028673,
			lng: -85.9471008
		}
	},
	{
		name: 'Mt Pleasant High School',
		address: { address: '600 Greenwood St', city: 'Mt Pleasant', state: 'TN', zip: '$4' },
		location: {
			lat: 35.5446992,
			lng: -87.20919219999999
		}
	},
	{
		name: 'Ranger High -Tech Academy',
		address: { address: '5580 Lear Nagle Rd', city: 'North Ridgeville', state: 'OH', zip: '$4' },
		location: {
			lat: 41.4086287,
			lng: -81.99030429999999
		}
	},
	{
		name: 'Rock Hill High School',
		address: { address: '2415 Co Rd 26', city: 'Ironton', state: 'OH', zip: '$4' },
		location: {
			lat: 38.6135479,
			lng: -82.65863310000002
		}
	},
	{
		name: 'Kettering Fairmont High School',
		address: { address: '3301 Shroyer Rd', city: 'Kettering', state: 'OH', zip: '$4' },
		location: {
			lat: 39.69883919999999,
			lng: -84.16445139999999
		}
	},
	{
		name: 'Visitation School',
		address: { address: '2455 Visitation Dr', city: 'Mendota Heights', state: 'MN', zip: '$4' },
		location: {
			lat: 44.868855,
			lng: -93.133275
		}
	},
	{
		name: 'RCTC/Ypsilanti Community High School',
		address: { address: '2095 Packard St', city: 'Ypsilanti', state: 'MI', zip: '$4' },
		location: {
			lat: 42.244376,
			lng: -83.6463978
		}
	},
	{
		name: 'Warren County Career Center',
		address: { address: '3525 OH-48', city: 'Lebanon', state: 'OH', zip: '$4' },
		location: {
			lat: 39.4886533,
			lng: -84.2031138
		}
	},
	{
		name: 'J.F. Drake State Community & Technical College',
		address: { address: '3421 Meridian St N', city: 'Huntsville', state: 'AL', zip: '$4' },
		location: {
			lat: 34.7717663,
			lng: -86.573315
		}
	},
	{
		name: 'Wadena-Deer Creek Middle-High School',
		address: { address: '600 Colfax Ave SW', city: 'Wadena', state: 'MN', zip: '$4' },
		location: {
			lat: 46.4428838,
			lng: -95.1471741
		}
	},
	{
		name: 'Rio Vista High School',
		address: { address: '200 Capps St', city: 'Rio Vista', state: 'TX', zip: '$4' },
		location: {
			lat: 32.2279051,
			lng: -97.37676119999999
		}
	},
	{
		name: 'Bridgerland Technical College - Logan Campus',
		address: { address: '1301 N 600 W', city: 'Logan', state: 'UT', zip: '$4' },
		location: {
			lat: 41.75592140000001,
			lng: -111.8507103
		}
	},
	{
		name: 'Limestone County Career Technical Center',
		address: { address: '505 E Sanderfer Rd', city: 'Athens', state: 'AL', zip: '$4' },
		location: {
			lat: 34.77676529999999,
			lng: -86.9624405
		}
	},
	{
		name: 'Legacy Christian Academy',
		address: { address: '5000 Academy Dr', city: 'Frisco', state: 'TX', zip: '$4' },
		location: {
			lat: 33.1303224,
			lng: -96.8452227
		}
	},
	{
		name: 'Delta Schoolcraft Intermediate School District',
		address: { address: '2525 3rd Ave S', city: 'Escanaba', state: 'MI', zip: '$4' },
		location: {
			lat: 45.7420275,
			lng: -87.0840472
		}
	},
	{
		name: 'East Central Schools Administrative Office',
		address: { address: '5500 Hurley Wade Rd', city: 'Moss Point', state: 'MS', zip: '$4' },
		location: {
			lat: 30.6556377,
			lng: -88.5155147
		}
	},
	{
		name: 'County College of Morris',
		address: { address: '214 Center Grove Rd', city: 'Randolph', state: 'NJ', zip: '$4' },
		location: {
			lat: 40.85817369999999,
			lng: -74.5814491
		}
	},
	{
		name: 'Ukiah High School',
		address: { address: '1000 Low Gap Rd', city: 'Ukiah', state: 'CA', zip: '$4' },
		location: {
			lat: 39.1643602,
			lng: -123.2240345
		}
	},
	{
		name: 'North Ridgeville High School',
		address: { address: '34600 Bainbridge Rd', city: 'North Ridgeville', state: 'OH', zip: '$4' },
		location: {
			lat: 41.3882363,
			lng: -82.001655
		}
	},
	{
		name: 'Clover Park Technical College (CPTC)',
		address: { address: '4500 Steilacoom Blvd SW', city: 'Lakewood', state: 'WA', zip: '$4' },
		location: {
			lat: 47.1756602,
			lng: -122.4978426
		}
	},
	{
		name: 'Sanger High School',
		address: { address: '1045 N Bethel Ave', city: 'Sanger', state: 'CA', zip: '$4' },
		location: {
			lat: 36.699691,
			lng: -119.5773794
		}
	},
	{
		name: 'G-Star School of the Arts',
		address: { address: '2030 S Congress Ave', city: 'Palm Springs', state: 'FL', zip: '$4' },
		location: {
			lat: 26.6466522,
			lng: -80.085083
		}
	},
	{
		name: 'Cypress Creek High School',
		address: { address: '9815 Grant Rd', city: 'Houston', state: 'TX', zip: '$4' },
		location: {
			lat: 29.9655264,
			lng: -95.5655086
		}
	},
	{
		name: 'Bozeman High School',
		address: { address: '205 N 11th Ave', city: 'Bozeman', state: 'MT', zip: '$4' },
		location: {
			lat: 45.67993979999999,
			lng: -111.0536852
		}
	},
	{
		name: 'Newport News Public Schools',
		address: { address: '12465 Warwick Blvd', city: 'Newport News', state: 'VA', zip: '$4' },
		location: {
			lat: 37.0733907,
			lng: -76.4942377
		}
	},
	{
		name: 'Ebr Career And Technical Education Center',
		address: { address: '2101 Lobdell Blvd', city: 'Baton Rouge', state: 'LA', zip: '$4' },
		location: {
			lat: 30.4674589,
			lng: -91.1224462
		}
	},
	{
		name: 'Ulster BOCES Career & Technical Center',
		address: { address: '319 Broadway', city: 'Port Ewen', state: 'NY', zip: '$4' },
		location: {
			lat: 41.8968685,
			lng: -73.97333119999999
		}
	},
	{
		name: 'Orange Technical College - South Campus',
		address: { address: '2900 W Oak Ridge Rd', city: 'Orlando', state: 'FL', zip: '$4' },
		location: {
			lat: 28.4703315,
			lng: -81.4155356
		}
	},
	{
		name: 'Somerset County Vocational & Technical High School',
		address: { address: '14 Vogt Dr', city: 'Bridgewater Township', state: 'NJ', zip: '$4' },
		location: {
			lat: 40.5882638,
			lng: -74.60450449999999
		}
	},
	{
		name: 'Middleton High School',
		address: { address: '2100 Bristol St', city: 'Middleton', state: 'WI', zip: '$4' },
		location: {
			lat: 43.0999588,
			lng: -89.5070272
		}
	},
	{
		name: 'Rimrock Jr-Sr High School',
		address: { address: '39678 ID-78', city: 'Bruneau', state: 'ID', zip: '$4' },
		location: {
			lat: 42.9334373,
			lng: -115.9894714
		}
	},
	{
		name: 'Clarendon High School',
		address: { address: '420 South Allen St', city: 'Clarendon', state: 'TX', zip: '$4' },
		location: {
			lat: 34.9393155,
			lng: -100.8977204
		}
	},
	{
		name: 'Rancho High School',
		address: { address: '1900 Searles Ave', city: 'Las Vegas', state: 'NV', zip: '$4' },
		location: {
			lat: 36.1856109,
			lng: -115.1221973
		}
	},
	{
		name: 'Clarendon SCHOOL',
		address: { address: '416 Allen St', city: 'Clarendon', state: 'TX', zip: '$4' },
		location: {
			lat: 34.9393621,
			lng: -100.8976127
		}
	},
	{
		name: 'Ogemaw Heights High School',
		address: { address: '960 M-33', city: 'West Branch', state: 'MI', zip: '$4' },
		location: {
			lat: 44.3066767,
			lng: -84.1273192
		}
	},
	{
		name: 'Waite High School',
		address: { address: '301 Morrison Dr', city: 'Toledo', state: 'OH', zip: '$4' },
		location: {
			lat: 41.6490234,
			lng: -83.51775339999999
		}
	},
	{
		name: 'Clearfield County Career & Technology Center',
		address: { address: '1620 River Rd', city: 'Clearfield', state: 'PA', zip: '$4' },
		location: {
			lat: 41.03079,
			lng: -78.418622
		}
	},
	{
		name: 'Tonasket High School',
		address: {
			address: '35 HS, State Rte 20',
			city: 'Tonasket',
			state: 'WA',
			zip: '98855'
		},
		location: {
			lat: 48.70162149999999,
			lng: -119.4344694
		}
	},
	{
		name: 'Aviation Academy',
		address: { address: '259 Denbigh Blvd #3313', city: 'Newport News', state: 'VA', zip: '$4' },
		location: {
			lat: 37.1261058,
			lng: -76.5490038
		}
	},
	{
		name: 'Landstown High School',
		address: { address: '2001 Concert Dr', city: 'Virginia Beach', state: 'VA', zip: '$4' },
		location: {
			lat: 36.7796828,
			lng: -76.10064469999999
		}
	},
	{
		name: 'Milton Hershey School',
		address: { address: '1201 Homestead Ln', city: 'Hershey', state: 'PA', zip: '$4' },
		location: {
			lat: 40.27445830000001,
			lng: -76.6316501
		}
	},
	{
		name: 'Murray County High School',
		address: { address: '1001 Green Rd', city: 'Chatsworth', state: 'GA', zip: '$4' },
		location: {
			lat: 34.7779607,
			lng: -84.7863911
		}
	},
	{
		name: 'Porter Early College High School',
		address: { address: '3500 International Blvd', city: 'Brownsville', state: 'TX', zip: '$4' },
		location: {
			lat: 25.9127896,
			lng: -97.4723071
		}
	},
	{
		name: 'Assabet Valley Regional Technical High School',
		address: { address: '215 Fitchburg St', city: 'Marlborough', state: 'MA', zip: '$4' },
		location: {
			lat: 42.3681519,
			lng: -71.5664434
		}
	},
	{
		name: 'Hawthorne High School',
		address: { address: '4859 W El Segundo Blvd', city: 'Hawthorne', state: 'CA', zip: '$4' },
		location: {
			lat: 33.9173288,
			lng: -118.3631462
		}
	},
	{
		name: 'Upper Bucks County Technical School',
		address: { address: '3115 Ridge Rd', city: 'Perkasie', state: 'PA', zip: '$4' },
		location: {
			lat: 40.430459,
			lng: -75.2343947
		}
	},
	{
		name: 'Jefferson County School District',
		address: { address: '1829 Denver W Dr', city: 'Golden', state: 'CO', zip: '$4' },
		location: {
			lat: 39.5219299,
			lng: -105.2239449
		}
	}
];
