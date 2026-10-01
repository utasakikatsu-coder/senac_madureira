let vagas = [

    ["Livre", "Livre", "Ocupado","Livre","Livre"],

    ["Ocupado", "Livre", "Livre","Ocupado","Ocupado"],

    ["Livre", "Ocupado", "Livre","Ocupado","Livre"]

]




for (let linhas = 0; linhas < vagas.length; linhas++) {
    const Corredordevagas = vagas[linhas];

    for (let colunas = 0; colunas < Corredordevagas.length; colunas++) {
        const statusvago = Corredordevagas[colunas];

        if (statusvago === "Livre") {

            console.log("vaga livre!")
            
        } else {

            console.log("vaga ocupada!")

        }
        
    }
    
}