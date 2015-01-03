window.hash = {
  // For the actual paramters from the url hash
  params: function(opts) {
    // Set default options
    opts = opts || {
      'json': true,
      'split': '&',
      'space': false
    }
    // Assign the hash to the `Hash` variable
    // Remove the actual hash as to not interfere with the data
    var Hash = window.location.hash.replace(/#/, '');
    // If the space is true replace `+` with ` `
    if(opts.space === true) {
      Hash = Hash.split('+').join(' ');
    }
    // Get an array of different pieces in the hash object
    // Split by ampersand to stick with the old query string method
    var items = Hash.split(opts.split);
    // Initiate the params object where we store the data
    var params = {};
    // Loop for everything in the items array
    for (i = 0; i < items.length; i++) {
      // Get the key for the key-value store in the object
      // Split by equals sign as to follow the query string and select the first in the array
      var key = items[i].split('=')[0];
      // Select the second item in the array which is the value
      var value = items[i].split('=')[1];
      // Use an option for the JSON parsing
      if(opts.json === true) {
        // Assign the key of `key` to a loosley parsed JSON `value`
        params[key] = JSON5.parse(value);
      } else {
        // Else no parsing
        params[key] = value;
      }
    }
    // Return the params object
    return params;
  },
  // A helper function
  call: function(func) {
    // Run the function when you initialize the page
    func();
    // On the hash being changed run the function again
    window.addEventListener("hashchange", function() {
      // Refresh the params object
      window.params = window.hash.params();
      // Run function after the params is set
      func();
    });
  }
}

// Assign the params object to the `params` variable for quick usage
window.params = window.hash.params();
