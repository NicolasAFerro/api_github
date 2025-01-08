
var userHistory=[];

function search(){ 
    var username=document.getElementById('inputUserName').value;
    var url=`https://api.github.com/users/${username}`;

    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    //404 not found
    $.getJSON(url,(user)=> { 
        clearError();
        showUserData(user);
        if(isNewUser(user)){  
            saveUser(user)
            showNewUserHistory(user);
        }
       

       //qualquer erro na faixa do 400 ou 500
    }).fail( ()=>{ 
        showError("Usuário não Encontrados")
        showUserData({})
                

    });

}
function saveUser(user){ 
    userHistory.push(user);
}
function isNewUser(user){ 
    //u é um objeto do user history. 
    //A ideia do filtro é, algo fica e algo passa.
    //(u)para cada objeto do array userHistory 
    return userHistory.filter( (u) => u.login===user.login).length == 0;

}
function showNewUserHistory(user){  
    document.getElementById("history").innerHTML+=`<div class="col">
    <img
      src=${user.avatar_url}
      alt=""
      width="110"
      height="110"
      class="shadow rounded"
    />
</div>`

}
function showError(msg){  
    document.getElementById("error").innerHTML = `<div class="alert alert-danger mt-1" role="alert">
    ${msg}
</div>` ; 

} 
function clearError(){ 
    document.getElementById("error").innerHTML = ''; 
}
function showUserData(user){  

    document.getElementById("name").innerHTML    =user.name || ""; 
    document.getElementById("html_url").innerHTML=user.html_url || ""; 
    document.getElementById("company").innerHTML=user.company || ""; 
    document.getElementById ("avatar_url").innerHTML= user.avatar_url ? ` 
    <img
         src=${user.avatar_url}
         alt=""
         width="220"
         height="220"
         class="shadow rounded"
       />
     `:"";


} 

/* <div class="col">
              <img
                src="https://avatars.githubusercontent.com/u/141738096?v=4"
                alt=""
                width="110"
                height="110"
                class="shadow rounded"
              />
        </div> */