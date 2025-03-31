function month(){

    let usermonth=document.getElementById("usermonth").value;
    let mon=String(usermonth).toLowerCase();
    
    switch(mon){
        case 'jan':
            case 'january':
            console.log('31');
            document.getElementById("ans").innerHTML="31";
            break;
        case 'feb':
            case 'february':
                case 'febuary':
            console.log('28');
            document.getElementById("ans").innerHTML="28";
            break;
        case 'mar':
            case 'march':
            console.log('31');
            document.getElementById("ans").innerHTML="31";
            break;
        case 'apr':
            case 'april':
            console.log('30');
            document.getElementById("ans").innerHTML="30";
            break;
        case 'may':
            case 'may':
            console.log('31');
            document.getElementById("ans").innerHTML="31";
            break;
        case 'jun':
            case 'june':
            console.log('30');
            document.getElementById("ans").innerHTML="30";
            break;
        case 'jul':
            case 'july':
            console.log('31');
            document.getElementById("ans").innerHTML="31";
            break;
        case 'aug':
            case 'august':
            console.log('31');
            document.getElementById("ans").innerHTML="31";
            break;
        case 'sep':
            case 'september':
            console.log('30');
            document.getElementById("ans").innerHTML="30";
            break;
        case 'oct':
            case 'october':
            console.log('31');
            document.getElementById("ans").innerHTML="31";
            break;
        case 'nov':
            case 'november':
            console.log('30');
            document.getElementById("ans").innerHTML="30";
            break;
        case 'dec':
            case 'december':
            console.log('31');
            document.getElementById("ans").innerHTML="31";
            break;
        default:
            console.log('Invalid month');
            break;
    }
    setTimeout(()=>{ document.getElementById("ans").innerHTML="";}, 10000);
    }