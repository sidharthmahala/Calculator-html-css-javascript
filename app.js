let string="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click',(e) => {
        console.log(e.target);
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector("input").value=string;
        }else
        string = string + e.target.innerHTML;
        document.querySelector("input").value=string;
        if(e.target.innerHTML == "C"){
            string ="";
            document.querySelector("input").value=string;
        }
        if(e.target.value == "2"){
            str = parseInt(string);
            string = str * str;
            document.querySelector("input").value = string;
        }
        if(e.target.value == "3"){
            str = parseInt(string);
            string = str * str * str;
            document.querySelector("input").value = string;
        }
    }) 
})