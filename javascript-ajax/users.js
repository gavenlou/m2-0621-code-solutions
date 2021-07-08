var $users = document.querySelector('#user-list');

function getData() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (num in xhr.response) {
      var $list = document.createElement('li');
      $list.textContent = xhr.response[num].name;
      $users.append($list);
    }
  });
  xhr.send();
}

getData();
