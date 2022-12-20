var li =document.getElementsByTagName('li');
var gh = document.getElementsByClassName('list-group-item');
for(var i=0;i<gh.length;i++){
    gh[i].style.color = 'blue';
}
for(var i=0;i<li.length;i++){
    li[i].style.color='yellow';
}

