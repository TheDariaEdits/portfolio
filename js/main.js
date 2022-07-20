const log = document.querySelectorAll('#logo path')

for (let i = 0; i < log.length; i++) {
    console.log(`Letter ${i} is ${log[i].getTotalLength()}`)
    
}

// Letter 0 is 351.6800231933594
// Letter 2 is 452.58587646484375
// Letter 1 is 508.8011169433594
// Letter 3 is 624.0584716796875
// Letter 4 is 475.95025634765625
// Letter 5 is 335.4087829589844
// Letter 6 is 259.47467041015625
// Letter 7 is 475.95025634765625
// Letter 8 is 529.372314453125
// Letter 9 is 537.004638671875
// Letter 10 is 259.47467041015625
// Letter 11 is 345.45867919921875
// Letter 12 is 378.7026672363281