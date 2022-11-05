var realPassword;
function controlPassword() {
    let password = document.querySelector(".password").value;
    let dizi = [];
    dizi = password.split("");
    var karakters = [">", "'", "!", "£", "^", "#", "+", "$", "%", "&", "/", "{", "(", ")", "}", "[", "]", "?", "*", "-", "<", "_", "|", "@",];
    var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var harfler = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "y", "z", "x", "q",];
    var Bharfler = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Y", "Z", "X", "Q",];
    let securityPoint = 0;
    let sumKarakter = 0;
    let sumNumber = 0;
    let sumHarfler = 0;
    let sumspace = 0;
    let gKarakter = 0;
    let gnumber = 0;
    let gHarfler = 0;
    let enazBirBüyük = 0;
    let enazBirKücük = 0;
    let enazBirKarakter = 0;
    let enazBirSayı = 0;
    let prop = document.querySelector(".prop");
    if (password != "") {
        for (let i = 0; i < dizi.length; i++) {
            for (let j = 0; j < harfler.length; j++) {
                if (dizi[i] == harfler[j] || dizi[i] == Bharfler[j]) {
                    if (dizi[i] == Bharfler[j]) {
                        prop.children[2].classList.add("red");
                        enazBirBüyük++;
                    }
                    else if (dizi[i] == harfler[j]) {
                        prop.children[3].classList.add("red");
                        enazBirKücük++;
                    }
                    if (gHarfler < 8) {
                        gHarfler++;
                        sumHarfler += 5;
                    }
                }
            }
        }
        for (let i = 0; i < dizi.length; i++) {
            for (let j = 0; j < karakters.length; j++) {
                if (dizi[i] == karakters[j]) {
                    if (gKarakter < 8) {
                        enazBirKarakter++;
                        gKarakter++;
                        sumKarakter += 6;
                        if (enazBirKarakter > 2) {
                            prop.children[1].classList.add("red");
                        }
                    }
                }
            }
        }
        for (let i = 0; i < dizi.length; i++) {
            for (let j = 0; j < number.length; j++) {
                if (dizi[i] == number[j]) {
                    prop.children[4].classList.add("red");
                    if (gnumber < 8) {
                        enazBirSayı++;
                        gnumber++;
                        sumNumber += 4;
                    }
                }
            }
        }
        for (let i = 0; i < dizi.length; i++) {
            if (dizi[i] == "") {
                sumspace += 0;
            }
        }
        if (enazBirKarakter < 3) {
            prop.children[1].classList.remove("red");
        }
        if (enazBirBüyük < 1) {
            prop.children[2].classList.remove("red");
        }
        if (enazBirKücük < 1) {
            prop.children[3].classList.remove("red");
        }
        if (enazBirSayı < 1) {
            prop.children[4].classList.remove("red");
        }
        securityPoint = sumKarakter + sumHarfler + sumNumber + sumspace;
        if (securityPoint > 100) {
            securityPoint = 100;
        }
    }
    else {

        document.querySelector(".weak").classList.add("hide");
        document.querySelector(".medium").classList.add("hide");
        document.querySelector(".hard").classList.add("hide");
        document.querySelector(".textarea").classList.add("hide");
        let spans = document.querySelectorAll(".prop span");
        for (let i = 0; spans.length; i++) {
            spans[i].classList.remove("red");
        }
        window.alert("Password Area Should Not Be Empty.");
    }
    if (enazBirBüyük > 0 && enazBirKarakter > 2 && enazBirKücük > 0 && enazBirSayı > 0) {
        if (securityPoint > 0 && securityPoint < 30) {
            document.querySelector(".weak").classList.remove("hide");
            document.querySelector(".textarea").classList.remove("hide");
            document.querySelector(".hard").classList.add("hide");
            document.querySelector(".medium").classList.add("hide");
            let weak =
                `
            <span class="color" >Password is Weak</span>
            `;
            document.querySelector(".textarea").innerHTML = weak;
            document.querySelector(".weak").style.display = "Block";
        }
        else if (securityPoint >= 30 && securityPoint < 70) {
            document.querySelector(".medium").classList.remove("hide");
            document.querySelector(".hard").classList.add("hide");
            let medium =
                `
            <span class="color" >Password is Medium</span>
            `;
            document.querySelector(".textarea").innerHTML = "";
            document.querySelector(".textarea").innerHTML = medium;
            document.querySelector(".medium").style.display = "Block";
        }
        else if (securityPoint >= 70 && securityPoint <= 100) {
            document.querySelector(".hard").classList.remove("hide");
            let hard =
                `
            <span class="color" >Password is Hard</span>
            `;
            document.querySelector(".textarea").innerHTML = "";
            document.querySelector(".textarea").innerHTML = hard;
            document.querySelector(".hard").style.display = "Block";
        }

    }
    else {
        document.querySelector(".weak").classList.remove("hide");
        document.querySelector(".textarea").classList.remove("hide");
        document.querySelector(".hard").classList.add("hide");
        document.querySelector(".medium").classList.add("hide");
        let weak =
            `
        <span class="color">Password is Weak</span>
        `;
        document.querySelector(".textarea").innerHTML = weak;
        document.querySelector(".weak").style.display = "Block";
    }
    realPassword = document.querySelector(".password").value;
}
var kontrol = true;
function hideObjects() {
    if (document.querySelector(".password").value != "") {
        if (kontrol) {
            document.querySelector(".password").value = "*************************";
            kontrol = false;
        }
        else {
            document.querySelector(".password").value = realPassword;
            kontrol = true;
        }
    }
    else {
        window.alert("Password Area Should Not Be Empty.")
    }
}
/**
 * TODO suan tek kalan şey harfleri sildikçe üzerinde kırmıız yazının bozulaası gerekir
 * 
 * 
 */