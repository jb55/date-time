
# date-time

  Simple date time functionalities.

## Installation

  Install with [component(1)](http://component.io):

    $ component install tm-components/date-time

## API
```
var DateTime = require("date-time");
...
el.innerHTML = DateTime.format("F j, Y", new Date());
```

### DateTime.format

This function will optionally take a format string, a date object, and a locale object. The formatting options are copied/inspired from the PHP date formating function to make it easier to remember.

| Key | Example | Details |
|:---:|:-------:|:--------|
| Y | 2014 | Year full |
| y | 14 | Year short |
| F | Janurary | Month full name |
| M | Jan | Month short name |
| n | 1 | Month in number |
| m | 01 | Month in number with leading zeros |
| d | 01 | Day in number with leading zeros |
| j | 1 | Day in number |
| D | Sun | Day short name |
| l | Sunday | Day full name |
| a | am | Lowercase noon status |
| A | PM | Uppercase noon status|
| g | 11 | Hours in 12 |
| G | 22 | Hours in 24 |
| h | 01 | Hours in 12 format with leading zeros |
| H | 09 | Hours in 24 format with leading zeros |
| i | 03 | Minutes with leading zeros |
| I | 49 | Minutes |
| s | 08 | Seconds with leading zeros |
| S | 32 | Seconds |