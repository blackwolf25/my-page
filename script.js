(function(){
	

const posts = $.getJSON("data.json", function(json) {
    return json;
});
console.log(posts);
})();