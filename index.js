let c;
let f;



function convert(){
    temp = document.getElementById('input').value;
    temp = Number(temp);
    if (document.getElementById('radio1').checked){
        c = (temp-32)*5/9;
        document.getElementById('ans').textContent = c.toFixed(2) + ' C°';
    }
    else if (document.getElementById('radio2').checked){
        f = (temp*9/5) + 32;
        document.getElementById('ans').textContent = f.toFixed(2) + ' F°';
    }
    else{
        document.getElementById('ans').textContent = 'please select convertion first' ;
    }

}