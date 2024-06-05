var btn = document.getElementById('btn');
var container = document.getElementById('container')
var animalCount = 1;
btn.addEventListener('click',()=>{
    let request = new XMLHttpRequest();
    request.open('GET','https://learnwebcode.github.io/json-example/animals-' + animalCount + '.json');
    request.onload = ()=>{
        let data = JSON.parse(request.responseText)
        renderHTML(data)
    }
    request.send();
    animalCount++;
    if(animalCount > 3){
        btn.classList.add('hide-me')
    }
})

function renderHTML(data){
    var htmlString = '';
    for(i=0; i< data.length; i++)
        {
            htmlString += '<p>' + data[i].name + ' is a ' + data[i].species + '</p>'
        }
    container.insertAdjacentHTML('beforeend',htmlString)
}

