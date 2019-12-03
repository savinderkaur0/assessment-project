function test()
{
var xhttp;
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
if (this.readyState == 4 && this.status == 200)
 {
  var obj=JSON.parse(this.responseText)
  var url=obj.meals[2].strMealThumb
  var res=obj.meals[2].strMeal
  var get_tag=document.getElementById("image1")
  document.getElementById("id1").innerHTML = res;
  get_tag.setAttribute('src',url)
  get_tag.setAttribute("height","200px")
  var url1=obj.meals[3].strMealThumb
  var res=obj.meals[3].strMeal
  var get_tag1=document.getElementById("image2")
  document.getElementById("id2").innerHTML = res;
  get_tag1.setAttribute('src',url1)
    get_tag1.setAttribute("height","200px")
    var url2=obj.meals[4].strMealThumb
    var res=obj.meals[4].strMeal
    var get_tag2=document.getElementById("image3")
    document.getElementById("id3").innerHTML = res;
    get_tag2.setAttribute('src',url2)
      get_tag2.setAttribute("height","200px")
}
}
xhttp.open("GET", "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian", true);
xhttp.send();
}
