var express = require('express')
var fs = require('fs')
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
app.use( bodyParser.json() );  
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers","X-Requested-With,content-type")
  res.header('Content-Type', 'application/json')
  next();
});
var apiKey='66128e8e93f27d98b900f5683d9ef12d'
app.post('/donate', function(req, res) {
	console.log(req.body)
	var amount = parseInt(req.body.Amount)
	console.log(amount)
	var charity = req.body.name
	request.post({
		url:'http://api.reimaginebanking.com/accounts/589f52b51756fc834d9047df/transfers?key=66128e8e93f27d98b900f5683d9ef12d', 
		json: {
			"medium":"balance",
			"payee_id":"589f53591756fc834d9047e1",
			"amount":amount
			}
		},	
		function(error, response, body) {
			console.log(body)
	})
})

var charity_names = {
    "TartanHacks": [
      {
        "ID": "1",
        "Charity": "United Way Worldwide",
        "Category": "Domestic Needs",
        "URL": "http://www.unitedway.org",
        "Key_x0020_Words": "Community Football Local Education Finance Health"
      },
      {
        "ID": "2",
        "Charity": "Task Force for Global Health",
        "Category": "International Needs",
        "URL": "http://www.taskforce.org",
        "Key_x0020_Words": "Health International Soccer Medicine Vaccine Disease"
      },
      {
        "ID": "3",
        "Charity": "Feeding America",
        "Category": "Domestic Needs",
        "URL": "http://www.feedingamerica.org",
        "Key_x0020_Words": "Community Food Groceries Restaurant Crops Farming"
      },
      {
        "ID": "4",
        "Charity": "Salvation Army",
        "Category": "Domestic Needs",
        "URL": "http://www.salvationarmyusa.org",
        "Key_x0020_Words": "Community Clothing Shopping Disaster Relief Christmas"
      },
      {
        "ID": "5",
        "Charity": "YMCA of the USA",
        "Category": "Youth",
        "URL": "http://www.ymca.net",
        "Key_x0020_Words": "Youth Sports Basketball Football Weight Lifting Soccer Swimming Community"
      },
      {
        "ID": "6",
        "Charity": "St. Jude Children's Research Hospital",
        "Category": "Medical",
        "URL": "http://www.stjude.org",
        "Key_x0020_Words": "Health Medicine Disease Sickness Children Cancer"
      },
      {
        "ID": "7",
        "Charity": "Food for the Poor",
        "Category": "International Needs",
        "URL": "http://www.foodforthepoor.org",
        "Key_x0020_Words": "Food Groceries Shopping Farming Crops"
      },
      {
        "ID": "8",
        "Charity": "Boys & Girls Clubs of America",
        "Category": "Youth",
        "URL": "http://www.bgca.org",
        "Key_x0020_Words": "Children Urban Cities Sports Football Basketball Education Schools College Opportunity"
      },
      {
        "ID": "9",
        "Charity": "Catholic Charities USA",
        "Category": "Domestic Needs",
        "URL": "http://www.catholiccharitiesusa.org",
        "Key_x0020_Words": "Religion Pope Church Community God Disaster Relief"
      },
      {
        "ID": "10",
        "Charity": "Goodwill Industries International",
        "Category": "Domestic Needs",
        "URL": "http://www.goodwill.org",
        "Key_x0020_Words": "Clothing Shopping Disaster Relief Community"
      },
      {
        "ID": "11",
        "Charity": "Habitat for Humanity International",
        "Category": "International Needs",
        "URL": "http://www.habitat.org",
        "Key_x0020_Words": "Community Homes Neighborhoods Living Construction"
      },
      {
        "ID": "12",
        "Charity": "World Vision",
        "Category": "International Needs",
        "URL": "http://www.worldvision.org",
        "Key_x0020_Words": "Disaster Relief International Soccer Refugees Health"
      },
      {
        "ID": "13",
        "Charity": "American Cancer Society",
        "Category": "Health",
        "URL": "http://www.cancer.org",
        "Key_x0020_Words": "Health Medicine Doctors Cancer Hospital"
      },
      {
        "ID": "14",
        "Charity": "Patient Access Network Foundation",
        "Category": "Health",
        "URL": "http://www.panfoundation.org",
        "Key_x0020_Words": "Hospital Health Medicine Doctors Disease"
      },
      {
        "ID": "15",
        "Charity": "Compassion International",
        "Category": "International Needs",
        "URL": "http://www.ci.org",
        "Key_x0020_Words": "Children Education Medicine Homes"
      },
      {
        "ID": "16",
        "Charity": "Direct Relief",
        "Category": "International Needs",
        "URL": "http://www.directrelief.org",
        "Key_x0020_Words": "Medicine Disaster Relief International"
      },
      {
        "ID": "17",
        "Charity": "Americares Foundation",
        "Category": "International Needs",
        "URL": "http://www.americares.org",
        "Key_x0020_Words": "Health Medicine Doctor Disease International"
      },
      {
        "ID": "18",
        "Charity": "Lutheran Services in America",
        "Category": "Domestic Needs",
        "URL": "http://www.lutheranservices.org",
        "Key_x0020_Words": "Lutheran Religion Church Community Disaster Relief"
      },
      {
        "ID": "19",
        "Charity": "Nature Conservancy",
        "Category": "Environment",
        "URL": "http://www.nature.org",
        "Key_x0020_Words": "Nature Animals Earth Climate Change Environment Woods National Parks"
      },
      {
        "ID": "20",
        "Charity": "American Heart Association",
        "Category": "Health",
        "URL": "http://www.heart.org",
        "Key_x0020_Words": "Health Wellness Heart Running Cardio Swimming Cholesterol Medical Doctors"
      },
      {
        "ID": "21",
        "Charity": "American National Red Cross",
        "Category": "Domestic Needs",
        "URL": "http://www.redcross.org",
        "Key_x0020_Words": "Disaster Relief Health Home Construction International Floods Tsunami Soccer"
      },
      {
        "ID": "22",
        "Charity": "Samaritan's Purse",
        "Category": "Domestic Needs",
        "URL": "http://www.samaritanspurse.org",
        "Key_x0020_Words": "Religion Church Disaster Relief Community"
      },
      {
        "ID": "23",
        "Charity": "MAP International",
        "Category": "International Needs",
        "URL": "http://www.map.org",
        "Key_x0020_Words": "Religion Community Family Health Hospital Doctors"
      },
      {
        "ID": "24",
        "Charity": "Step Up for Students",
        "Category": "Education",
        "URL": "http://www.stepupforstudents.org",
        "Key_x0020_Words": "Education College Children School Community"
      },
      {
        "ID": "25",
        "Charity": "Cru",
        "Category": "Cru",
        "URL": "http://www.cru.org",
        "Key_x0020_Words": "Religion Students College Church Community"
      },
      {
        "ID": "26",
        "Charity": "United States Fund for UNICEF",
        "Category": "International Needs",
        "URL": "http://www.unicefusa.org",
        "Key_x0020_Words": "International Health Soccer Medicine Disaster Relief Barcelona Messi"
      },
      {
        "ID": "27",
        "Charity": "Wounded Warrior Project",
        "Category": "Domestic Needs",
        "URL": "http://www.woundedwarriorproject.org",
        "Key_x0020_Words": "Military Army Navy Air Force Under Armour Health Community Sports Doctors Hospital"
      },
      {
        "ID": "28",
        "Charity": "Feed the Children",
        "Category": "Domestic Needs",
        "URL": "http://www.feedthechildren.org",
        "Key_x0020_Words": "Food Children Community Groceries Shopping Health"
      },
      {
        "ID": "29",
        "Charity": "Mount Sinai Health Systems",
        "Category": "Medical",
        "URL": "http://www.mountsinaihealth.org",
        "Key_x0020_Words": "Health Hospital Medicine Doctors"
      },
      {
        "ID": "30",
        "Charity": "Save the Children Federation",
        "Category": "International Needs",
        "URL": "http://www.savethechildren.org",
        "Key_x0020_Words": "Children International Refugees Soccer Education Food"
      },
      {
        "ID": "31",
        "Charity": "CARE USA",
        "Category": "International Needs",
        "URL": "http://www.care.org",
        "Key_x0020_Words": "Community Education Health Children Poverty"
      },
      {
        "ID": "32",
        "Charity": "Good 360",
        "Category": "International Needs",
        "URL": "http://www.good360.org",
        "Key_x0020_Words": "Shopping Companies NYSE Fortune 500"
      },
      {
        "ID": "33",
        "Charity": "Catholic Relief Services",
        "Category": "International Needs",
        "URL": "http://www.crs.org",
        "Key_x0020_Words": "Church Catholic Disaster Relief Religion"
      },
      {
        "ID": "34",
        "Charity": "Planned Parenthood Federation of America",
        "Category": "Domestic Needs",
        "URL": "http://www.plannedparenthood.org",
        "Key_x0020_Words": "Murder Abortion Sex Children Condoms College"
      },
      {
        "ID": "35",
        "Charity": "Doctors Without Borders USA",
        "Category": "International Needs",
        "URL": "http://www.doctorswithoutborders.org",
        "Key_x0020_Words": "International Disaster Relief Medicine Health Doctors"
      },
      {
        "ID": "36",
        "Charity": "Bill, Hillary, and Chelsea Clinton Foundation",
        "Category": "International Needs",
        "URL": "http://www.clintonfoundation.org",
        "Key_x0020_Words": "Trump Election Liberal Diplomatic Immunity Corruption"
      },
      {
        "ID": "37",
        "Charity": "Make-A-Wish Foundation of America",
        "Category": "Youth",
        "URL": "http://www.wish.org",
        "Key_x0020_Words": "Disney Children Sports Football NFL John Cena Health"
      },
      {
        "ID": "38",
        "Charity": "Dana-Farber Cancer Institute",
        "Category": "Medical",
        "URL": "http://www.dana-farber.org",
        "Key_x0020_Words": "Health Cancer Medicine Hospital Children"
      },
      {
        "ID": "39",
        "Charity": "Leukemia & Lymphoma Society",
        "Category": "Health",
        "URL": "http://www.lls.org",
        "Key_x0020_Words": "Cancer Medicine Hospital Leukemia Lymphoma Doctors"
      },
      {
        "ID": "40",
        "Charity": "Boy Scouts of America",
        "Category": "Youth",
        "URL": "http://www.scouting.org/",
        "Key_x0020_Words": "Camping Boys Children Community Wilderness National Parks Scouts"
      },
      {
        "ID": "41",
        "Charity": "Cross International",
        "Category": "International Needs",
        "URL": "http://crossinternational.org/",
        "Key_x0020_Words": "Religion Disaster Relief Church Community"
      },
      {
        "ID": "42",
        "Charity": "Memorial Sloan Kettering Cancer Center",
        "Category": "Medical",
        "URL": "https://www.mskcc.org/",
        "Key_x0020_Words": "Cancer Health Hospital Wellness"
      },
      {
        "ID": "43",
        "Charity": "Catholic Medical Mission Board",
        "Category": "International Needs",
        "URL": "https://cmmb.org/",
        "Key_x0020_Words": "Catholic Church Religion Medicine Disaster Relief Health Doctors"
      },
      {
        "ID": "44",
        "Charity": "Alzheimer's Association",
        "Category": "Health",
        "URL": "http://www.alz.org/",
        "Key_x0020_Words": "Alzheimer's Grandparents Mental Illness Old People Memory Health"
      },
      {
        "ID": "45",
        "Charity": "Population Services International",
        "Category": "International Needs",
        "URL": "http://www.psi.org/",
        "Key_x0020_Words": "Population International Sex"
      },
      {
        "ID": "46",
        "Charity": "Mayo Clinic",
        "Category": "Medical",
        "URL": "http://www.mayoclinic.org/",
        "Key_x0020_Words": "Health Hospital Doctors Medicine"
      },
      {
        "ID": "47",
        "Charity": "Rotary Foundation of Rotary International",
        "Category": "International Needs",
        "URL": "https://www.rotary.org/",
        "Key_x0020_Words": "International Soccer High School Disaster Relief Community"
      },
      {
        "ID": "48",
        "Charity": "Marine Toys for Tots Foundation",
        "Category": "Youth",
        "URL": "http://toysfortots.org/",
        "Key_x0020_Words": "Military Marines Christmas Children Toys Community"
      },
      {
        "ID": "49",
        "Charity": "American Kidney Fund",
        "Category": "Health",
        "URL": "http://www.kidneyfund.org/",
        "Key_x0020_Words": "Health Disease Kidney Alcohol"
      },
      {
        "ID": "50",
        "Charity": "Operation Blessing International Relief & Development",
        "Category": "International Needs",
        "URL": "https://www.ob.org/",
        "Key_x0020_Words": "Disaster Relief Religion Church Community Homes Poverty Construction"
      },
      {
        "ID": "51",
        "Charity": "American Jewish Joint Distribution Committee",
        "Category": "International Needs",
        "URL": "http://www.jdc.org/",
        "Key_x0020_Words": "Jewish Humanity Poor Israel Disaster"
      },
      {
        "ID": "52",
        "Charity": "Entertainment Industry Foundation",
        "Category": "Health",
        "URL": "http://eifoundation.org/",
        "Key_x0020_Words": "Hollywood Film Television Los Angeles Wartime Polio"
      },
      {
        "ID": "53",
        "Charity": "Shriners Hospitals for Children",
        "Category": "Medical",
        "URL": "http://www.shrinershospitalsforchildren.org/",
        "Key_x0020_Words": "Health Child Kid Orthopedic Care Hospital"
      },
      {
        "ID": "54",
        "Charity": "Susan G Komen for the Cure",
        "Category": "Health",
        "URL": "http://ww5.komen.org/",
        "Key_x0020_Words": "Women Cancer Breast Female Health Cure Woman"
      },
      {
        "ID": "55",
        "Charity": "Project HOPE",
        "Category": "International Needs",
        "URL": "http://www.projecthope.org/",
        "Key_x0020_Words": "Medicine Disaster Disease Life Lives Health Monthly Diabetes"
      },
      {
        "ID": "56",
        "Charity": "Brother's Brother Foundation",
        "Category": "International Needs",
        "URL": "http://www.brothersbrother.org/",
        "Key_x0020_Words": "Pittsburgh Medical Pharmeceutical Textbook Food Education Seeds"
      },
      {
        "ID": "57",
        "Charity": "American Civil Liberties Union and Foundation",
        "Category": "Public Affairs",
        "URL": "https://www.aclu.org/",
        "Key_x0020_Words": "Muslim Immigration Discrimination Trans Trump Right Liberty Constitution"
      },
      {
        "ID": "58",
        "Charity": "ChildFund International",
        "Category": "International Needs",
        "URL": "https://www.childfund.org/",
        "Key_x0020_Words": "Child Nutrition Safety Violence Neglect Exploit Poor Potential Community Harm Grow Life Kid Christian Water Education Opportunity"
      },
      {
        "ID": "59",
        "Charity": "International Rescue Committee",
        "Category": "International Needs",
        "URL": "https://www.rescue.org/",
        "Key_x0020_Words": "Refugee Lives Rescue International Human Crisis Travel Trump Disaster Conflict"
      },
      {
        "ID": "60",
        "Charity": "Young Life",
        "Category": "Religious",
        "URL": "https://www.younglife.org/",
        "Key_x0020_Words": "College Dominican Kids Community Christian Lives Soccer Sport International Mulu Military Bases"
      }
    ]
  }

var info  = {
	name : null,
	num : null,
	link : null
}

app.post('/', function(req, res) {

	var count = [];

	for (i = 0; i < charity_names.TartanHacks.length; i++) {
	var temp_count = 0;
	for (j = 0; j < req.body.length; j++) {
			
	 		var a = req.body[j].title.split(" ");
	 		var b = charity_names.TartanHacks[i].Key_x0020_Words.split(" ");
	 		for(k = 0; k < a.length; k++) {
	 			for (l = 0; l < b.length; l++) {
	 			if ( (a[k].toLowerCase()).indexOf(b[l].toLowerCase()) != -1) {
	 				temp_count++;
	 			}
	 			}
			}
			
		}
		count.push({
			"name" : charity_names.TartanHacks[i].Charity,
	 		"num" : temp_count,
	 		"link" : charity_names.TartanHacks[i].URL	 	
	 	})
	 }
	 	count.sort(function(a, b) {
	 		return  b.num - a.num
	 	})
	console.log(count);
	res.send([count[0], count[1], count[2]])
})

app.listen(8000)



