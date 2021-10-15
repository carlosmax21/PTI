function generateUserTable(data){
    let idx = 0;
    let tbody = document.getElementById('users').querySelector('tbody');
    tbody.innerHTML = '';
    for(idx = 0; idx < data.length; idx++){ // membuat row ke table html sebanyak jumlah data yang diperoleh
        let colID = '<td>' + data[idx].id + '</td>'; // membuat kolom ID
        let colName = '<td>' + data[idx].name + '</td>'; // membuat kolom nama
        let colEmail = '<td>' + data[idx].email + '</td>'; // membuat kolom email
        let colCompanyName = '<td>' + data[idx].company.name + '</td>'; // membuat kolom nama perusahaan
        let btnShowPost = '<td><button class="button-posts" userId=' + data[idx].id
                            + ' onclick="loadPosts(' + data[idx].id
                            + ')">Show Posts</button></td>'; // membuat tombol untuk menampilkan post user
        // membuat row sejumlah kolom yang ingin ditampilkan
        let newRow = '<tr>' + colID + colName + colEmail + colCompanyName + btnShowPost + '</tr>';
        tbody.innerHTML += newRow; // meng-append row ke dalam tbody
    }
}
function loadUserData(){
    let request = new XMLHttpRequest(); // membuat objek XMLHttpRequest
    let url = 'https://jsonplaceholder.typicode.com/users'; // URL berisi data users berbentuk JSON
    request.open('GET', url, true); // Open request dengan method GET ke server secara asinkron

    request.onload = function(){
        if(request.status >= 200 && request.status < 400){ // memastikan status request "OK"
            // mem-parse data menjadi Javascript object dan ditampung ke variabel dengan nama 'data'
            let data = JSON.parse(request.responseText);
            // console.log(data); // menampilkan data yang didapat
            generateUserTable(data);
        }
        else{
            alert('Page Not Found');
        }
    }
    request.onerror = function(){
        alert('Request Failed! Check your internet connection');
    }
    request.send(); //mengirim request ke server
}
function onDocumentFinish(){
    loadUserData();
}

function showPosts(data){
    let idx = 0;
    let div = document.getElementById('user-posts');
    div.innerHTML = '';
    for(idx = 0; idx < data.length; idx++){ // membuat row dengan kolom yang diinginkan
        let divTitle = '<h2 style="text-transform: uppercase;">TITLE: "'+data[idx].title+'"</h2>'
        let divBody = '<p>'+data[idx].body+'<p>'
        let btnShowComments = '<br><button class="button-comments" postId=' + data[idx].id
                            + ' onclick="loadComments(' + data[idx].id
                            + ');this.remove()">Show Comments</button>'; // tombol untuk menampilkan comment pada post yang dipilih
        let newPost = '<div id="postId'+data[idx].id+'"class="post col-8">'+divTitle + divBody + btnShowComments+'</div>';
        div.innerHTML += newPost; // append row ke tbody
    }
}

function showComments(data)
{
    let idx = 0;
    let div = document.getElementById("postId"+data[idx].postId)
    let head = '<h2>Comment :</h2>';
    div.innerHTML += head;
    for(idx = 0; idx < data.length; idx++)
    {
        let comment = '<p><b>'+data[idx].name+'('+data[idx].email+')</b> commented :"'+data[idx].body+'"</p>';
        div.innerHTML += comment;
    }
}

function loadPosts(id){
    let request = new XMLHttpRequest();
    let url = 'https://jsonplaceholder.typicode.com/posts/?userId=' + id; //url dengan parameter userId
    request.open('GET', url, true); // Open Request

    request.onload = function(){
        if(request.status >= 200 && request.status < 400){
            let data = JSON.parse(request.responseText); // parse JSON menjadi Object
            showPosts(data);
        }
        else{
            alert('Page Not Found');
        }
    }
    request.onerror = function(){
        alert('Request Failed! Check your internet connection');
    }
    request.send(); //mengirim request
}

function loadComments(id)
{
    let request = new XMLHttpRequest();
    let url = 'https://jsonplaceholder.typicode.com/posts/'+id+'/comments/?postId=1'; //url dengan parameter userId
    request.open('GET', url, true); // Open Request

    request.onload = function(){
        if(request.status >= 200 && request.status < 400){
            let data = JSON.parse(request.responseText); // parse JSON menjadi Object
            showComments(data);
        }
        else{
            alert('Page Not Found');
        }
    }
    request.onerror = function(){
        alert('Request Failed! Check your internet connection');
    }
    request.send(); //mengirim request
}
