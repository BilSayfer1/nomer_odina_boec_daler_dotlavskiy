let form = document.forms.namedItem('jinkin_lev')
let inp = document.querySelector(".email")
let pswrd = document.querySelector(".password")
let name_inp = document.querySelector(".name")
let num_inp = document.querySelector(".number")
let email = /^\S+@\S+\.\S+$/
let password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
let uzb_nomer_adina_boec_Daler_Dotlavskiy = /^998([378]{2}|(9[013-57-9]))\d{7}$/g
let name = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
let blue = "blue"
let red = "red"

let inputs = [
    {
        input: name_inp,
        regex: name,
    },
    {
        input: num_inp,
        regex: uzb_nomer_adina_boec_Daler_Dotlavskiy,
    },
    {
        input: pswrd,
        regex: password,
    },
    {   
        input: inp,
        regex: email,
    }
];


inputs.forEach(({ input, regex}) => {
    input.onkeyup = (e) => {
        const val = e.target.value;
        if (regex.test(val)) {
            input.style.borderColor = blue;
        } else {
            input.style.borderColor = red;
        }
    };
});
