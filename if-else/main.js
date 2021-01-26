let hariEsok = () => {
    let hari = prompt(`masukan hari ini untuk mengetahui hari besok
note: gunakan huruf besar di awal`);

    if (hari == "Senin") {
        console.log("besok adalah hari Selasa");
        alert("besok adalah hari Selasa");
    } else if (hari == "Selasa") {
        console.log("besok adalah hari Rabu");
        alert("besok adalah hari Rabu");
    } else if (hari == "Rabu") {
        console.log("besok adalah hari Kamis");
        alert("besok adalah hari Kamis");
    } else if (hari == "Kamis") {
        console.log("besok adalah hari Jumat");
        alert("besok adalah hari Jumat");
    } else if (hari == "Jumat") {
        console.log("besok adalah hari Sabtu");
        alert("besok adalah hari Sabtu");
    } else if (hari == "Sabtu") {
        console.log("besok adalah hari Minggu");
        alert("besok adalah hari Minggu");
    } else if (hari == "Minggu") {
        console.log("besok adalah hari Senin");
        alert("besok adalah hari Senin");
    } else {
        alert(`gunakan huruf besar di awal e.g "Senin"`);

    }
};

hariEsok();