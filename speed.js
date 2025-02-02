function calculate() {
    // get the value of an input field with an id of speed using the document.getElementById() method
    // value is then parsed as an integer using parseInt() and assigned to a variable named speed
    const speed = parseInt(document.getElementById('speed').value);
    let points = 0;
    //checks whether the speed is less than 70. If it is, the text content of an HTML element with an id of result is set to "Ok
    if (speed < 70) {
      document.getElementById('result').textContent = 'Ok';
    } else {
    // driver receives 1 point for every 5 km/h over the speed limit of 70 km/h 
      points = Math.floor((speed - 70) / 5);
    //checks whether the number of points exceeds 12. If it does, the text content of the HTML element with an id of result is set to "License suspended"   
      if (points > 12) {
        document.getElementById('result').textContent = 'License suspended';
      } else {
        document.getElementById('result').textContent = 'Points: ' + points;
      }
    }
  }