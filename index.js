
function DateTime () {}

DateTime.locale = {
  am: "AM",
  pm: "PM",
  months: {
    full: [
      "Janurary",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    short: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]
  },
  days: {
    full: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    short: [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ]
  }
};

/* Formats the @date with the given @format. Just like the PHP function.
 * @format - A string with desired formating.
 * @date - A date object.
 * @locale - Optional locale object to use instead of the english default.
 * Y - Year full, "2014".
 * y - Year short, "14".
 * F - Month full name, "January".
 * M - Month short name, "Jan".
 * n - Month in number, "1".
 * m - Month in number with leading zeros, "01".
 * d - Day in number with leading zeros, "01".
 * j - Day in number, "1".
 * D - Day short name, "Sun".
 * l - Day full name, "Sunday".
 * a - am or pm.
 * A - AM or PM.
 * g - Hours in 12 format.
 * G - Hours in 24 format.
 * h - Hours in 12 format with leading zeros.
 * H - Hours in 24 format with leading zeros.
 * i - Minutes with leading zeros.
 * I - Minutes.
 * s - Seconds with leading zeros.
 * S - Seconds.
 */ 
DateTime.format = function ( format, date, locale ) {
  format = format || "F j, Y";
  date = date || new Date();
  locale = locale || DateTime.locale;
  day = date.getDay();
  dayi = date.getDate();
  month = date.getMonth();
  year = date.getFullYear();
  hours = date.getHours();
  hours12 = hours % 12;
  if ( hours == 0 ) hours = 12;
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  ampm = hours >= 12 ? locale.pm : locale.am;
  str = format;
  str = str.replace(/[Y]/g, year);
  str = str.replace(/[y]/g, String(year).slice(2, 4));
  str = str.replace(/[F]/g, locale.months.full[month]);
  str = str.replace(/[M]/g, locale.months.short[month]);
  str = str.replace(/[n]/g, month + 1);
  str = str.replace(/[m]/g, ("0" + (month + 1)).slice(-2));
  str = str.replace(/[d]/g, ("0" + (dayi + 1)).slice(-2));
  str = str.replace(/[d]/g, dayi + 1);
  str = str.replace(/[D]/g, locale.days.short[day]);
  str = str.replace(/[l]/g, locale.days.full[day]);
  str = str.replace(/[a]/g, ampm.toLowerCase());
  str = str.replace(/[A]/g, ampm);
  str = str.replace(/[g]/g, hours12);
  str = str.replace(/[G]/g, hours);
  str = str.replace(/[h]/g, ("0" + hours12).slice(-2));
  str = str.replace(/[H]/g, ("0" + hours).slice(-2));
  str = str.replace(/[i]/g, ("0" + minutes).slice(-2));
  str = str.replace(/[I]/g, minutes);
  str = str.replace(/[s]/g, ("0" + seconds).slice(-2));
  str = str.replace(/[S]/g, seconds);

  return str;
};

module.exports = DateTime;