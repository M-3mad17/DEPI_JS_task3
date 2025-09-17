function getvalid(){
    var user = document.getElementById('user').value
    var email = document.getElementById('email').value
    var pass = document.getElementById('pass').value
    var confirm = document.getElementById('confirm').value
    var result = document.getElementById('result')


    result.setAttribute('class','alert alert-danger text-center')
    document.getElementById('submit-form').setAttribute('class','btn btn-danger btn-block')

    if (user =='' && email=='' && pass=='' &confirm==''){
        result.innerHTML='Enter Data'
        return false ;

    }

    else if ( user.length <5 || user.length > 15){
        result.innerHTML = 'Enter 5-15 char in name'
        return false ;
    }

    else if (email.indexOf('@',2) == -1 ){
        result.innerHTML='enter valid email'
        return false ;
    }
    else if(pass.length < 8){
    result.innerHTML='enter password at least 8 char'
     return false ;
    }

    else if(pass != confirm){

         result.innerHTML=' notmatched pass'
        return false ;

    }

    else{
        return true ;
    }


    

}