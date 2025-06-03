const leki = {
  "apap": {
    nazwa: "Apap",
    opis: "Lek przeciwbólowy i przeciwgorączkowy. Substancja czynna: paracetamol.",
    zastosowanie: "Bóle głowy, mięśni, gorączka, przeziębienie.",
    dawkowanie: "500–1000 mg co 4–6 godzin. Maksymalnie 4 g dziennie.",
    zalecenia: "Nie przekraczać dziennej dawki. Ostrożnie przy chorobach wątroby. Unikać spożycia alkoholu."
  },
  "ibuprofen": {
    nazwa: "Ibuprofen",
    opis: "Lek przeciwbólowy, przeciwgorączkowy i przeciwzapalny z grupy NLPZ.",
    zastosowanie: "Bóle zębów, stawów, mięśni, menstruacyjne, gorączka.",
    dawkowanie: "200–400 mg co 4–6 godzin. Maksymalnie 1200 mg dziennie bez konsultacji lekarskiej.",
    zalecenia: "Nie stosować na pusty żołądek. Ostrożnie przy chorobach żołądka, wątroby i nerek."
  },
  "polopiryna": {
    nazwa: "Polopiryna",
    opis: "Lek przeciwzapalny i przeciwbólowy. Substancja czynna: kwas acetylosalicylowy.",
    zastosowanie: "Bóle różnego pochodzenia, gorączka, przeziębienie.",
    dawkowanie: "300–600 mg co 4–8 godzin. Maksymalnie 3 g dziennie.",
    zalecenia: "Nie stosować u dzieci poniżej 12 r.ż. Ryzyko krwawień i podrażnienia żołądka. Nie łączyć z alkoholem."
  },
  "nospa": {
    nazwa: "No-Spa",
    opis: "Lek rozkurczowy zawierający drotawerynę.",
    zastosowanie: "Skurcze brzucha, jelit, dróg moczowych, bóle menstruacyjne.",
    dawkowanie: "40–80 mg 2–3 razy dziennie. Maksymalnie 240 mg na dobę.",
    zalecenia: "Nie stosować u dzieci <6 lat. Może powodować zawroty głowy lub senność."
  },
  "panadol": {
    nazwa: "Panadol",
    opis: "Lek przeciwbólowy i przeciwgorączkowy. Substancja czynna: paracetamol.",
    zastosowanie: "Bóle głowy, zębów, stawów, gorączka.",
    dawkowanie: "500–1000 mg co 4–6 godzin. Maksymalnie 4 g dziennie.",
    zalecenia: "Unikać łączenia z innymi lekami zawierającymi paracetamol. Ostrożnie przy problemach z wątrobą."
  },
  "aspiryna": {
    nazwa: "Aspiryna",
    opis: "Lek przeciwzapalny, przeciwbólowy i przeciwgorączkowy. Substancja czynna: kwas acetylosalicylowy.",
    zastosowanie: "Bóle różnego pochodzenia, gorączka, stany zapalne.",
    dawkowanie: "500–1000 mg co 4–8 godzin. Maksymalnie 4 g dziennie.",
    zalecenia: "Nie stosować u dzieci. Może powodować krwawienia i podrażnienie żołądka."
  },
  "nurofen": {
    nazwa: "Nurofen",
    opis: "Lek przeciwbólowy i przeciwzapalny zawierający ibuprofen.",
    zastosowanie: "Bóle głowy, zębów, menstruacyjne, gorączka.",
    dawkowanie: "200–400 mg co 6–8 godzin. Maksymalnie 1200 mg na dobę bez konsultacji.",
    zalecenia: "Unikać stosowania na czczo. Ostrożnie u osób z problemami żołądkowymi."
  },
  "scorbolamid": {
    nazwa: "Scorbolamid",
    opis: "Preparat wieloskładnikowy stosowany przy przeziębieniach i grypie.",
    zastosowanie: "Objawy przeziębienia i grypy: gorączka, ból, katar.",
    dawkowanie: "1 tabletka co 6 godzin. Maksymalnie 4 tabletki dziennie.",
    zalecenia: "Nie stosować u dzieci poniżej 12 lat. Zawiera paracetamol i kofeinę – unikać łączenia z innymi źródłami tych substancji."
  },
  "stoperan": {
    nazwa: "Stoperan",
    opis: "Lek przeciwbiegunkowy zawierający loperamid.",
    zastosowanie: "Ostra i przewlekła biegunka.",
    dawkowanie: "Dawka początkowa: 2 kapsułki, potem 1 po każdym luźnym stolcu. Maksymalnie 8 kapsułek dziennie.",
    zalecenia: "Nie stosować dłużej niż 2 dni bez konsultacji z lekarzem. Nie stosować u dzieci <6 lat."
  },
  "cerutin": {
    nazwa: "Cerutin",
    opis: "Preparat witaminowy zawierający rutynę i witaminę C.",
    zastosowanie: "Wzmacnianie odporności, wspomagająco przy przeziębieniu i grypie.",
    dawkowanie: "1–2 tabletki 2–3 razy dziennie.",
    zalecenia: "Nie przekraczać zalecanej dawki. Ostrożnie u osób z kamicą nerkową i nadmiarem żelaza."
  }

};

  
  function szukajLeku() {
    const nazwaLeku = document.getElementById("pole-wyszukiwania").value.toLowerCase().trim();
    const wypiszWynik = document.getElementById("wynik");
  
    const lek = leki[nazwaLeku];
  
    if (lek) {
      wypiszWynik.innerHTML = `
        <h2>${lek.nazwa}</h2>
        <p><strong>Opis:</strong> ${lek.opis}</p>
        <p><strong>Zastosowanie:</strong> ${lek.zastosowanie}</p>
        <p><strong>Dawkowanie:</strong> ${lek.dawkowanie}</p>
        <p><strong>Zalecenia:</strong> ${lek.zalecenia}</p>
      `;
    } else {
      wypiszWynik.textContent = "Nie znaleziono informacji o tym leku.";
    }   
      
  }
  function resetuj() {
    document.getElementById("pole-wyszukiwania").value = ""; 
    document.getElementById("wynik").textContent = ""; 
  }
  
  
  
