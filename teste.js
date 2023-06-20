let gabarito = {
    "Algoritmos": [
        'A', 'A', 'B', 'D', 'E', 'D', 'A', 'C', 'C', 'B'
    ],
}

let alunos = {
    "Ana Banana": ['C', 'A', 'B', 'A', 'E', 'A', 'A', 'B', 'C', 'C'],
    "Beto Bolado": ['B', 'C', 'B', 'B', 'E', 'D', 'D', 'C', 'D', 'C'],
    "Carla Criativa": ['B', 'B', 'D', 'D', 'E', 'E', 'C', 'C', 'C', 'C'],
    "Daniel Doidão": ['D', 'C', 'C', 'C', 'E', 'D', 'A', 'C', 'C', 'B'],
    "Eva Exigente": ['A', 'A', 'B', 'D', 'E', 'D', 'A', 'C', 'C', 'B']
}

for (let pessoa in alunos) {
    var pontos = 0;
    for (let i = 0; i < alunos[pessoa].length; i++) {
        if (alunos[pessoa][i] == gabarito.Algoritmos[i]) {
            pontos++;
        }
    }
    
    if (pontos >= 5) {
        console.log(pessoa + ' foi aprovado(a) com ' + pontos + ' ponto(s).');
    } else {
        console.log(pessoa + ' não foi aprovado(a) com ' + pontos + ' ponto(s).');
    }
}
