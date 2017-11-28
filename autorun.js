
function handleData() {
    //TODO @jonathan




function callback(data) {
    console.log(data.noun.syn);
    var pagecount = data.noun.syn.length;
    var pages = new Array(pagecount);
    for (var x=0; x<pagecount; x++){
        pages[x] = window.open('https://www.google.com/search?q='+data.noun.syn[x]);
    }
    setTimeout(function() {
        for (var x=0; x<pagecount; x++){
            pages[x].close()
        }
        
    },5000);
  }
}
