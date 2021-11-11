let quotes = [
    '"Nie lękajcie się strzelać do p0laków" - Jan Paweł II, Wołyń 1944',
    '"Zgubiłaś się dziewczynko?" - Karol Wojtyła do księdza Popiełuszki, Wisła 1984 ',
    '"Co się kurwa dziwiwsz?" - Słowa do osobistego sekretarza po wyborze na papieża',
    '"HRHRHErehe" - Watykan, 2 kwietnia 2005'
];
let i = 0;


function slide(){
    document.getElementById('quotes').innerText = quotes[i];
    if (i < quotes.length - 1){
        i++
    }else {
        i = 0
    }
}

document.body.onload = setInterval(slide,4000);

