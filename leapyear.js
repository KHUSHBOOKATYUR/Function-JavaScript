function isLeapYear(y) {
    return divides(4, y) && !divides(100, y) || divides(400, y)
  }
  
  isLeapYear(1963)              // false
  isLeapYear(1968)              // true
  isLeapYear(2000)              // true
  isLeapYear(2100)              // false
  isLeapYear(2200)              // false
  isLeapYear(2399)              // false
  isLeapYear(2400)              // true
  isLeapYear(920481910)         // false
  isLeapYear(9204810000)        // truef