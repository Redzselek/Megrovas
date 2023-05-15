var hanyadik = 0
function Feldolgoz()
{
    nev = document.getElementById("diakneve").value
    tantargy = document.getElementById("tantargy").value
    megrovas = document.getElementById("kere").checked
    console.log(megrovas);
    if (megrovas == true) 
    {
        hanyadik++
        document.getElementById("elvett").innerHTML += '<option value="'+hanyadik+'">'+nev+'!!! ('+tantargy+')</option>'   
    }
    else
    {
        hanyadik++
        document.getElementById("elvett").innerHTML += '<option value="'+hanyadik+'">'+nev+' ('+tantargy+')</option>' 
    }

}

function Torol() 
{
   document.getElementById("elvett").remove(document.getElementById("elvett").selectedIndex)
}
