let notas = [
    [8, 6, 9],
    [7, 5, 6],
    [10, 8, 7],
    [4, 6, 5]
];

let aprovadas = 0;

for (let aluno = 0; aluno < notas.length; aluno++) {
    for (let nota = 0; nota < notas[aluno].length; nota++) {

        if (notas[aluno][nota] >= 7) {
            console.log(
                `Aluno ${aluno + 1}: nota ${notas[aluno][nota]} - aprovada`
            );

            aprovadas++;
        } else {
            console.log(
                `Aluno ${aluno + 1}: nota ${notas[aluno][nota]} - abaixo da média`
            );
        }
    }
}

console.log(`Total de notas acima ou iguais a 7: ${aprovadas}`);