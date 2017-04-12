function buildTable(rows, pixels){
var art=document.getElementById('art');
for(var i=0;i<rows;i++){
  art.innerHTML+='<div class="row"></div>';
  }
var row=document.getElementsByClassName('row');
for(var j=0;j<pixels;j++){
  row[j].innerHTML+='<div class="pixel" onclick="setPixelColour(this)"></div>';
  }
};
