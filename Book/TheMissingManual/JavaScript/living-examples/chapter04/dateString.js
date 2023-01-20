function dateString(date,string) {
		/* key for creating string
			%Y = 2008
			%y = 08
			%M = January
			%m = Jan
			%N = 01 (month)
			%n = 1 (month)
			%W = Monday
			%w = Mon
			%D = 05 (day of month)
			%d = 5 (day of month)
			%O = ordinal like 'st' for 1st, or 'th' for 5th
			Example: '%W, the %d%O of %M, %Y' will return a string like
			'Tuesday, the 6th of February, 2009'
		*/
		var months = ['January','February','March','April','May',
									'June','July','August','September',
									'October','November','December'];
		var days = ['Sunday','Monday','Tuesday','Wednesday',
								'Thursday','Friday','Saturday'];
		var day=date.getDay();
		var year=date.getFullYear();
		var month=date.getMonth();
		var realMonth=month+1;
		var fillMonth = (realMonth<10) ? '0' + realMonth : realMonth;
		var date=date.getDate();
		var fillDate = (date<10) ? '0' + date : date;
		var sfx = ["th","st","nd","rd"];
		var val = date%100;
	  var ordDate = date + (sfx[(val-20)%10] || sfx[val] || sfx[0]);
		
		
		//year
		string = string.replace(/%Y/g,year); // 2008
		string = string.replace(/%y/g,year.toString().slice(-2)); //08
		//month
		string = string.replace(/%M/g,months[month]); //January
		string = string.replace(/%m/g,months[month].slice(0,3)); //Jan
		string = string.replace(/%N/g,fillMonth); // 01
		string = string.replace(/%n/g,realMonth); // 1
		//day of week
		string = string.replace(/%W/g,days[day]); //Monday
		string = string.replace(/%w/g,days[day].slice(0,3)); //Mon
		//day of month
		string = string.replace(/%D/g,fillDate); //05
		string = string.replace(/%d/g,date); // 5
		//ordinal (1st) to day
		string = string.replace(/%O/ig,ordDate);
		return string;
	}
	