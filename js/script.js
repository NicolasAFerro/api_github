function search(){ 
    var username=document.getElementById('inputUserName').value;
    var url=`https://api.github.com/users/${username}`;

    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    //404 not found
    $.getJSON(url,(user)=> { 
        clearError();
        setUserData(user);
     

       //qualquer erro na faixa do 400 ou 500
    }).fail( ()=>{ 
        showError("Usuário não Encontrado")
        setUserData({})
                

    });

}
function showError(msg){  
    document.getElementById("error").innerHTML = `<div class="alert alert-danger mt-1" role="alert">
    ${msg}
</div>` ; 

} 
function clearError(){ 
    document.getElementById("error").innerHTML = ''; 
}
function setUserData(user){  

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