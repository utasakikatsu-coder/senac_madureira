let vagas = [

    ["vaga Livre", "vaga Livre", "vaga Ocupada","vaga Ocupada","vaga Livre"],

    ["vaga Ocupada", "vaga Livre", "vaga Livre","vaga Ocupada", "vaga Livre"],

    ["vaga Livre", "vaga Ocupada", "vaga Livre", "vaga Livre", "vaga Livre"]

]

for (let i = 0; i < vagas.length; i++) {

    for (let j = 0; j < vagas[i].length; j++) {

        console.log("Andar " + (i + 1) + " - Vaga " + (j + 1) + ": " + vagas[i][j]);

    }
}-