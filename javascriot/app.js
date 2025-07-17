let son = parseInt(prompt("1–999 oralig'ida son kiriting:"));

if (isNaN(son) || son < 1 || son > 999) {
  console.log("Xatolik!");
} else {
  let yuz = Math.floor(son / 100);
  let on = Math.floor((son % 100) / 10);
  let bir = son % 10;

  switch (yuz) {
    case 1:
         console.log("bir yuz");
          break;
    case 2: 
         console.log("ikki yuz");
          break;
    case 3:
         console.log("uch yuz");
          break;
    case 4: 
          console.log("to'rt yuz"); 
          break;
    case 5:
          console.log("besh yuz"); 
          break;
    case 6: 
          console.log("olti yuz"); 
          break;
    case 7: 
           console.log("yetti yuz");
            break;
    case 8: 
          console.log("sakkiz yuz");
           break;
    case 9: 
          console.log("to'qqiz yuz"); 
          break;
  }

  switch (on) {
    case 1: 
         console.log("o'n"); 
    break;
    case 2:
         console.log("yigirma"); 
         break;
    case 3: 
         console.log("o'ttiz"); 
         break;
    case 4: 
         console.log("qirq"); 
         break;
    case 5: 
        console.log("ellik");
         break;
    case 6: 
        console.log("oltmish"); 
        break;
    case 7: 
         console.log("yetmish"); 
          break;
    case 8: 
         console.log("sakson");
          break;
    case 9: 
         console.log("to'qson"); 
         break;
  }

  switch (bir) {
    case 1: 
         console.log("bir"); 
         break;
    case 2: 
         console.log("ikki"); 
         break;
    case 3: 
         console.log("uch");
          break;
    case 4: 
          console.log("to'rt");
           break;
    case 5: 
           console.log("besh"); 
           break;
    case 6: 
         console.log("olti"); 
         break;
    case 7: 
         console.log("yetti"); 
         break;
    case 8: 
         console.log("sakkiz");
         break;
    case 9:
          console.log("to'qqiz"); 
          break;
  }
}