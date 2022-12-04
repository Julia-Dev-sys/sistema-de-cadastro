/* funções da pagina principal */


function botaoEntrarProfessor() {
    window.open('menu_professor.html', '_self');


}

function botaoEntrarAluno() {
    window.open('menu_aluno.html', '_self');

}

function botaoEntrarTurma() {
    window.open('menu_turma.html', '_self');

}

/* funções da pagina login */


function verificarMatricula(input, span) {

    let matricula = document.getElementById(input).value;
    matricula = limparTudo(matricula);
    document.getElementById(input).value = matricula;



    if (matricula.length === 0) {
        document.getElementById(span).innerHTML = "O campo deve conter 8 números!";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";
    }


    if (matricula.length === 8) {
        if (!contemCaracterEspecial(matricula)) {
            if (!contemLetra(matricula)) {
                if (!contemLetraMaiuscula(matricula)) {
                    if (!contemLetraMinuscula(matricula)) {
                        document.getElementById(input).style.borderColor = "green";
                        document.getElementById(span).innerHTML = "";
                    } else {
                        document.getElementById(span).innerHTML = "O campo deve conter apenas números!";
                        document.getElementById(span).style.color = "red";
                        document.getElementById(input).style.borderColor = "red";
                    }
                }
            }
        }
    }

}

function verificarCampoSenha(id) {

    let senha = document.getElementById(id).value;
    senha = limparTudo(senha);
    document.getElementById(id).value = senha;


    if (contemLetraMaiuscula(senha)) {
        document.getElementById("span_senha_Erro2").style.color = "green";
        document.getElementById("input_senha").style.borderColor = "green";
    } else {
        document.getElementById("span_senha_Erro2").style.color = "red";
    }

    if (contemLetraMinuscula(senha)) {
        document.getElementById("span_senha_Erro3").style.color = "green";
        document.getElementById("input_senha").style.borderColor = "green";
    } else {
        document.getElementById("span_senha_Erro3").style.color = "red";
    }

    if (contemNumero(senha)) {
        document.getElementById("span_senha_Erro4").style.color = "green";
        document.getElementById("input_senha").style.borderColor = "green";
    } else {
        document.getElementById("span_senha_Erro4").style.color = "red";
    }

}

function verificarSenha(id) {
    let senha = document.getElementById(id).value;
    senha = limparTudo(senha);
    document.getElementById(id).value = senha;

    if (senha.length === 0) {
        document.getElementById("span_senha").innerHTML = "Campo deve conter 8 caracteres.";
        document.getElementById("span_senha").style.color = "red";
        document.getElementById("input_senha").style.borderColor = "red";
    } else {
        document.getElementById("span_senha").innerHTML = "";
    }
}

function verificarConfirmaSenha() {

    let senha = document.getElementById("input_senha").value;
    let confirmaSenha = document.getElementById("input_senha_confirma").value;

    if (senha != "" && confirmaSenha != "" && senha === confirmaSenha) {
        document.getElementById("span_senha_confirma").innerHTML = "";
        document.getElementById("input_senha_confirma").style.borderColor = "green";
    } else {
        document.getElementById("span_senha_confirma").innerHTML = "Campos senha e confirma senha em branco ou não conferem.";
        document.getElementById("span_senha_confirma").style.color = "red";
        document.getElementById("input_senha_confirma").style.borderColor = "red";
    }



}

function verificarBotaoEntrar() {

    let senha = document.getElementById("input_senha").value;
    let confirmaSenha = document.getElementById("input_senha_confirma").value;
    let matricula = document.getElementById("input_matricula").value;


    if (matricula != "" && senha != "" && confirmaSenha != "" && senha == confirmaSenha) {
        window.open('menuPrincipal.html', '_blank');
        window.close();
    } else {
        alert("As senhas não combinam.");
    }
}

/* classes */

class Pessoa {
    constructor(nome, cpf, cep, rua, bairro, numero, complemento, cidade, uf, telefone, email, nascimento, matricula) {
        this.nome = nome;
        this.cpf = cpf;
        this.cep = cep;
        this.rua = rua;
        this.bairro = bairro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
        this.telefone = telefone;
        this.email = email;
        this.nascimento = nascimento;
        this.matricula = matricula;
    }


}

class Professor extends Pessoa {
    constructor(nome, cpf, cep, rua, bairro, numero, complemento, cidade, uf, telefone, email, nascimento, matricula, modalidade) {
        super(nome, cpf, cep, rua, bairro, numero, complemento, cidade, uf, telefone, email, nascimento, matricula);
        this.modalidade = modalidade;
    }
}

class Aluno extends Pessoa {
    constructor(nome, cpf, cep, rua, bairro, numero, complemento, cidade, uf, telefone, email, nascimento, matricula) {
        super(nome, cpf, cep, rua, bairro, numero, complemento, cidade, uf, telefone, email, nascimento, matricula);
    }
}

class Turma {
    constructor(matricula, modalidade, horario_inicio, horario_termino, dia, data_inicio, data_termino, turno) {
        this.matricula = matricula;
        this.modalidade = modalidade;
        this.horario_inicio = horario_inicio;
        this.horario_termino = horario_termino;
        this.dia = dia;
        this.data_inicio = data_inicio;
        this.data_termino = data_termino;
        this.turno = turno;

    }
}


/*  cadastro do professor */



function cadastrarProfessor(id_nome, id_cpf, id_cep, id_rua, id_bairro, id_numero, id_complemento, id_cidade, id_uf, id_telefone, id_email, id_nascimento, id_matricula, id_modalidade) {

    let professor = new Professor();

    professor.nome = document.getElementById(id_nome).value;
    professor.cpf = document.getElementById(id_cpf).value;
    professor.cep = document.getElementById(id_cep).value;
    professor.rua = document.getElementById(id_rua).value;
    professor.bairro = document.getElementById(id_bairro).value;
    professor.numero = document.getElementById(id_numero).value;
    professor.complemento = document.getElementById(id_complemento).value;
    professor.cidade = document.getElementById(id_cidade).value;
    professor.uf = document.getElementById(id_uf).value;
    professor.telefone = document.getElementById(id_telefone).value;
    professor.email = document.getElementById(id_email).value;
    professor.nascimento = document.getElementById(id_nascimento).value;
    professor.matricula = document.getElementById(id_matricula).value;
    professor.modalidade = document.getElementById(id_modalidade).value;
    var horaCadastro = new Date();

    if (professor.nome.length == "" && professor.cpf.length == "" && professor.cep.length == "" && professor.rua.length == "" && professor.bairro.length == "" && professor.numero.length == "" && professor.complemento.length == "" && professor.cidade.length == ""
        && professor.uf.length == "" && professor.telefone.length == "" && professor.email.length == "" && professor.nascimento.length == "" && professor.matricula.length == "" && professor.modalidade.length == "") {

        alert("Preencha todos os campos");
    }

    var cadastro = {
        nome : professor.nome,
        cpf : professor.cpf,
        cep : professor.cep,
        rua : professor.rua,
        bairro : professor.bairro,
        numero: professor.numero,
        complemento : professor.complemento,
        cidade : professor.cidade,
        uf : professor.uf,
        telefone : professor.telefone,
        email : professor.email,
        nascimento : professor.nascimento,
        matricula : professor.matricula,
        modalidade : professor.modalidade,
        dia : horaCadastro.getDay(),
        mes : horaCadastro.getMonth(),
        ano : horaCadastro.getFullYear(),
        hora : horaCadastro.getHours(),
        minuto : horaCadastro.getMinutes()
    };

    if(localStorage.getItem('professor') === null){
        var listaProfessor = [];
        listaProfessor.push(cadastro);
        localStorage.setItem('professor', JSON.stringify(listaProfessor));
    }else {
        var listaProfessor = JSON.parse(localStorage.getItem('professor'));
        listaProfessor.push(cadastro);
        localStorage.setItem('professor',JSON.stringify(listaProfessor));
    }

    document.getElementById('formulario').reset();


}

function exibirCadastroProfessor() {

    var listaProfessor = JSON.parse(localStorage.getItem('professor'));
    var dadosProfessor = document.getElementById("dados_professor");

    dadosProfessor.innerHTML +=

    "<table>" +
    "<thead>" +
    "<tr>" +
    "<th>Nome:</th>" +
    "<td>" + listaProfessor[listaProfessor.length - 1].nome + "</td>" +
    "</tr>" +
    "<tr>" +
    "<th>CPF:</th>" +
    "<td>" + listaProfessor[listaProfessor.length - 1].cpf + "</td>" +
    "</tr>" +
    "<tr>" +
    "<th>CEP:</th>" +
    "<td>" + listaProfessor[listaProfessor.length - 1].cep + "</td>" +
    "</tr>" +
    "<tr>" +
    "<th>Rua:</th>" +
    "<td>" + listaProfessor[listaProfessor.length - 1].rua + "</td>" +
    "</tr>" +
    "<tr>" +
    "<th>Bairro:</th>" +
    "<td>" + listaProfessor[listaProfessor.length - 1].bairro + "</td>" +
    "</tr>" +
    "<tr>" +
    "<th>Numero:</th>" +
    "<td>" + listaProfessor[listaProfessor.length - 1].numero + "</td>" +
    "</tr>" +
    "<tr>" +
    "<th>Complemento:</th>" +
    "<td>" + listaProfessor[listaProfessor.length - 1].complemento + "</td>" +
    "</tr>" +
    "<tr>" +
    "<th>Cidade:</th>" +
    "<td>" + listaProfessor[listaProfessor.length - 1].cidade + "</td>" +
    "</tr>" +
    "<tr>" +
    "<th>UF:</th>" +
    "<td>" + listaProfessor[listaProfessor.length - 1].uf + "</td>" +
    "</tr>" +
    "<tr>" +
    "<th>Telefone:</th>" +
    "<td>" + listaProfessor[listaProfessor.length - 1].telefone + "</td>" +
    "</tr>" +
    "<tr>" +
    "<th>E-mail:</th>" +
    "<td>" + listaProfessor[listaProfessor.length - 1].email + "</td>" +
    "</tr>" +
    "<tr>" +
    "<th>Nascimento:</th>" +
    "<td>" + listaProfessor[listaProfessor.length - 1].nascimento + "</td>" +
    "</tr>" +
    "<tr>" +
    "<th>Matricula:</th>" +
    "<td>" + listaProfessor[listaProfessor.length - 1].matricula + "</td>" +
    "</tr>" +
    "<tr>" +
    "<th>Modalidade:</th>" +
    "<td>" + listaProfessor[listaProfessor.length - 1].modalidade + "</td>" +
    "<th>Cadastro realizado em :  </th>" +
    "<td>" + listaProfessor[listaProfessor.length - 1].dia + "</td>" +
    "<th>/</th>" +
    "<td>" + listaProfessor[listaProfessor.length - 1].mes + "</td>" +
    "<th>/</th> " +
    "<td>" + listaProfessor[listaProfessor.length - 1].ano + "</td>  " +
    " <th>   Hora</th>" +
    "<td>" + listaProfessor[listaProfessor.length - 1].hora + "</td>" +
    "<th>:</th>" +
    "<td>" + listaProfessor[listaProfessor.length - 1].minuto + "</td>" +
    "</tr>" +
    "</thead>" +
    "</table>" +
    "<hr>";
        

    
}

function removeMatricula(matricula) {
    var cadastro = JSON.parse(localStorage.getItem('professor'));
    console.log(cadastro);

    for (var i = 0; i < cadastro.length; i++) {
        if (cadastro[i].matricula == matricula) {
           matricula.splice(i,1);
        }
    }

    localStorage.setItem('professor', JSON.stringify(cadastro));
    exibirCadastroProfessor();
}

function totalCadastroProfessor() {
    var professor = JSON.parse(localStorage.getItem('professor'));
    alert("Foram cadastrados " + professor.length + " professores");
}

/* cadastro dos alunos */

function cadastrarAluno(id_nome, id_cpf, id_cep, id_rua, id_bairro, id_numero, id_complemento, id_cidade, id_uf, id_telefone, id_email, id_nascimento, id_matricula) {

    let aluno = new Aluno();
    var horaCadastro = new Date();

    aluno.nome = document.getElementById(id_nome).value;
    aluno.cpf = document.getElementById(id_cpf).value;
    aluno.cep = document.getElementById(id_cep).value;
    aluno.rua = document.getElementById(id_rua).value;
    aluno.bairro = document.getElementById(id_bairro).value;
    aluno.numero = document.getElementById(id_numero).value;
    aluno.complemento = document.getElementById(id_complemento).value;
    aluno.cidade = document.getElementById(id_cidade).value;
    aluno.uf = document.getElementById(id_uf).value;
    aluno.telefone = document.getElementById(id_telefone).value;
    aluno.email = document.getElementById(id_email).value;
    aluno.nascimento = document.getElementById(id_nascimento).value;
    aluno.matricula = document.getElementById(id_matricula).value;

    if (aluno.nome.length == "" && aluno.cpf.length == "" && aluno.cep.length == "" && aluno.rua.length == "" && aluno.bairro.length == "" && aluno.numero.length == "" && aluno.complemento.length == "" && aluno.cidade.length == ""
        && aluno.uf.length == "" && aluno.telefone.length == "" && aluno.email.length == "" && aluno.nascimento.length == "" && aluno.matricula.length == "") {

        alert("Preencha todos os campos");
    }

    var cadastro = {

        nome : aluno.nome,
        cpf : aluno.cpf,
        cep : aluno.cep,
        rua : aluno.rua,
        bairro : aluno.bairro,
        numero : aluno.numero,
        complemento : aluno.complemento,
        cidade : aluno.cidade,
        uf : aluno.uf,
        telefone : aluno.telefone,
        email : aluno.email,
        nascimento : aluno.nascimento,
        matricula : aluno.matricula,
        dia : horaCadastro.getDay(),
        mes : horaCadastro.getMonth(),
        ano : horaCadastro.getFullYear(),
        hora : horaCadastro.getHours(),
        minuto : horaCadastro.getMinutes()
    };

    if(localStorage.getItem('aluno') === null){
        var listaAluno = [];
        listaAluno.push(cadastro);
        localStorage.setItem('aluno',JSON.stringify(listaAluno));
    } else {
        var listaAluno = JSON.parse(localStorage.getItem('aluno'));
        listaAluno.push(cadastro);
        localStorage.setItem('aluno',JSON.stringify(listaAluno));
    }

    document.getElementById('formulario').reset();

    
}

function exibirCadastroAluno() {

    var listaAluno = JSON.parse(localStorage.getItem('aluno'));
    var dadosAluno = document.getElementById("dados_aluno");

    dadosAluno.innerHTML +=

    "<table>" +
        "<thead>" +
        "<tr>" +
        "<th>Nome:</th>" +
        "<td>" + listaAluno[listaAluno.length - 1].nome + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>CPF:</th>" +
        "<td>" + listaAluno[listaAluno.length - 1].cpf + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>CEP:</th>" +
        "<td>" + listaAluno[listaAluno.length - 1].cep + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>Rua:</th>" +
        "<td>" + listaAluno[listaAluno.length - 1].rua + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>Bairro:</th>" +
        "<td>" + listaAluno[listaAluno.length - 1].bairro + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>Numero:</th>" +
        "<td>" + listaAluno[listaAluno.length - 1].numero + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>Complemento:</th>" +
        "<td>" + listaAluno[listaAluno.length - 1].complemento + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>Cidade:</th>" +
        "<td>" + listaAluno[listaAluno.length - 1].cidade + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>UF:</th>" +
        "<td>" + listaAluno[listaAluno.length - 1].uf + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>Telefone:</th>" +
        "<td>" + listaAluno[listaAluno.length - 1].telefone + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>E-mail:</th>" +
        "<td>" + listaAluno[listaAluno.length - 1].email + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>Nascimento:</th>" +
        "<td>" + listaAluno[listaAluno.length - 1].nascimento + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>Matricula:</th>" +
        "<td>" + listaAluno[listaAluno.length - 1].matricula + "</td>" +
        "<th>Cadastro realizado em:   </th>" +
        "<td>" + listaAluno[listaAluno.length - 1].dia + "</td>" +
        "<th>/</th>" +
        "<td>" + listaAluno[listaAluno.length - 1].mes + "</td>" +
        "<th>/</th> " +
        "<td>" + listaAluno[listaAluno.length - 1].ano + "</td>  " +
        "<th>   Hora</th>" +
        "<td>" + listaAluno[listaAluno.length - 1].hora + "</td>" +
        "<th> : </th>" +
        "<td>" + listaAluno[listaAluno.length - 1].minuto + "</td>" +
        "</tr>" +
        "</thead>" +
        "</table>" +
        "<hr>";


}

function totalCadastroAluno() {
    var aluno = JSON.parse(localStorage.getItem('aluno'));
    alert("Foram cadastrados " + aluno.length + "alunos");
}

/* cadastro de turmas */

function cadastrarTurma(id_matricula, id_modalidade, id_horario_inicio, id_horario_termino, id_dia, id_data_inicio, id_data_termino, id_turno) {

    let turma = new Turma();
    var horaCadastro = new Date();

    turma.matricula = document.getElementById(id_matricula).value;
    turma.modalidade = document.getElementById(id_modalidade).value;
    turma.horario_inicio = document.getElementById(id_horario_inicio).value;
    turma.horario_termino = document.getElementById(id_horario_termino).value;
    turma.dia = document.getElementById(id_dia).value;
    turma.data_inicio = document.getElementById(id_data_inicio).value;
    turma.data_termino = document.getElementById(id_data_termino).value;
    turma.turno = document.getElementById(id_turno).value;

    if (turma.matricula.length == "" && turma.modalidade.length == "" && turma.horario_inicio.length == "" && turma.horario_termino.length == "" && turma.dia.length == "" && turma.data_inicio.length == "" && turma.data_termino.length == "" && turma.turno.length == "") {

        alert("Preencha todos os campos");
    }

    var cadastro = {
        matricula : turma.matricula,
        modalidade : turma.modalidade,
        horario_inicio : turma.horario_inicio,
        horario_termino : turma.horario_termino,
        dia : turma.dia,
        data_inicio : turma.data_inicio,
        data_termino : turma.data_termino,
        turno : turma.turno,
        dia_cadastro : horaCadastro.getDate(),
        mes_cadastro : horaCadastro.getMonth(),
        ano_cadastro : horaCadastro.getFullYear(),
        hora_cadastro : horaCadastro.getHours(),
        minuto_cadastro : horaCadastro.getMinutes()
    };

    if(localStorage.getItem('turma') === null){
        var listaTurma = [];
        listaTurma.push(cadastro);
        localStorage.setItem('turma', JSON.stringify(listaTurma));
    }else{
        var listaTurma = JSON.parse(localStorage.getItem('turma'));
        listaTurma.push(cadastro);
        localStorage.setItem('turma',JSON.stringify(listaTurma));

    }

    document.getElementById('formulario').reset();

    

}

function exibirCadastroTurma() {

    var listaTurma = JSON.parse(localStorage.getItem('turma'));
    var dadosTurma = document.getElementById('dados_turma');

    dadosTurma.innerHTML +=

        "<table>" +
        "<thead>" +
        "<tr>" +
        "<th>Matricula:</th>" +
        "<td>" + listaTurma[listaTurma.length - 1].matricula + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>Modalidade:</th>" +
        "<td>" + listaTurma[listaTurma.length - 1].modalidade + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>Horário de inicio:</th>" +
        "<td>" + listaTurma[listaTurma.length - 1].horario_inicio + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>Horário de termino:</th>" +
        "<td>" + listaTurma[listaTurma.length - 1].horario_termino + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>Dia da Semana:</th>" +
        "<td>" + listaTurma[listaTurma.length - 1].dia + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>Data de inicio:</th>" +
        "<td>" + listaTurma[listaTurma.length - 1].data_inicio + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>Data de termino:</th>" +
        "<td>" + listaTurma[listaTurma.length - 1].data_termino + "</td>" +
        "</tr>" +
        "<tr>" +
        "<th>Turno:</th>" +
        "<td>" + listaTurma[listaTurma.length - 1].turno + "</td>" +
        "<th>Cadastro realizado em :  </th>" +
        "<td>" + listaTurma[listaTurma.length - 1].dia_cadastro + "</td>" +
        "<th>/</th>" +
        "<td>" + listaTurma[listaTurma.length - 1].mes_cadastro + "</td>" +
        "<th>/</th> " +
        "<td>" + listaTurma[listaTurma.length - 1].ano_cadastro + "</td>  " +
        " <th>   Hora</th>" +
        "<td>" + listaTurma[listaTurma.length - 1].hora_cadastro + "</td>" +
       "<th>:</th>" +
       "<td>" + listaTurma[listaTurma.length - 1].minuto_cadastro + "</td>" +
        "</tr>" +
        "</thead>" +
        "</table>" +
        "<hr>";
}

function totalCadastroTurma() {
    alert(" Foram cadastrados " + listaTurma.length + " turmas ");
}

/* cadastro de professores e alunos em turmas */

function cadastrarProfessorNaTurma(select,dados){

const professoresSelect = document.getElementById("select_cadastro_professor_turma");
const professoresCadastrados = localStorage.getItem('professor');

for(nome in professoresCadastrados){
    op = new Option(professoresCadastrados);
    professoresSelect.options[professoresSelect.length] = op;
}

}

function cadastrarAlunoNaTurma(){
    const alunoSelect = document.getElementById("select_cadastro_aluno_turma");
}




/* funções genéricas */

function limparCampoNome(x) {

    x = x.trim();

    while (x.includes("  ")) {
        x = x.replace(" ", " ");
    }

    return x;
}

function verificarCampoNome(input, span) {

    let nome = document.getElementById(input).value;
    nome = limparCampoNome(nome);
    document.getElementById(input).value = nome;

    if (nome.length < 3) {

        document.getElementById(span).innerHTML = "Campo nome vazio.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemCaracterEspecial(nome)) {

        document.getElementById(span).innerHTML = "Não pode conter caracteres especiais.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemNumero(nome)) {

        document.getElementById(span).innerHTML = "Não pode conter números.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemLetraMaiuscula(nome)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    } else if (contemLetraMinuscula(nome)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    }
}

function verificarCampoCpf(input, span) {

    let cpf = document.getElementById(input).value;
    cpf = limparTudo(cpf);
    document.getElementById(input).value = cpf;

    if (cpf.length == 0) {

        document.getElementById(span).innerHTML = "Campo CPF vazio.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemNumero(cpf)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    } else if (contemLetraMaiuscula(cpf)) {

        document.getElementById(span).innerHTML = "Campo CPF não pode conter letras.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemLetraMinuscula(cpf)) {

        document.getElementById(span).innerHTML = "Campo CPF não pode conter letras.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    }

}

function verificarCampoCep(input, span) {

    let cep = document.getElementById(input).value;
    cep = limparTudo(cep);
    document.getElementById(input).value

    if (cep.length == 0) {

        document.getElementById(span).innerHTML = "Campo CEP vazio.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemNumero(cep)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    } else if (contemLetraMaiuscula(cep)) {

        document.getElementById(span).innerHTML = "Campo CEP não pode conter letras.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemLetraMinuscula(cep)) {

        document.getElementById(span).innerHTML = "Campo CEP não pode conter letras.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    }
}

function verificarCampoRua(input, span) {

    let rua = document.getElementById(input).value;
    rua = limparCampoNome(rua);
    document.getElementById(input).value = rua;

    if (rua.length == 0) {

        document.getElementById(span).innerHTML = "Campo rua vazio.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemCaracterEspecial(rua)) {

        document.getElementById(span).innerHTML = "Não pode conter caracteres especiais.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemNumero(rua)) {

        document.getElementById(span).innerHTML = "Campo não pode conter números.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemLetraMaiuscula(rua)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    } else if (contemLetraMinuscula(rua)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById("input_rua_professor").style.borderColor = "green";
    }
}

function verificarCampoBairro(input, span) {

    let bairro = document.getElementById(input).value;
    bairro = limparCampoNome(bairro);
    document.getElementById(input).value = bairro;

    if (bairro.length == 0) {

        document.getElementById(span).innerHTML = "Campo bairro vazio.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemCaracterEspecial(bairro)) {

        document.getElementById(span).innerHTML = "Não pode conter caracteres especiais.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemNumero(bairro)) {

        document.getElementById(span).innerHTML = "Não pode conter números.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemLetraMaiuscula(bairro)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    } else if (contemLetraMinuscula(bairro)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    }
}

function verificarCampoNumero(input, span) {

    let numero = document.getElementById(input).value;
    numero = limparTudo(numero);
    document.getElementById(input).value = numero;

    if (numero.length == 0) {

        document.getElementById(span).innerHTML = "Campo número vazio.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemCaracterEspecial(numero)) {

        document.getElementById(span).innerHTML = "Não pode conter caracteres especiais.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemNumero(numero)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    } else if (contemLetraMaiuscula(numero)) {

        document.getElementById(span).innerHTML = "Não pode conter letras.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemLetraMinuscula(numero)) {

        document.getElementById(span).innerHTML = "Não pode conter letras.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";
    }
}

function verificarCampoComplemento(input, span) {

    let complemento = document.getElementById(input).value;
    complemento = limparCampoNome(complemento);
    document.getElementById(input).value = complemento;

    if (complemento.length == 0) {

        document.getElementById(span).innerHTML = "Campo complemento vazio.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemCaracterEspecial(complemento)) {

        document.getElementById(span).innerHTML = "Não pode conter caracteres especiais.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemNumero(complemento)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    } else if (contemLetraMaiuscula(complemento)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    } else if (contemLetraMinuscula(complemento)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    }
}

function verificarCampoCidade(input, span) {

    let cidade = document.getElementById(input).value;
    cidade = limparCampoNome(cidade);
    document.getElementById(input).value = cidade;

    if (cidade.length == 0) {

        document.getElementById(span).innerHTML = "Campo cidade vazio.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemCaracterEspecial(cidade)) {

        document.getElementById(span).innerHTML = "Não pode conter caracteres especiais.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemNumero(cidade)) {

        document.getElementById(span).innerHTML = "Não pode conter números.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemLetraMaiuscula(cidade)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    } else if (contemLetraMinuscula(cidade)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    }
}

function verificarCampoUf(select, span) {

    let uf = document.getElementById(select).value;


    if (uf.length == "") {

        document.getElementById(span).innerHTML = "Campo UF vazio.";
        document.getElementById(span).style.color = "red";
        document.getElementById(select).style.borderColor = "red";
    } else if (contemUF(uf)) {
        document.getElementById(span).innerHTML = "";
        document.getElementById(select).style.borderColor = "green";
    }
}

function verificarCampoTelefone(input, span) {

    let telefone = document.getElementById(input).value;


    if (telefone.length == 0) {

        document.getElementById(span).innerHTML = "Campo telefone vazio.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemNumero(telefone)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    } else if (contemLetraMaiuscula(telefone)) {

        document.getElementById(span).innerHTML = "Telefone inválido";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemLetraMinuscula(telefone)) {

        document.getElementById(span).innerHTML = "Telefone inválido";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";
    }
}

function verificarCampoEmail(input, span) {

    let email = document.getElementById(input).value;
    email = limparTudo(email);
    document.getElementById(input).value = email;


    if (email.length == 0) {

        document.getElementById(span).innerHTML = "Campo email vazio.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (email.includes("@") || email.includes(".") || email.includes(".com") || email.includes(".br")) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    } else if (contemLetraMaiuscula(email)) {

        document.getElementById(span).innerHTML = "não pode conter letras maiúsculas.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemNumero(email)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    } else if (contemLetraMinuscula(email)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";
    }
}

function verificarCampoNascimento(input, span) {

    let data = document.getElementById(input).value;
    data = limparTudo(data);
    document.getElementById(input).value = data;

    if (data.length == 0) {

        document.getElementById(span).innerHTML = "Campo nascimento vazio.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemLetraMaiuscula(data)) {

        document.getElementById(span).innerHTML = "Não pode conter letras maiúsculas.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemLetraMinuscula(data)) {

        document.getElementById(span).innerHTML = "Não pode conter letras.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemNumero(data)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    } else if (data.includes("/")) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";
    }

}

function verificarCampoMatricula(input, span) {

    let matricula = document.getElementById(input).value;
    matricula = limparTudo(matricula);
    document.getElementById(input).value = matricula;

    if (matricula.length == 0) {

        document.getElementById(span).innerHTML = "Campo matricula vazio.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemLetraMaiuscula(matricula)) {

        document.getElementById(span).innerHTML = "Não pode conter letras maiúsculas.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemLetraMinuscula(matricula)) {

        document.getElementById(span).innerHTML = "Não pode conter letras.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemNumero(matricula)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    } else if (contemCaracterEspecial(matricula)) {

        document.getElementById(span).innerHTML = "Não pode conter caracteres especiais.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";
    }



}

function verificarCampoMatriculaTurma(input,span){

    let matricula = document.getElementById(input).value;
    matricula = limparTudo(matricula);
    document.getElementById(input).value = matricula;

    if (matricula.length == 0) {

        document.getElementById(span).innerHTML = "Campo matricula vazio.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemLetraMaiuscula(matricula)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    } else if (contemLetraMinuscula(matricula)) {

        document.getElementById(span).innerHTML = "Não pode conter letras minúsculas.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";

    } else if (contemNumero(matricula)) {

        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";

    } else if (contemCaracterEspecial(matricula)) {

        document.getElementById(span).innerHTML = "Não pode conter caracteres especiais.";
        document.getElementById(span).style.color = "red";
        document.getElementById(input).style.borderColor = "red";
    }
}

function verificarCampoModalidade(select, span) {

    let modalidade = document.getElementById(select).value;

    if (modalidade == "") {

        document.getElementById(span).innerHTML = "Campo modalidade vazio.";
        document.getElementById(span).style.color = "red";
        document.getElementById(select).style.borderColor = "red";

    } else if (contemModalidade(modalidade)) {
        document.getElementById(span).innerHTML = "";
        document.getElementById(select).style.borderColor = "green";
    }
}

function contemNumero(x) { // funcao para verificar se um caracter é numero.

    if (x.includes("0") || x.includes("1") || x.includes("2") || x.includes("3") || x.includes("4") || x.includes("5")
        || x.includes("6") || x.includes("7") || x.includes("8") || x.includes("9")) {

        return true;

    } else {

        return false;
    }
}

function contemLetraMaiuscula(x) { // funcao para verificar se contem letras maiusculas no campo SENHA

    if (x.includes("A") || x.includes("B") || x.includes("C") || x.includes("D") ||
        x.includes("E") || x.includes("F") || x.includes("G") || x.includes("H") ||
        x.includes("I") || x.includes("J") || x.includes("K") || x.includes("L") ||
        x.includes("M") || x.includes("N") || x.includes("O") || x.includes("P") ||
        x.includes("Q") || x.includes("R") || x.includes("S") || x.includes("T") ||
        x.includes("U") || x.includes("V") || x.includes("W") || x.includes("X") ||
        x.includes("Y") || x.includes("Z")) {
        return true;
    } else {
        return false;
    }
}

function contemLetraMinuscula(x) {// funcao para verificar se contem letras minusculas no campo SENHA
    if (x.includes("a") || x.includes("b") || x.includes("c") || x.includes("d") ||
        x.includes("e") || x.includes("f") || x.includes("g") || x.includes("h") ||
        x.includes("i") || x.includes("j") || x.includes("k") || x.includes("l") ||
        x.includes("m") || x.includes("n") || x.includes("o") || x.includes("p") ||
        x.includes("q") || x.includes("r") || x.includes("s") || x.includes("t") ||
        x.includes("u") || x.includes("v") || x.includes("w") || x.includes("x") ||
        x.includes("y") || x.includes("z")) {
        return true;
    } else {
        return false;
    }
}

function contemCaracterEspecial(x) { // funcao para verificar se contem caracteres especiais
    if (x.includes("!") || x.includes("#") || x.includes("$") || x.includes("%") || x.includes("&") ||
        x.includes("*") || x.includes("(") || x.includes(")") || x.includes("-") || x.includes("_") || x.includes(",") ||
        x.includes("/") || x.includes("|") || x.includes("\\") || x.includes("\'") || x.includes("\"") || x.includes("?") ||
        x.includes("[") || x.includes("]") || x.includes("{") || x.includes("}") || x.includes(";") || x.includes("@")) {
        return true;
    } else {
        return false;
    }
}

function contemSobrenome(input, span) { // funcao para verificar se contem um sobrenome no campo NOME

    nome = document.getElementById(input).value;

    if (!nome.includes(" ")) {
        document.getElementById(span).innerHTML = "Insira um sobrenome";
        document.getElementById(span).style.color = "red";
    } else {
        document.getElementById(span).innerHTML = "";
        document.getElementById(input).style.borderColor = "green";
    }
}

function limparTudo(x) { // funcao para retirar TODOS os espaços vazios.

    x = x.trim();

    while (x.includes(" ")) {
        x = x.replace(" ", "");
    }

    return x;

}

function preencherCpf(x) {// funcao para inserir pontos e traço no cpf assim que digitar

    let cpf = document.getElementById(x).value;
    if (cpf.length == 3) {
        document.getElementById(x).value = cpf + ".";
    }

    if (cpf.length == 7) {
        document.getElementById(x).value = cpf + ".";
    }

    if (cpf.length == 11) {
        document.getElementById(x).value = cpf + "-";
    }

    cpf = document.getElementById(x).value;
    cpf = cpf.replace("..", ".");
    cpf = cpf.replace("--", "-");
    document.getElementById(x).value = cpf;
}

function preencherCep(x) { // funcao para inserir traço no cep assim que digitar

    let cep = document.getElementById(x).value;

    if (cep.length == 5) {
        document.getElementById(x).value = cep + "-";
    }

    cep = document.getElementById(x).value;
    cep = cep.replace("--", "-");
    document.getElementById(x).value = cep;
}

function contemUF(x) {// verifica se contem a UF selecionada

    switch (x) {
        case "AC": case "AL": case "AM": case "AP":
        case "BA": case "CE": case "DF": case "ES":
        case "GO": case "MA": case "MT": case "MS":
        case "MG": case "PA": case "PB": case "PR":
        case "PE": case "PI": case "RJ": case "RN":
        case "RS": case "RO": case "RR": case "SC":
        case "SP": case "SE": case "TO":
            return true;

        default:
            return false;


    }
}

function preencherTelefone(x) { // funcao para preencher automaticamente o parenteses no telefone

    let telefone = document.getElementById(x).value;

    if (telefone.length == 0) {
        document.getElementById(x).value = telefone + "(";
    }
    if (telefone.length == 3) {
        document.getElementById(x).value = telefone + ") ";
    }

    telefone = document.getElementById(x).value;
    telefone = telefone.replace("((", "(");
    telefone = telefone.replace("))", ")");
    document.getElementById(x).value = telefone;
}

function preencherEmail(input) { // funcao para eliminar possiveis erros de digitacao no email

    let email = document.getElementById(input).value;

    email = email.replace("..", ".");
    email.replace("@@", "@");
    document.getElementById(input).value = email;
}

function preencherDataNascimento(input) { // funcao para inserir barras na data de nascimento e eliminar possiveis erros de digitacao

    let data = document.getElementById(input).value;

    if (data.length == 2) {
        document.getElementById(input).value = data + "/";
    } else if (data.length == 5) {
        document.getElementById(input).value = data + "/";
    }

    data = document.getElementById(input).value;
    data = data.replace("//", "/");
    document.getElementById(input).value = data;
}

function contemModalidade(x) { // funcao para verificar se contem a modalidade selecionada

    switch (x) {
        case "Musculaçao": case "Natação":
        case "CrossFit": case "Localizada":
        case "Yoga":
            return true;

        default:
            return false;
    }
}





