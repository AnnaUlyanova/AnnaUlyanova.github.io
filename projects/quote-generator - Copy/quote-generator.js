document.addEventListener("DOMContentLoaded", function(event) {
  var quote;
  var author;
  function mycallback (json) {
   console.log("ForisimaticAPIcall result", json);
};
  function generateQuote() {
    $.ajax({
      type: "GET",
      url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback",
      dataType: "jsonp",
      success: function(data) {
       quote = data[0].content;
       author = data[0].title;
       document.getElementById("quote").innerHTML = quote;
       if (author) {
         document.getElementById("author").innerHTML = "— " + author;
        }
        else {
           document.getElementById("author").innerHTML = "— Unknown";
        }
      }
    });
  }
  generateQuote();
//   var button = document.getElementsByClassName("button");
// button.addEventListener("click", generateQuote());
 document.getElementById('clickMe').onclick = generateQuote;
});
