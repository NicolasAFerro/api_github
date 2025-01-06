function search(){ 
    var username=document.getElementById('inputUserName').value;
    var url=`https://api.github.com/users/${username}`;

    $.getJSON(url,(user)=> { 

        // <div id="name"></div>
        // <div id="html_url"></div>
        // <div id="company"></div>
       document.getElementById("name").innerHTML    =user.name; 
       document.getElementById("html_url").innerHTML=user.html_url; 
       document.getElementById("company").innerHTML=user.company; 
       document.getElementById ("avatar_url").innerHTML=` 
       <img
            src="${user.avatar_url}"
            alt=""
            width="220"
            height="220"
            class="shadow rounded"
          />
        `

       
    });

}