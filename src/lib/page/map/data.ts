enum MarkerStatus {
	NASA,
	School,
	Special
}

interface Marker {
	name: string;
	status: MarkerStatus;
	address: string;
	location: {
		lat: number;
		lng: number;
	};
}

export const data: Marker[] = [
	{
		name: 'NASA Johnson Space Center',
		status: MarkerStatus.NASA,
		address: '2101 E NASA Pkwy, Houston, TX 77058, USA',
		location: {
			lat: 29.5593451,
			lng: -95.089998
		}
	},
	{
		name: 'NASA Glenn Research Center',
		status: MarkerStatus.NASA,
		address: '21000 Brookpark Rd, Cleveland, OH 44135, USA',
		location: {
			lat: 41.4161008,
			lng: -81.858251
		}
	},
	{
		name: 'NASA Goddard Space Flight Center',
		status: MarkerStatus.NASA,
		address: '8800 Greenbelt Rd, Greenbelt, MD 20771, USA',
		location: {
			lat: 38.99495,
			lng: -76.852344
		}
	},
	{
		name: 'NASA Langley Research Center',
		status: MarkerStatus.NASA,
		address: '1 Nasa Dr, Hampton, VA 23666, USA',
		location: {
			lat: 37.0862472,
			lng: -76.3808799
		}
	},
	{
		name: 'NASA Marshall Space Flight Center',
		status: MarkerStatus.NASA,
		address: 'Martin Rd SW, Huntsville, AL 35808, USA',
		location: {
			lat: 34.6458874,
			lng: -86.6756394
		}
	},
	{
		name: 'NASA Stennis Space Center',
		status: MarkerStatus.NASA,
		address: 'Stennis Space Ctr Of Nasa, John C. Stennis Space Center, MS 39529, USA',
		location: {
			lat: 30.3604373,
			lng: -89.6023025
		}
	},
	{
		name: 'Jet Propulsion Laboratory',
		status: MarkerStatus.NASA,
		address: '4800 Oak Grove Dr, Pasadena, CA 91109, USA',
		location: {
			lat: 34.2013081,
			lng: -118.1713944
		}
	},
	{
		name: 'NASA Neil A. Armstrong Flight Research Center',
		status: MarkerStatus.NASA,
		address: '4800 Lilly Ave, Edwards, CA 93523, USA',
		location: {
			lat: 34.9498939,
			lng: -117.8875503
		}
	},
	{
		name: 'NASA Ames Research Center',
		status: MarkerStatus.NASA,
		address: 'De France Ave, Mountain View, CA 94043, USA',
		location: {
			lat: 37.4149371,
			lng: -122.0631175
		}
	},
	{
		name: 'Cypress Woods High School',
		status: MarkerStatus.School,
		address: '13550 Woods-Spillane Blvd, Cypress, TX 77429, USA',
		location: {
			lat: 29.9706084,
			lng: -95.68184509999999
		}
	},
	{
		name: 'Warren Tech Central',
		status: MarkerStatus.School,
		address: '13300 W 2nd Pl, Lakewood, CO 80228, USA',
		location: {
			lat: 39.715583,
			lng: -105.1505058
		}
	},
	{
		name: 'Lakewood High School',
		status: MarkerStatus.School,
		address: '9700 W 8th Ave, Lakewood, CO 80215, USA',
		location: {
			lat: 39.7282615,
			lng: -105.1063444
		}
	},
	{
		name: 'Conroe High School',
		status: MarkerStatus.School,
		address: '3200 W Davis St, Conroe, TX 77304, USA',
		location: {
			lat: 30.321586,
			lng: -95.4849174
		}
	},
	{
		name: 'Delphi Community High School',
		status: MarkerStatus.School,
		address: '301 Armory Rd, Delphi, IN 46923, USA',
		location: {
			lat: 40.5752792,
			lng: -86.6659011
		}
	},
	{
		name: 'Denver South High School',
		status: MarkerStatus.School,
		address: '1700 E Louisiana Ave, Denver, CO 80210, USA',
		location: {
			lat: 39.69216290000001,
			lng: -104.9660181
		}
	},
	{
		name: 'The Manning School',
		status: MarkerStatus.School,
		address: '13200 W 32nd Ave, Golden, CO 80401, USA',
		location: {
			lat: 39.7609759,
			lng: -105.1485317
		}
	},
	{
		name: 'Cypress Springs High School',
		status: MarkerStatus.School,
		address: '7909 Fry Rd, Cypress, TX 77433, USA',
		location: {
			lat: 29.8922485,
			lng: -95.72003889999999
		}
	},
	{
		name: 'Orleans Niagara Boces',
		status: MarkerStatus.School,
		address: '4232 Shelby Basin Rd, Medina, NY 14103, USA',
		location: {
			lat: 43.20342249999999,
			lng: -78.4306106
		}
	},
	{
		name: 'Frontier High School',
		status: MarkerStatus.School,
		address: '4432 Bayview Rd',
		location: {
			lat: 0,
			lng: 0
		}
	},
	{
		name: 'Cypress Lakes High School',
		status: MarkerStatus.School,
		address: '5750 Greenhouse Rd, Katy, TX 77449, USA',
		location: {
			lat: 29.8541101,
			lng: -95.7035636
		}
	},
	{
		name: 'Alvin High School',
		status: MarkerStatus.School,
		address: '802 S Johnson St, Alvin, TX 77511, USA',
		location: {
			lat: 29.418152,
			lng: -95.2515507
		}
	},
	{
		name: 'Cypress Ridge High School',
		status: MarkerStatus.School,
		address: '7900 N Eldridge Pkwy, Houston, TX 77041, USA',
		location: {
			lat: 29.892453,
			lng: -95.6046483
		}
	},
	{
		name: 'Bridgeland High School',
		status: MarkerStatus.School,
		address: '10707 Mason Rd, Cypress, TX 77433, USA',
		location: {
			lat: 29.931314,
			lng: -95.75897169999999
		}
	},
	{
		name: 'Clear Springs High School',
		status: MarkerStatus.School,
		address: '501 Palomino Ln, League City, TX 77573, USA',
		location: {
			lat: 29.5000863,
			lng: -95.14328049999999
		}
	},
	{
		name: 'Warren Tech North',
		status: MarkerStatus.School,
		address: '11325 Allendale Dr, Arvada, CO 80004, USA',
		location: {
			lat: 39.8091518,
			lng: -105.1260819
		}
	},
	{
		name: 'Manvel',
		status: MarkerStatus.School,
		address: '19601 Hwy 6, Manvel, TX 77578',
		location: {
			lat: 0,
			lng: 0
		}
	},
	{
		name: 'Manvel High School',
		status: MarkerStatus.School,
		address: '19601 Hwy 6, Manvel, TX 77578, USA',
		location: {
			lat: 29.4731027,
			lng: -95.36486359999999
		}
	},
	{
		name: 'Cherokee Trail High School',
		status: MarkerStatus.School,
		address: '25901 E Arapahoe Rd, Aurora, CO 80016, USA',
		location: {
			lat: 39.5921289,
			lng: -104.6864756
		}
	},
	{
		name: 'Wyoming Indian High School',
		status: MarkerStatus.School,
		address: '636 Blue Sky Hwy, Ethete, WY 82520',
		location: {
			lat: 43.0141981,
			lng: -108.7726508
		}
	},
	{
		name: 'Oliver Ames High School',
		status: MarkerStatus.School,
		address: '100 Lothrop St, North Easton, MA 02356, USA',
		location: {
			lat: 42.0551495,
			lng: -71.1112498
		}
	},
	{
		name: 'Fairport High School',
		status: MarkerStatus.School,
		address: '1 Dave Paddock Way, Fairport, NY 14450, USA',
		location: {
			lat: 43.0798664,
			lng: -77.41506249999999
		}
	},
	{
		name: 'Avon High School',
		status: MarkerStatus.School,
		address: '510 W Avon Rd, Avon, CT 06001, USA',
		location: {
			lat: 41.7834386,
			lng: -72.8621958
		}
	},
	{
		name: 'Half Hollow Hills High School East',
		status: MarkerStatus.School,
		address: '50 Vanderbilt Pkwy, Dix Hills, NY 11746, USA',
		location: {
			lat: 40.80236010000001,
			lng: -73.3591387
		}
	},
	{
		name: 'Bozeman Gallatin High School',
		status: MarkerStatus.School,
		address: '4455 Annie St, Bozeman, MT 59718, USA',
		location: {
			lat: 45.6915397,
			lng: -111.1011962
		}
	},
	{
		name: 'Tri-County Regional Vocational Technical High School',
		status: MarkerStatus.School,
		address: '147 Pond St, Franklin, MA 02038, USA',
		location: {
			lat: 42.0959974,
			lng: -71.42302459999999
		}
	},
	{
		name: 'Jackson Hole High School',
		status: MarkerStatus.School,
		address: '1910 High School Rd, Jackson, WY 83001, USA',
		location: {
			lat: 43.4569169,
			lng: -110.8020899
		}
	},
	{
		name: 'Clear Creek High School',
		status: MarkerStatus.School,
		address: '2305 E Main St, League City, TX 77573, USA',
		location: {
			lat: 29.52489889999999,
			lng: -95.0707285
		}
	},
	{
		name: 'Westlake Charter High School',
		status: MarkerStatus.School,
		address: '4400 E Commerce Way, Sacramento, CA 95834, USA',
		location: {
			lat: 38.6512052,
			lng: -121.5255688
		}
	},
	{
		name: 'Northeast Early College',
		status: MarkerStatus.School,
		address: '11200 E 45th Ave, Denver, CO 80239, USA',
		location: {
			lat: 39.7760487,
			lng: -104.8533121
		}
	},
	{
		name: 'Pacific Ridge School',
		status: MarkerStatus.School,
		address: '6269 El Fuerte St, Carlsbad, CA 92009, USA',
		location: {
			lat: 33.1240962,
			lng: -117.2494375
		}
	},
	{
		name: 'Lebanon County Career &amp; Tech',
		status: MarkerStatus.School,
		address: '833 Metro Dr, Lebanon, PA 17042, USA',
		location: {
			lat: 40.34121349999999,
			lng: -76.390895
		}
	},
	{
		name: 'Peru Central School',
		status: MarkerStatus.School,
		address: '17 School st.',
		location: {
			lat: 0,
			lng: 0
		}
	},
	{
		name: 'Peru High School',
		status: MarkerStatus.School,
		address: '17 School St, Peru, NY 12972, USA',
		location: {
			lat: 44.5825954,
			lng: -73.5333708
		}
	},
	{
		name: 'Platt Technical High School',
		status: MarkerStatus.School,
		address: '600 Orange Ave, Milford, CT 06461, USA',
		location: {
			lat: 41.2496298,
			lng: -73.0465033
		}
	},
	{
		name: 'Wheeling High School',
		status: MarkerStatus.School,
		address: '900 S Elmhurst Rd, Wheeling, IL 60090',
		location: {
			lat: 42.1259362,
			lng: -87.9386557
		}
	},
	{
		name: 'Chatfield Senior High School',
		status: MarkerStatus.School,
		address: '7227 S Simms St, Littleton, CO 80127, USA',
		location: {
			lat: 39.5871576,
			lng: -105.1319371
		}
	},
	{
		name: 'de Toledo High School',
		status: MarkerStatus.School,
		address: '22622 Vanowen St, West Hills, CA 91307, USA',
		location: {
			lat: 34.19304499999999,
			lng: -118.620091
		}
	},
	{
		name: 'Greater Lawrence Technical School',
		status: MarkerStatus.School,
		address: '57 River Rd',
		location: {
			lat: 0,
			lng: 0
		}
	},
	{
		name: 'Petaluma High School',
		status: MarkerStatus.School,
		address: '201 Fair St, Petaluma, CA 94952, USA',
		location: {
			lat: 38.227529,
			lng: -122.6463401
		}
	},
	{
		name: 'Kennett High School',
		status: MarkerStatus.School,
		address: '409 Eagle&#x27;s Way, North Conway, NH 03860, USA',
		location: {
			lat: 44.0050967,
			lng: -71.09810329999999
		}
	},
	{
		name: 'California Academy of Mathematics and Science School',
		status: MarkerStatus.School,
		address: '1000 E Victoria St, Carson, CA 90747, USA',
		location: {
			lat: 33.8610309,
			lng: -118.2547536
		}
	},
	{
		name: 'Passaic County Technical Institute',
		status: MarkerStatus.Special,
		address: '45 Reinhardt Rd, Wayne, NJ 07470, USA',
		location: {
			lat: 40.9306347,
			lng: -74.2022769
		}
	},
	{
		name: 'Passaic County Technical and Vocational Schools',
		status: MarkerStatus.School,
		address: '45 Reinhardt Road,',
		location: {
			lat: 0,
			lng: 0
		}
	},
	{
		name: 'Miami Valley Career Tech Center',
		status: MarkerStatus.School,
		address: '6800 Hoke Road',
		location: {
			lat: 0,
			lng: 0
		}
	},
	{
		name: 'Olympia High School',
		status: MarkerStatus.School,
		address: '1302 North Street SE, Olympia, WA 98501',
		location: {
			lat: 0,
			lng: 0
		}
	},
	{
		name: 'Columbia Area Career Center',
		status: MarkerStatus.School,
		address: '4203 S Providence Rd, Columbia, MO 65203, USA',
		location: {
			lat: 38.903756,
			lng: -92.33718499999999
		}
	},
	{
		name: 'Braham Area High School',
		status: MarkerStatus.School,
		address: '531 Elmhurst Ave S, Braham, MN 55006, USA',
		location: {
			lat: 45.7195824,
			lng: -93.17768799999999
		}
	},
	{
		name: 'Saint Thomas Academy',
		status: MarkerStatus.School,
		address: '949 Mendota Heights Road',
		location: {
			lat: 0,
			lng: 0
		}
	},
	{
		name: 'Armstrong High School',
		status: MarkerStatus.School,
		address: '10635 36th Ave N, Plymouth, MN 55441, USA',
		location: {
			lat: 45.0201783,
			lng: -93.4154047
		}
	},
	{
		name: 'Berks Career and Technology Center West Campus',
		status: MarkerStatus.School,
		address: '1057 County Rd, Leesport, PA 19533, USA',
		location: {
			lat: 40.3883309,
			lng: -76.0008314
		}
	},
	{
		name: 'Bucks County Technical High School',
		status: MarkerStatus.School,
		address: '610 Wistar Rd, Fairless Hills, PA 19030, USA',
		location: {
			lat: 40.1611267,
			lng: -74.8523646
		}
	},
	{
		name: 'Frontier Central High School',
		status: MarkerStatus.School,
		address: '4432 Bayview Rd, Hamburg, NY 14075, USA',
		location: {
			lat: 42.7661759,
			lng: -78.8315774
		}
	},
	{
		name: 'Billings Career Center',
		status: MarkerStatus.School,
		address: '3723 Central Ave, Billings, MT 59102, USA',
		location: {
			lat: 45.7705133,
			lng: -108.6099095
		}
	},
	{
		name: 'Minnetonka High School',
		status: MarkerStatus.School,
		address: '18301 Highway 7, Minnetonka, MN 55345, USA',
		location: {
			lat: 44.9091775,
			lng: -93.51099789999999
		}
	},
	{
		name: 'Council Rock South High School',
		status: MarkerStatus.School,
		address: '2002 Rock Way, Holland, PA 18966, USA',
		location: {
			lat: 40.21316169999999,
			lng: -74.9760675
		}
	},
	{
		name: 'Monroe One - Eastern Monroe Career Center (EMCC)',
		status: MarkerStatus.School,
		address: '41 O&#x27;Connor Rd, Fairport, NY 14450, USA',
		location: {
			lat: 43.1056911,
			lng: -77.4599368
		}
	},
	{
		name: 'Eau Gallie High School',
		status: MarkerStatus.School,
		address: '1400 Commodore Blvd, Melbourne, FL 32935, USA',
		location: {
			lat: 28.1309297,
			lng: -80.6477342
		}
	},
	{
		name: 'Shakopee High School',
		status: MarkerStatus.School,
		address: '100 17th Ave W, Shakopee, MN 55379, USA',
		location: {
			lat: 44.7702922,
			lng: -93.5271772
		}
	},
	{
		name: 'Ben Barber Innovation Academy',
		status: MarkerStatus.School,
		address: '1120 W Debbie Ln, Mansfield, TX 76063, USA',
		location: {
			lat: 32.5926013,
			lng: -97.1599136
		}
	},
	{
		name: 'Denbigh High School',
		status: MarkerStatus.School,
		address: '259 Denbigh Blvd #3313, Newport News, VA 23608, USA',
		location: {
			lat: 37.1261358,
			lng: -76.5482626
		}
	},
	{
		name: 'Tuscarora High School',
		status: MarkerStatus.School,
		address: '801 N King St, Leesburg, VA 20176, USA',
		location: {
			lat: 39.13299019999999,
			lng: -77.558382
		}
	},
	{
		name: 'Spotswood High School',
		status: MarkerStatus.School,
		address: '368 Blazer Dr, Penn Laird, VA 22846, USA',
		location: {
			lat: 38.3753811,
			lng: -78.7630769
		}
	},
	{
		name: 'Lake Washington Institute of Technology',
		status: MarkerStatus.School,
		address: '11605 132nd Ave NE, Kirkland, WA 98034, USA',
		location: {
			lat: 47.7050333,
			lng: -122.1671528
		}
	},
	{
		name: 'Priceville High School',
		status: MarkerStatus.School,
		address: '2650 N Bethel Rd, Decatur, AL 35603, USA',
		location: {
			lat: 34.54954070000001,
			lng: -86.8971354
		}
	},
	{
		name: 'Career Academies of Decatur',
		status: MarkerStatus.School,
		address: '1229 Westmead St SW, Decatur, AL 35601, USA',
		location: {
			lat: 34.5805883,
			lng: -87.00585740000001
		}
	},
	{
		name: 'Space Coast Junior&#x2F;Senior High',
		status: MarkerStatus.School,
		address: '6150 Banyan St, Cocoa, FL 32927, USA',
		location: {
			lat: 28.4771815,
			lng: -80.8273669
		}
	},
	{
		name: 'Bridge Builder Academy',
		status: MarkerStatus.School,
		address: '1221 W Campbell Rd #209, Richardson, TX 75080, USA',
		location: {
			lat: 32.9776478,
			lng: -96.7615292
		}
	},
	{
		name: 'East Troy High School',
		status: MarkerStatus.School,
		address: '3128 Graydon Ave, East Troy, WI 53120, USA',
		location: {
			lat: 42.7880806,
			lng: -88.4176104
		}
	},
	{
		name: 'North Carolina School of Science and Mathematics',
		status: MarkerStatus.School,
		address: '1219 Broad St, Durham, NC 27705, USA',
		location: {
			lat: 36.01803080000001,
			lng: -78.9215708
		}
	},
	{
		name: 'THEO Christian Solutions',
		status: MarkerStatus.School,
		address: '1301 Custer Rd #616, Plano, TX 75075, USA',
		location: {
			lat: 33.01672719999999,
			lng: -96.73471219999999
		}
	},
	{
		name: 'Polk State College - Clear Springs Advanced Technology Center',
		status: MarkerStatus.School,
		address: '310 Technology Dr, Bartow, FL 33830, USA',
		location: {
			lat: 27.914713,
			lng: -81.766115
		}
	},
	{
		name: 'Milton Hershey School',
		status: MarkerStatus.School,
		address: '1201 HOMESTEAD LN',
		location: {
			lat: 40.2678702,
			lng: -76.689755
		}
	},
	{
		name: 'East Hickman High School',
		status: MarkerStatus.School,
		address: '7700 TN-7, Lyles, TN 37098, USA',
		location: {
			lat: 35.923457,
			lng: -87.286733
		}
	},
	{
		name: 'Bridging Communities Regional Career &amp; Technical Center',
		status: MarkerStatus.School,
		address: '7930 New, New Chipping Ln, New Kent, VA 23124, USA',
		location: {
			lat: 37.5158534,
			lng: -76.9799496
		}
	},
	{
		name: 'Stone Bridge High School',
		status: MarkerStatus.School,
		address: '43100 Hay Rd, Ashburn, VA 20147, USA',
		location: {
			lat: 39.04896699999999,
			lng: -77.5084825
		}
	},
	{
		name: 'Milby High School',
		status: MarkerStatus.School,
		address: '1601 Broadway St, Houston, TX 77012, USA',
		location: {
			lat: 29.7107916,
			lng: -95.27746719999999
		}
	},
	{
		name: 'Pioneer Technology &amp; Arts Academy Fate Campus Rockwall County',
		status: MarkerStatus.School,
		address: '5920 I-30, Fate, TX 75132, USA',
		location: {
			lat: 32.9401501,
			lng: -96.3741842
		}
	},
	{
		name: 'Hewitt-Trussville High School',
		status: MarkerStatus.School,
		address: '6450 Husky Parkway., Trussville, AL 35173, USA',
		location: {
			lat: 33.665161,
			lng: -86.5903385
		}
	},
	{
		name: 'Dade Middle School',
		status: MarkerStatus.School,
		address: '250 Pace Dr, Trenton, GA 30752, USA',
		location: {
			lat: 34.872279,
			lng: -85.5184977
		}
	},
	{
		name: 'Brewbaker Technology Magnet High School',
		status: MarkerStatus.School,
		address: '4405 Brewbaker Dr, Montgomery, AL 36116, USA',
		location: {
			lat: 32.32369539999999,
			lng: -86.2196756
		}
	},
	{
		name: 'Dade County Schools',
		status: MarkerStatus.School,
		address: '250 Pace Dr, Trenton, GA 30752, USA',
		location: {
			lat: 34.8724212,
			lng: -85.5183563
		}
	},
	{
		name: 'Legacy Christian Academy Upper School',
		status: MarkerStatus.School,
		address: 'Fighting Eagles Ln, Frisco, TX 75034, USA',
		location: {
			lat: 33.1317239,
			lng: -96.84368239999999
		}
	},
	{
		name: 'Pioneer Technology &amp; Arts Academy North Dallas (PTAA)',
		status: MarkerStatus.School,
		address: '15720 Hillcrest Rd, Dallas, TX 75248, USA',
		location: {
			lat: 32.9630685,
			lng: -96.78562230000001
		}
	},
	{
		name: 'Franklin County High School',
		status: MarkerStatus.School,
		address: '833 Bypass Rd, Winchester, TN 37398, USA',
		location: {
			lat: 35.18890100000001,
			lng: -86.0878046
		}
	},
	{
		name: 'Black River Technical College',
		status: MarkerStatus.School,
		address: '1410 Highway 304 East, Pocahontas, AR 72455, USA',
		location: {
			lat: 36.239859,
			lng: -90.951221
		}
	},
	{
		name: 'Black River Technical College, Paragould',
		status: MarkerStatus.School,
		address: '1 Black River Drive, Paragould, AR 72450, USA',
		location: {
			lat: 36.0877021,
			lng: -90.4661081
		}
	},
	{
		name: 'Grafton High School',
		status: MarkerStatus.School,
		address: '403 Grafton Dr, Yorktown, VA 23692, USA',
		location: {
			lat: 37.1636087,
			lng: -76.4701145
		}
	},
	{
		name: 'Northview High School',
		status: MarkerStatus.School,
		address: '10625 Parsons Rd, Johns Creek, GA 30097, USA',
		location: {
			lat: 34.0391126,
			lng: -84.17774039999999
		}
	},
	{
		name: 'Texas Academy of Biomedical Sciences',
		status: MarkerStatus.School,
		address: '300 Trinity Campus Cir, Fort Worth, TX 76102, USA',
		location: {
			lat: 32.7571203,
			lng: -97.337848
		}
	},
	{
		name: 'Grand Prairie Collegiate Institute',
		status: MarkerStatus.School,
		address: '75051, 1502 College St, Grand Prairie, TX 75050, USA',
		location: {
			lat: 32.748184,
			lng: -97.024244
		}
	},
	{
		name: 'H. H. Dow High School',
		status: MarkerStatus.School,
		address: '3901 N Saginaw Rd, Midland, MI 48640, USA',
		location: {
			lat: 43.6407382,
			lng: -84.2754104
		}
	},
	{
		name: 'iSchool of Lewisville STEM Campus',
		status: MarkerStatus.School,
		address: '650 Bennett Ln, Lewisville, TX 75057, USA',
		location: {
			lat: 33.0258484,
			lng: -96.97489979999999
		}
	},
	{
		name: 'Dade County High School',
		status: MarkerStatus.Special,
		address: '300 Tradition Ln, Trenton, GA 30752, USA',
		location: {
			lat: 34.85995339999999,
			lng: -85.5069188
		}
	},
	{
		name: 'The Academies At Jonesboro High School',
		status: MarkerStatus.School,
		address: '301 Hurricane Drive, Jonesboro, AR 72401, USA',
		location: {
			lat: 35.82473,
			lng: -90.7066637
		}
	},
	{
		name: 'Glenelg High School',
		status: MarkerStatus.School,
		address: '14025 Burntwoods Rd, Glenelg, MD 21737, USA',
		location: {
			lat: 39.2756491,
			lng: -77.0019487
		}
	},
	{
		name: 'Career Institute North',
		status: MarkerStatus.School,
		address: '13420 Midway Rd, Dallas, TX 75244, USA',
		location: {
			lat: 32.9301795,
			lng: -96.8384399
		}
	},
	{
		name: 'The Einstein School',
		status: MarkerStatus.School,
		address: '4011 W Plano Pkwy #132, Plano, TX 75093, USA',
		location: {
			lat: 33.0106532,
			lng: -96.7701383
		}
	},
	{
		name: 'Lincoln Technical Institute',
		status: MarkerStatus.School,
		address: '70 McKee Dr, Mahwah, NJ 07430, USA',
		location: {
			lat: 41.0840349,
			lng: -74.1481
		}
	},
	{
		name: 'Beau Chêne High School',
		status: MarkerStatus.School,
		address: '7076 LA-93, Arnaudville, LA 70512, USA',
		location: {
			lat: 30.4033806,
			lng: -92.0010959
		}
	},
	{
		name: 'Dakota High School',
		status: MarkerStatus.School,
		address: '21051 21 Mile Rd, Macomb, MI 48044, USA',
		location: {
			lat: 42.64530440000001,
			lng: -82.9096452
		}
	},
	{
		name: 'The Willow School',
		status: MarkerStatus.School,
		address: '5624 Freret St, New Orleans, LA 70115, USA',
		location: {
			lat: 29.9351674,
			lng: -90.11408469999999
		}
	},
	{
		name: 'Jesuit Dallas',
		status: MarkerStatus.School,
		address: '12345 Inwood Rd, Dallas, TX 75244, USA',
		location: {
			lat: 32.9178584,
			lng: -96.8190903
		}
	},
	{
		name: 'West Grand High School',
		status: MarkerStatus.School,
		address: '208 12th St, Kremmling, CO 80459, USA',
		location: {
			lat: 40.0602099,
			lng: -106.3796157
		}
	},
	{
		name: 'Wekiva High School',
		status: MarkerStatus.School,
		address: '2501 Hiawassee Rd, Apopka, FL 32703, USA',
		location: {
			lat: 28.636956,
			lng: -81.4737774
		}
	},
	{
		name: 'Meridian Technology Center',
		status: MarkerStatus.School,
		address: '1312 S Sangre Rd, Stillwater, OK 74074, USA',
		location: {
			lat: 36.1068788,
			lng: -97.1070083
		}
	},
	{
		name: 'Oak Ridge High School',
		status: MarkerStatus.School,
		address: '27330 Oak Ridge School Rd, Conroe, TX 77385, USA',
		location: {
			lat: 30.1711794,
			lng: -95.4437324
		}
	},
	{
		name: 'James Bowie High School',
		status: MarkerStatus.School,
		address: '2101 Highbank Dr, Arlington, TX 76018, USA',
		location: {
			lat: 32.66383219999999,
			lng: -97.0744885
		}
	},
	{
		name: 'RL Turner High School',
		status: MarkerStatus.School,
		address: '1600 S Josey Ln, Carrollton, TX 75006, USA',
		location: {
			lat: 32.9484841,
			lng: -96.8912985
		}
	},
	{
		name: 'Grand Oaks High School',
		status: MarkerStatus.School,
		address: '4800 Riley Fuzzel Rd, Spring, TX 77386, USA',
		location: {
			lat: 30.12376330000001,
			lng: -95.36454479999999
		}
	},
	{
		name: 'Windsor High School',
		status: MarkerStatus.School,
		address: '50 Sage Park Rd, Windsor, CT 06095, USA',
		location: {
			lat: 41.8443326,
			lng: -72.6551022
		}
	},
	{
		name: 'Albert P. Brewer High School',
		status: MarkerStatus.School,
		address: '59 Eva Rd, Somerville, AL 35670, USA',
		location: {
			lat: 34.4133327,
			lng: -86.7053107
		}
	},
	{
		name: 'Grand Rapids Community College',
		status: MarkerStatus.School,
		address: '143 Bostwick Ave NE, Grand Rapids, MI 49503, USA',
		location: {
			lat: 42.96689680000001,
			lng: -85.6667224
		}
	},
	{
		name: 'Independence High School',
		status: MarkerStatus.School,
		address: '23115 Learning Cir, Ashburn, VA 20148, USA',
		location: {
			lat: 38.97647659999999,
			lng: -77.55346340000001
		}
	},
	{
		name: 'Woodside High School',
		status: MarkerStatus.School,
		address: '13450 Woodside Ln, Newport News, VA 23608, USA',
		location: {
			lat: 37.1733127,
			lng: -76.5247974
		}
	},
	{
		name: 'Maxwell High School of Technology',
		status: MarkerStatus.School,
		address: '990 McElvaney Ln NW, Lawrenceville, GA 30044, USA',
		location: {
			lat: 33.9543025,
			lng: -84.0596005
		}
	},
	{
		name: 'Grissom High School',
		status: MarkerStatus.School,
		address: '1001 Haysland Rd SW, Huntsville, AL 35802, USA',
		location: {
			lat: 34.6426691,
			lng: -86.576543
		}
	},
	{
		name: 'Plano ISD Academy High School',
		status: MarkerStatus.School,
		address: '1701 Alma Dr, Plano, TX 75075, USA',
		location: {
			lat: 33.0224482,
			lng: -96.7189718
		}
	},
	{
		name: 'Cullman Area Technology Academy',
		status: MarkerStatus.School,
		address: '17640 US-31, Cullman, AL 35058, USA',
		location: {
			lat: 34.2227683,
			lng: -86.85771489999999
		}
	},
	{
		name: 'Academy of Science &amp; Technology',
		status: MarkerStatus.School,
		address: '3701 College Park Dr, The Woodlands, TX 77384, USA',
		location: {
			lat: 30.20453409999999,
			lng: -95.4717661
		}
	},
	{
		name: 'Dade Elementary School',
		status: MarkerStatus.School,
		address: '306 Wolverine Dr, Trenton, GA 30752, USA',
		location: {
			lat: 34.8729328,
			lng: -85.512348
		}
	},
	{
		name: 'Old Colony Regional Vocational Technical High School',
		status: MarkerStatus.School,
		address: '476 North Ave, Rochester, MA 02770, USA',
		location: {
			lat: 41.7858981,
			lng: -70.8714335
		}
	},
	{
		name: 'Gloucester High School',
		status: MarkerStatus.School,
		address: '6680 Short Ln, Gloucester, VA 23061, USA',
		location: {
			lat: 37.3818445,
			lng: -76.52515869999999
		}
	},
	{
		name: 'North Side High School',
		status: MarkerStatus.School,
		address: '2211 Mckinley Ave, Fort Worth, TX 76164, USA',
		location: {
			lat: 32.7853469,
			lng: -97.3698898
		}
	},
	{
		name: 'Harley School',
		status: MarkerStatus.School,
		address: '1981 Clover St, Rochester, NY 14618, USA',
		location: {
			lat: 43.1204261,
			lng: -77.5497065
		}
	},
	{
		name: 'Magnet Cove High School',
		status: MarkerStatus.School,
		address: '472 Magnet School Rd, Malvern, AR 72104, USA',
		location: {
			lat: 34.4452518,
			lng: -92.83573059999999
		}
	},
	{
		name: 'Nathan Hale-Ray High School',
		status: MarkerStatus.School,
		address: '15 School Rd, Moodus, CT 06469, USA',
		location: {
			lat: 41.4933377,
			lng: -72.4435615
		}
	},
	{
		name: 'The Woodlands High School',
		status: MarkerStatus.School,
		address: '6101 Research Forest Dr, The Woodlands, TX 77381, USA',
		location: {
			lat: 30.1943386,
			lng: -95.50411720000001
		}
	},
	{
		name: 'Miami Valley Career Technology Center',
		status: MarkerStatus.School,
		address: '6800 Hoke Rd, Clayton, OH 45315, USA',
		location: {
			lat: 39.84465709999999,
			lng: -84.3276462
		}
	},
	{
		name: 'Kent State University at Salem',
		status: MarkerStatus.School,
		address: '2491 OH-45, Salem, OH 44460, USA',
		location: {
			lat: 40.8640232,
			lng: -80.8355998
		}
	},
	{
		name: 'Ranger High Tech Academy',
		status: MarkerStatus.School,
		address: '5580 Lear Nagle Rd',
		location: {
			lat: 41.3877697,
			lng: -82.0004089
		}
	},
	{
		name: 'Makua Lani Christian Academy High School Campus',
		status: MarkerStatus.School,
		address: '74-4966 Kealakaa St, Kailua-Kona, HI 96740, USA',
		location: {
			lat: 19.67715159999999,
			lng: -155.9879902
		}
	},
	{
		name: 'Albertville High School',
		status: MarkerStatus.School,
		address: '402 E McCord Ave, Albertville, AL 35950, USA',
		location: {
			lat: 34.260831,
			lng: -86.204869
		}
	},
	{
		name: 'Wallace State Community College',
		status: MarkerStatus.School,
		address: '801 Main Street Northwest, Hanceville, AL 35077, USA',
		location: {
			lat: 34.0709642,
			lng: -86.78198119999999
		}
	},
	{
		name: 'New Kent High School',
		status: MarkerStatus.School,
		address: '7365 Egypt Rd, New Kent, VA 23124, USA',
		location: {
			lat: 37.5101372,
			lng: -76.98113099999999
		}
	},
	{
		name: 'Warhill High School',
		status: MarkerStatus.School,
		address: '4615 Opportunity Way, Williamsburg, VA 23188, USA',
		location: {
			lat: 37.3333282,
			lng: -76.7563323
		}
	},
	{
		name: 'Clear Falls High School',
		status: MarkerStatus.School,
		address: '4380 Village Way, League City, TX 77573, USA',
		location: {
			lat: 29.5092391,
			lng: -95.0245707
		}
	},
	{
		name: 'Jasper High School',
		status: MarkerStatus.School,
		address: '1501 Viking Dr, Jasper, AL 35501, USA',
		location: {
			lat: 33.8342639,
			lng: -87.2579288
		}
	},
	{
		name: 'Tri County Career Center',
		status: MarkerStatus.School,
		address: '15676 OH-691, Nelsonville, OH 45764, USA',
		location: {
			lat: 39.4329081,
			lng: -82.21010369999999
		}
	},
	{
		name: 'Brazoswood High School',
		status: MarkerStatus.School,
		address: '302 Brazoswood Dr, Clute, TX 77531, USA',
		location: {
			lat: 29.026378,
			lng: -95.41531599999999
		}
	},
	{
		name: 'St. John Valley Technology Center',
		status: MarkerStatus.School,
		address: '431 US-1, Frenchville, ME 04745, USA',
		location: {
			lat: 47.2777135,
			lng: -68.4241895
		}
	},
	{
		name: 'SMSD Center for Academic Achievement',
		status: MarkerStatus.School,
		address: '8200 W 71st St, Overland Park, KS 66204, USA',
		location: {
			lat: 39.00149069999999,
			lng: -94.6802101
		}
	},
	{
		name: 'Allen ISD STEAM Center',
		status: MarkerStatus.School,
		address: '1680 Ridgeview Dr, Allen, TX 75013, USA',
		location: {
			lat: 33.1272814,
			lng: -96.7160093
		}
	},
	{
		name: 'Platteville High School',
		status: MarkerStatus.School,
		address: '710 E Madison St, Platteville, WI 53818, USA',
		location: {
			lat: 42.7421619,
			lng: -90.46362069999999
		}
	},
	{
		name: 'Northeast Arkansas Career &amp; Technical Center',
		status: MarkerStatus.School,
		address: '1727 S Main St, Jonesboro, AR 72401, USA',
		location: {
			lat: 35.824529,
			lng: -90.70805999999999
		}
	},
	{
		name: 'St. Mark&#x27;s School Of Texas',
		status: MarkerStatus.School,
		address: '10600 Preston Rd, Dallas, TX 75230, USA',
		location: {
			lat: 32.8907333,
			lng: -96.80129579999999
		}
	},
	{
		name: 'Palm Bay High School',
		status: MarkerStatus.School,
		address: '101 Pirate Ln, Melbourne, FL 32901, USA',
		location: {
			lat: 28.0483465,
			lng: -80.6177922
		}
	},
	{
		name: 'Summit School',
		status: MarkerStatus.School,
		address: '4515 E Muirwood Dr, Phoenix, AZ 85048, USA',
		location: {
			lat: 33.302104,
			lng: -111.98602
		}
	},
	{
		name: 'Meade County High School',
		status: MarkerStatus.School,
		address: '938 Old State Rd, Brandenburg, KY 40108, USA',
		location: {
			lat: 37.99390309999999,
			lng: -86.1730453
		}
	},
	{
		name: 'Charles Henderson High School',
		status: MarkerStatus.School,
		address: '150 S George Wallace Dr, Troy, AL 36081, USA',
		location: {
			lat: 31.8028673,
			lng: -85.9471008
		}
	},
	{
		name: 'Mt Pleasant High School',
		status: MarkerStatus.School,
		address: '600 Greenwood St, Mt Pleasant, TN 38474, USA',
		location: {
			lat: 35.5446992,
			lng: -87.20919219999999
		}
	},
	{
		name: 'Ranger High -Tech Academy',
		status: MarkerStatus.School,
		address: '5580 Lear Nagle Rd, North Ridgeville, OH 44039, USA',
		location: {
			lat: 41.4086287,
			lng: -81.99030429999999
		}
	},
	{
		name: 'Rock Hill High School',
		status: MarkerStatus.School,
		address: '2415 Co Rd 26, Ironton, OH 45638, USA',
		location: {
			lat: 38.6135479,
			lng: -82.65863310000002
		}
	},
	{
		name: 'Kettering Fairmont High School',
		status: MarkerStatus.School,
		address: '3301 Shroyer Rd, Kettering, OH 45429, USA',
		location: {
			lat: 39.69883919999999,
			lng: -84.16445139999999
		}
	},
	{
		name: 'Visitation School',
		status: MarkerStatus.School,
		address: '2455 Visitation Dr, Mendota Heights, MN 55120, USA',
		location: {
			lat: 44.868855,
			lng: -93.133275
		}
	},
	{
		name: 'RCTC&#x2F;Ypsilanti Community High School',
		status: MarkerStatus.School,
		address: '2095 Packard St, Ypsilanti, MI 48197, USA',
		location: {
			lat: 42.244376,
			lng: -83.6463978
		}
	},
	{
		name: 'Warren County Career Center',
		status: MarkerStatus.School,
		address: '3525 OH-48, Lebanon, OH 45036, USA',
		location: {
			lat: 39.4886533,
			lng: -84.2031138
		}
	},
	{
		name: 'J.F. Drake State Community &amp; Technical College',
		status: MarkerStatus.School,
		address: '3421 Meridian St N, Huntsville, AL 35811, USA',
		location: {
			lat: 34.7717663,
			lng: -86.573315
		}
	},
	{
		name: 'Wadena-Deer Creek Middle-High School',
		status: MarkerStatus.School,
		address: '600 Colfax Ave SW, Wadena, MN 56482, USA',
		location: {
			lat: 46.4428838,
			lng: -95.1471741
		}
	},
	{
		name: 'Rio Vista High School',
		status: MarkerStatus.School,
		address: '200 Capps St, Rio Vista, TX 76093, USA',
		location: {
			lat: 32.2279051,
			lng: -97.37676119999999
		}
	},
	{
		name: 'Bridgerland Technical College - Logan Campus',
		status: MarkerStatus.School,
		address: '1301 N 600 W, Logan, UT 84321, USA',
		location: {
			lat: 41.75592140000001,
			lng: -111.8507103
		}
	},
	{
		name: 'Limestone County Career Technical Center',
		status: MarkerStatus.School,
		address: '505 E Sanderfer Rd, Athens, AL 35611, USA',
		location: {
			lat: 34.77676529999999,
			lng: -86.9624405
		}
	},
	{
		name: 'Legacy Christian Academy',
		status: MarkerStatus.School,
		address: '5000 Academy Dr, Frisco, TX 75034, USA',
		location: {
			lat: 33.1303224,
			lng: -96.8452227
		}
	},
	{
		name: 'Delta Schoolcraft Intermediate School District',
		status: MarkerStatus.School,
		address: '2525 3rd Ave S, Escanaba, MI 49829, USA',
		location: {
			lat: 45.7420275,
			lng: -87.0840472
		}
	},
	{
		name: 'East Central Schools Administrative Office',
		status: MarkerStatus.School,
		address: '5500 Hurley Wade Rd, Moss Point, MS 39562, USA',
		location: {
			lat: 30.6556377,
			lng: -88.5155147
		}
	},
	{
		name: 'County College of Morris',
		status: MarkerStatus.School,
		address: '214 Center Grove Rd, Randolph, NJ 07869, USA',
		location: {
			lat: 40.85817369999999,
			lng: -74.5814491
		}
	},
	{
		name: 'Ukiah High School',
		status: MarkerStatus.School,
		address: '1000 Low Gap Rd, Ukiah, CA 95482, USA',
		location: {
			lat: 39.1643602,
			lng: -123.2240345
		}
	},
	{
		name: 'North Ridgeville High School',
		status: MarkerStatus.School,
		address: '34600 Bainbridge Rd, North Ridgeville, OH 44039, USA',
		location: {
			lat: 41.3882363,
			lng: -82.001655
		}
	},
	{
		name: 'Clover Park Technical College (CPTC)',
		status: MarkerStatus.School,
		address: '4500 Steilacoom Blvd SW, Lakewood, WA 98499, USA',
		location: {
			lat: 47.1756602,
			lng: -122.4978426
		}
	},
	{
		name: 'Sanger High School',
		status: MarkerStatus.School,
		address: '1045 N Bethel Ave, Sanger, CA 93657, USA',
		location: {
			lat: 36.699691,
			lng: -119.5773794
		}
	},
	{
		name: 'G-Star School of the Arts',
		status: MarkerStatus.School,
		address: '2030 S Congress Ave, Palm Springs, FL 33406, USA',
		location: {
			lat: 26.6466522,
			lng: -80.085083
		}
	},
	{
		name: 'Cypress Creek High School',
		status: MarkerStatus.School,
		address: '9815 Grant Rd, Houston, TX 77070, USA',
		location: {
			lat: 29.9655264,
			lng: -95.5655086
		}
	},
	{
		name: 'Bozeman High School',
		status: MarkerStatus.School,
		address: '205 N 11th Ave, Bozeman, MT 59715, USA',
		location: {
			lat: 45.67993979999999,
			lng: -111.0536852
		}
	},
	{
		name: 'Newport News Public Schools',
		status: MarkerStatus.School,
		address: '12465 Warwick Blvd, Newport News, VA 23606, USA',
		location: {
			lat: 37.0733907,
			lng: -76.4942377
		}
	},
	{
		name: 'Ebr Career And Technical Education Center',
		status: MarkerStatus.School,
		address: '2101 Lobdell Blvd, Baton Rouge, LA 70806, USA',
		location: {
			lat: 30.4674589,
			lng: -91.1224462
		}
	},
	{
		name: 'Ulster BOCES Career &amp; Technical Center',
		status: MarkerStatus.School,
		address: '319 Broadway, Port Ewen, NY 12466, USA',
		location: {
			lat: 41.8968685,
			lng: -73.97333119999999
		}
	},
	{
		name: 'Orange Technical College - South Campus',
		status: MarkerStatus.School,
		address: '2900 W Oak Ridge Rd, Orlando, FL 32809, USA',
		location: {
			lat: 28.4703315,
			lng: -81.4155356
		}
	},
	{
		name: 'Somerset County Vocational &amp; Technical High School',
		status: MarkerStatus.School,
		address: '14 Vogt Dr, Bridgewater Township, NJ 08807, USA',
		location: {
			lat: 40.5882638,
			lng: -74.60450449999999
		}
	},
	{
		name: 'Minnetonka High School',
		status: MarkerStatus.School,
		address: '18301 MN-7, Minnetonka, MN 55345, USA',
		location: {
			lat: 44.9091775,
			lng: -93.51099789999999
		}
	},
	{
		name: 'Middleton High School',
		status: MarkerStatus.School,
		address: '2100 Bristol St, Middleton, WI 53562, USA',
		location: {
			lat: 43.0999588,
			lng: -89.5070272
		}
	},
	{
		name: 'Rimrock Jr-Sr High School',
		status: MarkerStatus.School,
		address: '39678 ID-78, Bruneau, ID 83604, USA',
		location: {
			lat: 42.9334373,
			lng: -115.9894714
		}
	},
	{
		name: 'Clarendon High School',
		status: MarkerStatus.School,
		address: '420 South Allen St, Clarendon, TX 79226, USA',
		location: {
			lat: 34.9393155,
			lng: -100.8977204
		}
	},
	{
		name: 'Rancho High School',
		status: MarkerStatus.School,
		address: '1900 Searles Ave, Las Vegas, NV 89101, USA',
		location: {
			lat: 36.1856109,
			lng: -115.1221973
		}
	},
	{
		name: 'Clarendon SCHOOL',
		status: MarkerStatus.School,
		address: '416 Allen St, Clarendon, TX 79226, USA',
		location: {
			lat: 34.9393621,
			lng: -100.8976127
		}
	},
	{
		name: 'Ogemaw Heights High School',
		status: MarkerStatus.School,
		address: '960 M-33, West Branch, MI 48661, USA',
		location: {
			lat: 44.3066767,
			lng: -84.1273192
		}
	},
	{
		name: 'Waite High School',
		status: MarkerStatus.School,
		address: '301 Morrison Dr, Toledo, OH 43605, USA',
		location: {
			lat: 41.6490234,
			lng: -83.51775339999999
		}
	},
	{
		name: 'Clearfield County Career &amp; Technology Center',
		status: MarkerStatus.School,
		address: '1620 River Rd, Clearfield, PA 16830, USA',
		location: {
			lat: 41.03079,
			lng: -78.418622
		}
	},
	{
		name: 'Tonasket High School',
		status: MarkerStatus.School,
		address: '35 HS, State Rte 20, Tonasket, WA 98855, USA',
		location: {
			lat: 48.70162149999999,
			lng: -119.4344694
		}
	},
	{
		name: 'Aviation Academy',
		status: MarkerStatus.School,
		address: '259 Denbigh Blvd #3313, Newport News, VA 23608, USA',
		location: {
			lat: 37.1261058,
			lng: -76.5490038
		}
	},
	{
		name: 'Landstown High School',
		status: MarkerStatus.School,
		address: '2001 Concert Dr, Virginia Beach, VA 23456, USA',
		location: {
			lat: 36.7796828,
			lng: -76.10064469999999
		}
	},
	{
		name: 'Milton Hershey School',
		status: MarkerStatus.School,
		address: '1201 Homestead Ln, Hershey, PA 17033, USA',
		location: {
			lat: 40.27445830000001,
			lng: -76.6316501
		}
	},
	{
		name: 'Murray County High School',
		status: MarkerStatus.School,
		address: '1001 Green Rd, Chatsworth, GA 30705, USA',
		location: {
			lat: 34.7779607,
			lng: -84.7863911
		}
	},
	{
		name: 'Porter Early College High School',
		status: MarkerStatus.School,
		address: '3500 International Blvd, Brownsville, TX 78521, USA',
		location: {
			lat: 25.9127896,
			lng: -97.4723071
		}
	},
	{
		name: 'NASA Kennedy Space Center',
		status: MarkerStatus.NASA,
		address: 'Florida 32899',
		location: {
			lat: 28.583437,
			lng: -80.653392
		}
	},
	{
		name: 'Assabet Valley Regional Technical High School',
		status: MarkerStatus.School,
		address: '215 Fitchburg St, Marlborough, MA 01752, USA',
		location: {
			lat: 42.3681519,
			lng: -71.5664434
		}
	},
	{
		name: 'Hawthorne High School',
		status: MarkerStatus.School,
		address: '4859 W El Segundo Blvd, Hawthorne, CA 90250, USA',
		location: {
			lat: 33.9173288,
			lng: -118.3631462
		}
	},
	{
		name: 'Upper Bucks County Technical School',
		status: MarkerStatus.School,
		address: '3115 Ridge Rd, Perkasie, PA 18944, USA',
		location: {
			lat: 40.430459,
			lng: -75.2343947
		}
	},
	{
		name: 'Jefferson County School District',
		status: MarkerStatus.Special,
		address: '1829 Denver W Dr, Golden, CO 80401, USA',
		location: {
			lat: 39.5219299,
			lng: -105.2239449
		}
	}
];
