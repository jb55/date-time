
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

| Key | Value |
|:---:|:------|
| Y | Year full, "2014". |
| y | Year short, "14". |
| F | Month full name, "January". |
| M | Month short name, "Jan". |
| n | Month in number, "1". |
| m | Month in number with leading zeros, "01". |
| d | Day in number with leading zeros, "01". |
| j | Day in number, "1". |
| D | Day short name, "Sun". |
| l | Day full name, "Sunday". |
| a | am or pm. |
| A | AM or PM. |
| g | Hours in 12 format. |
| G | Hours in 24 format. |
| h | Hours in 12 format with leading zeros. |
| H | Hours in 24 format with leading zeros. |
| i | Minutes with leading zeros. |
| I | Minutes. |
| s | Seconds with leading zeros. |
| S | Seconds. |