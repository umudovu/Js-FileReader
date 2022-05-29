let fullname = document.getElementById("fullname");
let description = document.getElementById("description");
let email = document.getElementById("email");
let password = document.getElementById("password");
let imgfile = document.getElementById("imgfile");
let profileform = document.getElementById("profileform");
let update = document.getElementById("update");
let cname = document.getElementById("cname");
let cemail = document.getElementById("cemail");
let cdesc = document.getElementById("cdesc");
let primage = document.getElementById("profile-img");
let img = "./img/avatar.jpg";

let primageval;
// class User{
//     constructor(fullname,email,password,desc){
//         this.fullname=fullname,
//         this.email=email,
//         this.password=password,
//         this.description=desc

//     }
// }
profileform.addEventListener("submit", function (e) {
    e.preventDefault();

    let nameval = fullname.value;
    let emailval = email.value;
    let passval = password.value;
    let descval = description.value;
    console.log(primageval);

    if (!(nameval == "" || emailval == "" || passval == "")) {
        cname.innerHTML = nameval;
        cemail.innerHTML = emailval;
        cdesc.innerHTML = descval;
        if (primageval != undefined) {
            primage.setAttribute("src", primageval);
        }
        else{
            primage.setAttribute("src", img);
        }
        localStorage.setItem("fullname", nameval);
        localStorage.setItem("email", emailval);
        localStorage.setItem("desc", descval);
        localStorage.setItem("image", primageval);
        profileform.reset();
    } else {
        alert("Dəyərlər boş ola bilməz...")
    }



})


imgfile.addEventListener("change", function (ev) {
    //console.log(e.target.files);
    //console.log(ev.target.files);

    for (const file of ev.target.files) {
        let reader = new FileReader();
        reader.onloadend = function (e) {
            primageval = e.target.result;

        }
        reader.readAsDataURL(file);

    }

})


window.onload = function () {

   let locname= localStorage.getItem("fullname");
   let locemail= localStorage.getItem("email");
   let locdesc= localStorage.getItem("desc");
   let locimg= localStorage.getItem("image");

    cname.innerHTML = locname;
    cemail.innerHTML = locemail;
    cdesc.innerHTML = locdesc;
    if (locimg!=undefined) {
        primage.setAttribute("src", locimg);
    }
}
