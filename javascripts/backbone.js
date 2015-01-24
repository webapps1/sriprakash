var pCategories = ["Accommodation and Travel",
                   "Alternative Therapy",
                   "Business Services",
                   "Automobile",
                   "Computing and IT",
                   "Education and Tuition",
                   "Finance and Insurance",
                   "Health and Medical",
                   "Home Services and Renovation",
                   "Manufacturing and Industrial",
                   "Mining and Agriculture",
                   "Organisations and Government",
                   "Personal Services",
                   "Professional Services",
                   "Recreation and Entertainment",
                   "Restaurants",
                   "Retail - Around the Home",
                   "Retail - Clothing and Accessories",
                   "Retail - Electrical and Electronics",
                   "Retail - Food and Drink",
                   "Retail - General",
                   "Retail - Recreation and Hobbies",
                   "Sporting and Fitness",
                   "Other",
                   "Utilities",
                   "Wholesale and Distributors",
                   "Media and Communication"
                   ];

var pSubCategories = [
                      [
				"Airport Shuttles",
				"Airports",
				"Bed and Breakfast",
				"Campgrounds and Caravan Parks",
				"Car Rental",
				"Caravan and Campervan Hire",
				"Crisis Care Accommodation",
				"Freight Transportation",
				"Holiday Resorts",
				"Hostels",
				"Hotels",
				"Limos",
				"Mobile Homes",
				"More Accommodation",
				"Motels",
				"Other Accommodation",
				"Other Travel",
				"Ports and Harbours",
				"Public Transportation",
				"Serviced Apartments",
				"Ships",
				"Taxis",
				"Tourist Attractions",
				"Tours",
				"Trailer Hire",
				"Travel and Tourism",
				"Travel Agents"],
				
				[ "Acupuncture",
				"Alternative Medicine",
				"Other Alternative Theraphy"],

				[ "Advertising",
				"Audiovisual Equipment Installation",
				"Business Services",
				"Couriers",
				"Employment Agencies",
				"Marketing",
				"Office Fitout and Installation",
				"Other Business Services",
				"Printers",
				"Signwriting" ],

				[ "Boat Charters",
				"Boat Dealers",
				"Boating",
				"Buses and Coaches",
				"Car Dealers",
				"Car Wash",
				"Mechanic",
				"Motorcycle and Scooter Dealers",
				"Motorcycle and Scooter Repair",
				"Mufflers and Exhaust Systems",
				"Other Boating",
				"Other Car",
				"Parking",
				"Petrol and Service Stations",
				"Roadside Assistance",
				"Towbar Fitting",
				"Towing",
				"Tyres",
				"Vehicle Batteries",
				"Vehicle Body Work",
				"Vehicle Brake and Clutch Repairs",
				"Vehicle Electrical Repairs",
				"Vehicle Inspections",
				"Vehicle Radiators",
				"Vehicle Spare Parts",
				"Vehicle Transmission and Gearbox Repairs",
				"Windscreens",
				"Motor Accessories"],

				[ "Graphic Design",
				"Internet Publisher",
				"Internet Services",
				"IT Services",
				"Other Computing and IT",
				"Telephone Services",
				"Web Design",
				"Web Hosting"],

				[ "Adult Education",
				"Art Schools",
				"Colleges",
				"Cooking Schools",
				"Dance Schools",
				"Drama Schools",
				"Driving Schools",
				"First Aid Training",
				"Flying Schools",
				"Kindergarten and Preschools",
				"Language Schools",
				"Motorcycle Training",
				"Music Schools",
				"Other Education and Learning",
				"Riding Schools",
				"Schools",
				"Special Schools",
				"TAFE",
				"Teachers",
				"Tutoring",
				"Universities" ],

				[ "ATM",
				"Banks",
				"Bookkeeping",
				"Building Societies",
				"Credit Unions",
				"Debt Collecting",
				"Foreign Currency Exchange",
				"Insurance",
				"Investing",
				"Mortgage Brokers",
				"Other Financial Services",
				"Refinancing"],

				[ "Cardiologists",
				"Chiropodist",
				"Chiropractors",
				"Cosmetic Surgeons",
				"Counselling and Mental Health",
				"Dentists",
				"Dermatologists",
				"Doctors",
				"Hospitals",
				"Medical Centres",
				"Midwives",
				"Mobility Aids",
				"Obstetricians and Gynaecologists",
				"Ophthalmologists",
				"Opticians",
				"Oral Surgeons",
				"Orthodontists",
				"Other Health and Medical",
				"Paediatricians",
				"Pathologist",
				"Physiotherapy",
				"Podiatrists",
				"Pregnancy Termination Service",
				"Psychiatrists",
				"Specialist Medical Services",
				"Sports Medicine",
				"Weight Loss Treatment"],

				[ "Air Conditioning and Heating Installation",
				"Bathroom Renovation",
				"Bricklaying",
				"Building Supplies",
				"Carpenter",
				"Cleaning",
				"Drainers",
				"Electricians",
				"Fencing Construction",
				"Flooring",
				"Gardeners",
				"Glazier",
				"Guttering",
				"Handyman",
				"Home Pools and Spas",
				"Indoor Home Improvement",
				"Installation Trade Services",
				"Insulation",
				"Interior Design",
				"Kitchen Renovation",
				"Landscaping",
				"Locksmiths",
				"Other Home Services and Renovation",
				"Outdoor Home Improvement",
				"Packing",
				"Painters",
				"Plasterers",
				"Plumbing",
				"Refrigeration Installation and Repair",
				"Removalists",
				"Roofing",
				"Security and Safety System Installation",
				"Shades and Blinds",
				"Stonemason",
				"Tiling",
				"Tree surgeon"],

				[ "Beverage Manufacturers",
				"Building Construction",
				"Cement, Lime, Plaster and Concrete",
				"Ceramic Manufacturers",
				"Chemical Manufacturers",
				"Clothing Manufacturers",
				"Concrete and Cement",
				"Construction Services",
				"Cosmetics Manufacturers",
				"Earthmoving",
				"Electronic Equipment and Appliance",
				"Fabric Manufacturers",
				"Footwear Manufacturers",
				"Furniture Manufacturers",
				"General Manufacturers",
				"Glass Manufacturers",
				"Machinery and Tools Manufacturers",
				"Metal Manufacturers",
				"Other Industrial",
				"Other Manufacturers",
				"Paper Manufacturers",
				"Plastic and Fibreglass Manufacturers",
				"Quarrying",
				"Rubber Manufacturers",
				"Sporting Goods Manufacturers",
				"Transport Manufacturers",
				"Steel Manufacturers"],

				[ "Agriculture",
				"Animal Breeding",
				"Farming",
				"Mining",
				"Oil and Gas",
				"Other Agriculture",
				"Other Mining",
				"Timber and Forestry"],

				[
				"Churches",
				"Consulates and Embassies",
				"Courts",
				"Emergency Services",
				"Federal Government",
				"Libraries",
				"Local Government",
				"Mosques",
				"Other Government",
				"Other Organisations",
				"Political Party",
				"Post Offices",
				"Prison",
				"Religious Organisations",
				"State Government",
				"Synagogues",
				"Temples"],

				[ "Adult Services",
				"Appliances and Repair",
				"Beauty Salons",
				"Caterers",
				"Child Care and Day Care",
				"Community Service/Non-Profit",
				"Costumes and Formal Wear",
				"Dating Agency",
				"Day Spas",
				"DJs",
				"Dog Walkers",
				"Dry Cleaning and Laundry",
				"Escorts Agencies",
				"Funeral Services and Cemeteries",
				"Hair Removal",
				"Hairdressers",
				"Home Minding",
				"Makeup Artists",
				"Massage",
				"Nail Salon",
				"Other Personal Services",
				"Party and Event Planning",
				"Party Supplies",
				"Pest Control",
				"Pet Boarding",
				"Pet Care",
				"Pet Funerals",
				"Pet Groomers",
				"Pet Training",
				"Photographers",
				"Piercing",
				"Rubbish and Waste Removal",
				"Sewing and Alterations",
				"Shoe Repair",
				"Skin Care",
				"Storage",
				"Tanning Salons",
				"Tattooists",
				"Trophies and Engraving",
				"Upholstering and Polishing",
				"Watch Repair",
				"Wedding Planning",
				"Wedding Supplies"],

				[ "Accountants",
				"Architects and Building Designers",
				"Associations and Unions",
				"Business Broker",
				"Business Consultancy",
				"Business Opportunities",
				"Celebrity Management and Casting",
				"Detective and Investigator Services",
				"Engineering",
				"Environmental Consultancy",
				"Fashion",
				"Film Production",
				"Import and Export Agents",
				"Interpreting and Translating",
				"Lawyers",
				"Legal Services",
				"Local Search Directory",
				"Secretarial and Typing Services",				
				"Other Professional Services",
				"Property Management",
				"Public Relations",
				"Real Estate Agents",
				"Science",
				"Security Services",
				"Surveyors",
				"Venues and Event Spaces",
				"Veterinarians"],

				[
				"Amusement Parks",
				"Aquariums",
				"Archery",
				"Art Galleries",
				"Astrology, Spiritual and Genealogy",
				"Beaches",
				"Bike Rentals",
				"Bingo",
				"Bookies",
				"Botanical Gardens",
				"Casinos",
				"Cinema",
				"Circus",
				"Comedy Clubs",
				"Fishing",
				"Interest Groups",
				"Landmarks and Historical Buildings",
				"Museums",
				"Music Venues",
				"Nightclub",
				"Other Clubs",
				"Other Recreation and Entertainment",
				"Paintball",
				"Parks",
				"Playgrounds",
				"Pool Halls",
				"Pubs and Bars",
				"Racing",
				"Scuba Diving",
				"Skating Rinks",
				"Skiing and Snowboarding",
				"Stadiums and Arenas",
				"Theatres",
				"Zoos"],

				[
				"Cafes",
				"Restaurants",
				"Takeaways"],
                      
				[
				"Furniture Stores",
				"Home Decor Retailers",
				"Home Entertainment Retailers",
				"Kitchen and Bath Retailers",
				"Nurseries and Gardening Retailers",
				"Other Retail - Around the Home" ],

				[
				"Bridal Wear Retailers",
				"Clothing Retailers",
				"Lingerie Retailers",
				"Shoe Stores",
				"Used, Vintage and Consignment Retailers",
				"Other Retail - Clothing and Accessories"],

				[
				"Computers Retailers",
				"Household Appliances Retailers",
				"Mobile Phones Retailers",
				"Other Retail - Electrical and Electronics",
				"Cables and Conductors"],

				[
				"Bottle Shops",
				"Breweries",
				"Butchers",
				"Chocolatiers",
				"Coffee and Tea Suppliers",
				"Confectionary",
				"Convenience Stores",
				"Delis",
				"Farmers Market",
				"Fruits and Vegetables",
				"Gourmet",
				"Health Markets",
				"Ice Cream and Frozen Yogurt",
				"Juice Bars",
				"Seafood",
				"Specialty Food",
				"Supermarket and Grocery Stores",
				"Vineyards and Wineries",
				"Other Retail - Food and Drink"],

				[
				"Adult Novelties and Products Retail",
				"Antiques Retailers",
				"Bike Shops",
				"Bookstores",
				"Caravan Dealers",
				"Cards and Gift Shops",
				"Chemists",
				"Comic Books Retailers",
				"Cosmetics and Beauty Retailers",
				"Department Stores",
				"Eyewear Retailers",
				"Fabric Stores",
				"Factory Outlets",
				"Florists",
				"Framing",
				"General Retailers",
				"Hardware Stores",
				"Watch Retailers",
				"Jewellery Retailers",
				"Leather Goods Retailers",
				"Luggage Retailers",
				"Maternity Retailers",
				"Movies and Video Game Rental",
				"Musical Instruments Retailers",
				"Newsagents",
				"Office Equipment Retailers",
				"Outdoor Gear Retailers",
				"Pet Shops",
				"Photo Film Processing",
				"Promotional Products",
				"Shopping Centres",
				"Sporting Goods Retailers",
				"Stationery Retailers",
				"Tobacco Shops",
				"Toys and Computer Games Retailers",
				"Used Goods Retailers",
				"Other Retail - General"],

				[
				"Art Supplies Retailers",
				"Arts and Crafts Retailers",
				"Hobby Shops",
				"Photography Stores",
				"Other Retail - Recreation and Hobbies"],

				[
				"Badminton",
				"Bowling",
				"Extreme Sports",
				"Go Karting",
				"Golf",
				"Gymnastics",
				"Gyms and Fitness Centres",
				"Martial Arts",
				"Other Sporting and Fitness",
				"Parachuting",
				"Personal Trainers",
				"Pilates",
				"Sailing",
				"Sports Clubs",
				"Squash",
				"Surf School",
				"Swimming",
				"Swimming Pools",
				"Tennis",
				"Water Skiing",
				"Yoga"],

				[
				"Other General",
				"Placement Services"],

				[
				"Electricity Supply",
				"Gas Supply",
				"More Utilities",
				"Waste Treatment",
				"Water Utility"],

				[
				"Distributors",
				"Wholesalers"],

                [                        
				"Other Media and Communication",
				"Print Media",
				"Radio Stations",
				"Recorded Media and Publishing",
				"Recording and Rehearsal Studios",
				"Television Stations",
				"Written Communication"
				]
	        ];


///////////////////////////Index Registration JS Zone//////////////////////////////////////////////////
jQuery(document).ready(function(){
	var options = '';
	$('#category').html('');
	for(i=0; i<pCategories.length; i++){
		options = options + '<option value="' + i + '">' + pCategories[i] + '</option>';
	}
	$('#category').append(options);
});
$(document).ready(function() {
	$('#category').change(function(){
		var options ='';
		var cIndex = $('#category').val();
		$('#subCategory').html('');
		for(i=0;i<pSubCategories[cIndex].length; i++){
			options = options + '<option value="' + i + '">' + pSubCategories[cIndex][i] + '</option>';
		}
		$('#subCategory').append(options);
	});
});
$('body').click(function() {
	$('#resaults').css('display', 'none');
});
  // Fetch Facebook Data
  function searchFacebookData() {
    var imgArray = [];
    var MyQ = $("#HDiscoveryFbSearch").val();

    $.ajax({      
        type: "GET",
        dataType: "json",
        url: 'https://graph.facebook.com/' + MyQ,
        data: {
            access_token: "511450802262127|MnhPJPe0yb2HyKvfGimL6MsYZd8",
            fields: "name,description,category,location,phone,website,category_list"    
        },
        success: function (data) {	        	 
		 	 var fbdata = JSON.stringify(data);
      	 $('#fbjson').val(fbdata);
        }
    });
  }  
	// Fetch Facebook Albums
  function searchFacebookUrl1() {
  	var imgArray = [];
    	var fnaArray = [];
    	var MyQ = $("#HDiscoveryFbSearch").val();
	    var imgcount = 0;
	    
    	$.ajax({    
    		async: false,
    		type: "GET",
        	dataType: "json",
        	url: 'https://graph.facebook.com/' + MyQ,
        	data: {
          	access_token: "511450802262127|MnhPJPe0yb2HyKvfGimL6MsYZd8",
            	fields: "cover,picture,albums"    
        	},
        	success: function (data) {

        		try{
        			if(data.cover.source != null){
	            		imgArray[imgcount] = data.cover.source + '?$?$?Cover';
         	 			imgcount++;
	            	}
	            	if(data.picture.data.url != null){
	            		imgArray[imgcount] = data.picture.data.url + '?$?$?Picture';
         	 			imgcount++;
	            	}
	        		for (var i = 0; i < data.albums.data.length; i++) {
	                	var albumid = data.albums.data[i].id;
	                	var albumname = data.albums.data[i].name;
	                	//alert(albumname);
	                	$.ajax({     
	                		async: false,
	                  		type: "GET",
	                  		dataType: "json",
	                  		url: 'https://graph.facebook.com/' + albumid,
	                  		data: {
	                      		access_token: "511450802262127|MnhPJPe0yb2HyKvfGimL6MsYZd8",
	                      		fields: "photos"    
	                  		},
	                  		success: function (data) {
	                  			
	                  			for (var i = 0; i < data.photos.data.length; i++) {
	                    			var images = data.photos.data[i].images;
	                      			for(var k = 0; k < images.length; k++){
	                            		var srcImg = images[k].source;
	                            		$('#photos').append("<img src='" + srcImg + "' style='height: 200px; width: 200px;'>");
	                            		if(srcImg!=null){
	                              			var fileNameIndex = srcImg.lastIndexOf("/") + 1;
	                             			var filename = srcImg.substr(fileNameIndex);  
	                              			//alert(filename);
	                             			if($.inArray(filename, fnaArray) == -1){
	                             				if(imgcount < 124){			                            				
		                            				imgArray[imgcount] = srcImg + '?$?$?' + albumname;
		                                			fnaArray[imgcount] = filename;
		                               	 			imgcount++;
	                             				}
	                             				else{
	                             					break;
	                             				}	                                				                                
	                              			}  
	                        			}                                          
	                      			}
	                      			if(imgcount>=124) break;
	            				}                   
	                  		}
	                	});
	                	if(imgcount>=124) break;
	        		}
		    	}catch(e){     		    		

		    	}
        	}
    	});
  	
    	/*if(imgcount>=1 && imgcount<124){
  		var noiter = 124 / imgcount;
  		var itersize = imgcount;
  		try{
	    		for(var iter = 1; iter < noiter; iter++){
	        		for(var newx = 0; newx < itersize; newx++){
	        			imgcount++;
	        			
	        			if(imgcount == 124){
	        				break;
	        			}
	        		}
	    		}	    			
  		}catch(e){}
    	}*/
      $('#fbalbum').val(JSON.stringify(imgArray));

  }
  // Fetch Facebook Albums
  function searchFacebookAlbums() {
    searchFacebookUrl1();
    searchFacebookData();
  }
	function getMapData(placeJSON){
		var obj = jQuery.parseJSON(placeJSON);
		$('#pljson').val(placeJSON);
	}

///////////////////////////Index Registration JS Zone//////////////////////////////////////////////////