// switch case
let hariEsok = () => {
    let hari = prompt(`masukan hari ini untuk mengetahui hari besok
note: gunakan huruf besar di awal`);

    switch (hari) {
        case "Senin":
            alert("besok adalah hari Selasa");
            break;
        case "Selasa":
            alert("besok adalah hari Rabu");
            break;
        case "Rabu":
            alert("besok adalah hari Kamis");
            break;
        case "Kamis":
            alert("besok adalah hari Jumat");
            break;
        case "Jumat":
            alert("besok adalah hari Sabtu");
            break;
        case "Sabtu":
            alert("besok adalah hari Minggu");
            break;
            case "Minggu":
                alert("besok adalah hari Senin");
                break;
        default:
            alert(`gunakan huruf besar di awal e.g "Senin"`);
    }
};

hariEsok();

