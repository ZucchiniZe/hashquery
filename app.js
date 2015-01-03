hash.call(function() {
  console.log(params);
  document.getElementById('hashCode').innerHTML = JSON5.stringify(params, null, 2);
});
