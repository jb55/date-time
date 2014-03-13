
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
  transformer = new Transformer(date, locale);
  str = "";

  for ( var i = 0; i < format.length; i++ ) {
    str += transformer.transform(format.charAt(i));
  }

  return str;
};

function Transformer ( date, locale ) {
  locale = locale;
  day = date.getDay();
  dayi = date.getDate();
  month = date.getMonth();
  year = date.getFullYear();
  hours = date.getHours();
  hours12 = hours % 12;
  if ( hours == 0 ) hours = 12;
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  ampm = this.hours >= 12 ? locale.pm : locale.am;

  this.map = {
    "Y": year,
    "y": String(year).slice(2, 4),
    "F": locale.months.full[month],
    "M": locale.months.short[month],
    "n": month + 1,
    "m": ("0" + (month + 1)).slice(-2),
    "d": ("0" + (dayi + 1)).slice(-2),
    "j": dayi + 1,
    "D": locale.days.short[day],
    "l": locale.days.full[day],
    "a": ampm.toLowerCase(),
    "A": ampm,
    "g": hours12,
    "G": hours,
    "h": ("0" + hours12).slice(-2),
    "H": ("0" + hours).slice(-2),
    "i": ("0" + minutes).slice(-2),
    "I": minutes,
    "s": ("0" + seconds).slice(-2),
    "S": seconds
  };
};

Transformer.prototype.transform = function ( character ) {
  return this.map[character] || character;
};

module.exports = DateTime;