let statuss = "off";
let randomSayi;

const mesaj = document.getElementById("msj");
const tahminAlani = document.getElementById("tahmin-alani");


function baslat(){
    statuss = "on";
    tahminAlani.style.display = "block";
    document.getElementById("tahmin").value = "";
    document.getElementById("tahmin").focus();
    document.getElementById("tahmin").innerText="";
    randomSayi=Math.floor(Math.random()*101);

}

function kontrol(){
    if (statuss == "off"){
        alert("Oyun bitti baştan başlatın!");
        return;
    }

    const tahmin = document.getElementById("tahmin");
    const tahminInput = Number(tahmin.value);

    if( tahminInput<1 || tahminInput>100 || isNaN(tahminInput)){
        mesaj.innerHTML = "Lütfen 1 ile 100 arasında geçerli bir sayı giriniz.";
        tahmin.value = "";
        tahmin.focus();
        return;
    }
    if (tahminInput < randomSayi){
        mesaj.innerHTML= "Daha büyük bir sayı giriniz";
        tahmin.value = "";
    }
    else if(tahminInput > randomSayi){
        mesaj.innerHTML = "Daha küçük bir sayı giriniz";
        tahmin.value = "";
        
    }
    else{
        mesaj.innerHTML = " Tebrikler 🎉 "
        statuss="off";
    }
         
    tahmin.focus(); 
}