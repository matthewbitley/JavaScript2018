/**
 * use this to url to make your api calls: https://ron-swanson-quotes.herokuapp.com/v2/quotes'
 *  As a user, I should be able to click on XHR and get a quote
 *  As a user, I should be able to click on axios and get a quote
 *  As a user, I should be able to click on FETCH and get a quote
 *
 */

 
 // XHR
 var XHR = new XMLHttpRequest();
 $('#XHR').click(() => {
XHR.onreadystatechange = function() {
  if(XHR.readyState === 4  && XHR.status === 200){
    var XHRflat = JSON.parse(XHR.responseText);
    $("blockquote").text(XHRflat);
  }
}

XHR.open("GET", "https://ron-swanson-quotes.herokuapp.com/v2/quotes");
XHR.send();
});
 

 // FETCH
 const loadData = url => {
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes'
  )
  .then( (response) => {
   return response.json()
  })
  .then((data) => {
    renderTextToPage(data);
  }).catch(function(error){
    console.log('there has been an error')
  })
  };

  const renderTextToPage = data => {
    $('#FETCH').click(() => {
      $("blockquote").text(data);
    });
  };

  renderTextToPage(loadData);

// AXIOS
$('#AXIOS').click(() => {
    axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes').then((response)=>{
      $("blockquote").text(response.data);
    });
});


