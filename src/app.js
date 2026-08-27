/* =========================================================
   VIVEIRO — LÓGICA DA PÁGINA
   V-01 — Página da pessoa
   V-02 — Filtro por curso
   V-08 — Não perder o que foi escrito
   ========================================================= */


/* ---------------------------------------------------------
   ESTADO DA APLICAÇÃO
--------------------------------------------------------- */

var estado = {
  pessoa: null,
  busca: "",
  tag: null,
  curso: null,
  aba: "mural",
  grupoSelecionado: null,

  /* V-01 */
  pagina: "mural",
  pessoaVisualizada: null
};


/* =========================================================
   V-08 — SALVAR E RESTAURAR
========================================================= */

function salvarProgresso() {

  try {

    localStorage.setItem(
      "viveiro_estado",
      JSON.stringify(estado)
    );

    localStorage.setItem(
      "viveiro_ideias",
      JSON.stringify(DADOS.ideias)
    );

  } catch (erro) {

    console.log(
      "Não foi possível salvar os dados:",
      erro
    );
  }
}


function restaurarProgresso() {

  try {

    var estadoSalvo =
      localStorage.getItem(
        "viveiro_estado"
      );

    var ideiasSalvas =
      localStorage.getItem(
        "viveiro_ideias"
      );


    /* ---------------- estado ---------------- */

    if (estadoSalvo) {

      var recuperado =
        JSON.parse(
          estadoSalvo
        );

      if (recuperado) {

        estado.pessoa =
          recuperado.pessoa ?? null;

        estado.busca =
          recuperado.busca || "";

        estado.tag =
          recuperado.tag || null;

        estado.curso =
          recuperado.curso || null;

        estado.aba =
          recuperado.aba || "mural";

        estado.grupoSelecionado =
          recuperado.grupoSelecionado ?? null;

        estado.pagina =
          recuperado.pagina || "mural";

        estado.pessoaVisualizada =
          recuperado.pessoaVisualizada ?? null;
      }
    }


    /* ---------------- ideias ---------------- */

    if (ideiasSalvas) {

      var ideias =
        JSON.parse(
          ideiasSalvas
        );

      if (Array.isArray(ideias)) {

        DADOS.ideias =
          ideias;
      }
    }

  } catch (erro) {

    console.log(
      "Erro ao restaurar progresso:",
      erro
    );

    localStorage.removeItem(
      "viveiro_estado"
    );

    localStorage.removeItem(
      "viveiro_ideias"
    );
  }
}


/* =========================================================
   ATALHOS AOS DADOS
========================================================= */

function pessoaPorId(id) {

  for (
    var i = 0;
    i < DADOS.pessoas.length;
    i++
  ) {

    if (
      DADOS.pessoas[i].id === id
    ) {

      return DADOS.pessoas[i];
    }
  }

  return null;
}


function nomeDe(id) {

  var pessoa =
    pessoaPorId(id);

  return pessoa
    ? pessoa.nome
    : "(desconhecido)";
}


function ideiaPorId(id) {

  for (
    var i = 0;
    i < DADOS.ideias.length;
    i++
  ) {

    if (
      DADOS.ideias[i].id === id
    ) {

      return DADOS.ideias[i];
    }
  }

  return null;
}


function grupoPorId(id) {

  for (
    var i = 0;
    i < DADOS.grupos.length;
    i++
  ) {

    if (
      DADOS.grupos[i].id === id
    ) {

      return DADOS.grupos[i];
    }
  }

  return null;
}


/* =========================================================
   FILTRAGEM
========================================================= */

function ideiasVisiveis() {

  var resultado = [];


  for (
    var i = 0;
    i < DADOS.ideias.length;
    i++
  ) {

    var ideia =
      DADOS.ideias[i];


    /* ---------------- busca ---------------- */

    var casaTexto = true;

    if (
      estado.busca !== ""
    ) {

      var texto =
        (
          ideia.titulo +
          " " +
          ideia.resumo
        ).toLowerCase();

      casaTexto =
        texto.includes(
          estado.busca.toLowerCase()
        );
    }


    /* ---------------- tag ---------------- */

    var casaTag = true;

    if (
      estado.tag !== null
    ) {

      casaTag =
        ideia.tags &&
        ideia.tags.indexOf(
          estado.tag
        ) >= 0;
    }


    /* ---------------- V-02 — curso ---------------- */

    var casaCurso = true;

    if (
      estado.curso !== null &&
      estado.curso !== ""
    ) {

      var autor =
        pessoaPorId(
          ideia.autor
        );

      if (autor) {

        casaCurso =
          String(autor.curso) ===
          String(estado.curso);

      } else {

        casaCurso = false;
      }
    }


    /* ---------------- grupo ---------------- */

    var casaGrupo = true;

    if (
      estado.grupoSelecionado !== null
    ) {

      var grupo =
        grupoPorId(
          estado.grupoSelecionado
        );

      if (grupo) {

        casaGrupo =
          grupo.membros.indexOf(
            ideia.autor
          ) >= 0;
      }
    }


    /* ---------------- resultado ---------------- */

    if (
      casaTexto &&
      casaTag &&
      casaCurso &&
      casaGrupo
    ) {

      resultado.push(
        ideia
      );
    }
  }


  return resultado;
}


/* =========================================================
   DESENHO PRINCIPAL
========================================================= */

function desenhar() {

  /* V-01 */

  if (
    estado.pagina === "pessoa"
  ) {

    desenharPaginaPessoa();

    return;
  }


  desenharSeletorDePessoas();

  desenharFiltroDeCursos();

  desenharMural();

  desenharGrupos();


  var base =
    document.getElementById(
      "base"
    );

  if (base) {

    base.textContent =
      "base " + DADOS.codigo;
  }
}


/* =========================================================
   SELETOR DE PESSOAS
========================================================= */

function desenharSeletorDePessoas() {

  var alvo =
    document.getElementById(
      "quem"
    );

  if (!alvo) {
    return;
  }


  if (
    alvo.options.length === 0
  ) {

    for (
      var i = 0;
      i < DADOS.pessoas.length;
      i++
    ) {

      var pessoa =
        DADOS.pessoas[i];

      var opcao =
        document.createElement(
          "option"
        );

      opcao.value =
        pessoa.id;

      opcao.textContent =
        pessoa.nome +
        " (" +
        pessoa.curso +
        ")";

      alvo.appendChild(
        opcao
      );
    }
  }


  if (
    estado.pessoa !== null
  ) {

    alvo.value =
      estado.pessoa;
  }
}


/* =========================================================
   V-02 — FILTRO DE CURSO
========================================================= */

function desenharFiltroDeCursos() {

  var alvo =
    document.getElementById(
      "filtro-curso"
    );

  if (!alvo) {
    return;
  }


  alvo.innerHTML = "";


  /* Todos */

  var todos =
    document.createElement(
      "option"
    );

  todos.value = "";

  todos.textContent =
    "Todos os cursos";

  alvo.appendChild(
    todos
  );


  /* descobrir cursos */

  var cursos = [];


  for (
    var i = 0;
    i < DADOS.pessoas.length;
    i++
  ) {

    var curso =
      DADOS.pessoas[i].curso;

    if (
      curso &&
      cursos.indexOf(curso) === -1
    ) {

      cursos.push(
        curso
      );
    }
  }


  /* criar opções */

  for (
    var i = 0;
    i < cursos.length;
    i++
  ) {

    var opcao =
      document.createElement(
        "option"
      );

    opcao.value =
      cursos[i];

    opcao.textContent =
      cursos[i];

    alvo.appendChild(
      opcao
    );
  }


  alvo.value =
    estado.curso || "";
}


/* =========================================================
   MURAL
========================================================= */

function desenharMural() {

  var lista =
    ideiasVisiveis();


  var alvo =
    document.getElementById(
      "cartoes"
    );

  if (!alvo) {
    return;
  }


  alvo.innerHTML = "";


  /* V-02 — nenhuma ideia */

  if (
    estado.curso !== null &&
    estado.curso !== "" &&
    lista.length === 0
  ) {

    var mensagem =
      document.createElement(
        "p"
      );

    mensagem.className =
      "nenhuma-ideia";

    mensagem.textContent =
      "Nenhuma ideia encontrada para este curso no momento";

    alvo.appendChild(
      mensagem
    );

  } else {

    for (
      var i = 0;
      i < lista.length;
      i++
    ) {

      alvo.appendChild(
        montarCartao(
          lista[i]
        )
      );
    }
  }


  /* contador */

  var contagem =
    document.getElementById(
      "contagem"
    );

  if (contagem) {

    contagem.textContent =
      lista.length +
      " de " +
      DADOS.ideias.length +
      " ideias";
  }


  /* aviso */

  var aviso =
    document.getElementById(
      "filtro-ativo"
    );

  if (!aviso) {
    return;
  }


  if (
    estado.curso !== null &&
    estado.curso !== ""
  ) {

    aviso.textContent =
      "Mostrando ideias do curso: " +
      estado.curso;

  } else if (
    estado.tag !== null
  ) {

    aviso.textContent =
      "Mostrando apenas ideias com a etiqueta: " +
      estado.tag;

  } else if (
    estado.grupoSelecionado !== null
  ) {

    var grupo =
      grupoPorId(
        estado.grupoSelecionado
      );

    if (grupo) {

      aviso.textContent =
        "Projetos do grupo: " +
        grupo.nome;
    }

  } else {

    aviso.textContent = "";
  }
}


/* =========================================================
   CARTÕES
========================================================= */

function montarCartao(ideia) {

  var cartao =
    document.createElement(
      "div"
    );

  cartao.className =
    "cartao";


  /* ---------------- título ---------------- */

  var titulo =
    document.createElement(
      "h3"
    );

  titulo.textContent =
    ideia.titulo;

  cartao.appendChild(
    titulo
  );


  /* ---------------- V-01 — autor ---------------- */

  var autoria =
    document.createElement(
      "div"
    );

  autoria.className =
    "autoria";


  var autor =
    document.createElement(
      "button"
    );

  autor.type =
    "button";

  autor.className =
    "autor-clicavel";

  autor.textContent =
    nomeDe(
      ideia.autor
    );


  autor.onclick =
    function() {

      abrirPaginaPessoa(
        ideia.autor
      );
    };


  autoria.appendChild(
    autor
  );


  autoria.appendChild(
    document.createTextNode(
      " · " +
      ideia.data
    )
  );


  cartao.appendChild(
    autoria
  );


  /* ---------------- resumo ---------------- */

  var resumo =
    document.createElement(
      "p"
    );

  resumo.className =
    "resumo";

  resumo.textContent =
    ideia.resumo;

  cartao.appendChild(
    resumo
  );


  /* ---------------- tags ---------------- */

  var tags =
    document.createElement(
      "div"
    );

  tags.className =
    "tags";


  for (
    var i = 0;
    i < ideia.tags.length;
    i++
  ) {

    var etiqueta =
      document.createElement(
        "span"
      );

    etiqueta.className =
      "etiqueta";

    etiqueta.textContent =
      ideia.tags[i];

    etiqueta.onclick =
      criarCliqueDeTag(
        ideia.tags[i]
      );

    tags.appendChild(
      etiqueta
    );
  }


  cartao.appendChild(
    tags
  );


  /* ---------------- rodapé ---------------- */

  var rodape =
    document.createElement(
      "div"
    );

  rodape.className =
    "rodape";


  /* ---------------- apoiar ---------------- */

  var botao =
    document.createElement(
      "button"
    );

  botao.className =
    "apoiar";

  botao.textContent =
    "apoiar";


  if (
    ideia.apoiadoPor &&
    ideia.apoiadoPor.indexOf(
      estado.pessoa
    ) >= 0
  ) {

    botao.textContent =
      "apoiado ✓";

    botao.disabled =
      true;

    botao.style.opacity =
      "0.6";

    botao.style.cursor =
      "default";
  }


  botao.onclick =
    criarCliqueDeApoio(
      ideia.id
    );


  rodape.appendChild(
    botao
  );


  /* ---------------- contador ---------------- */

  var contador =
    document.createElement(
      "span"
    );

  contador.className =
    "apoios";

  contador.textContent =
    ideia.apoios +
    " apoios";


  rodape.appendChild(
    contador
  );


  cartao.appendChild(
    rodape
  );


  return cartao;
}


/* =========================================================
   V-01 — ABRIR PÁGINA DA PESSOA
========================================================= */

function abrirPaginaPessoa(id) {

  var pessoa =
    pessoaPorId(id);

  if (!pessoa) {
    return;
  }


  estado.pagina =
    "pessoa";

  estado.pessoaVisualizada =
    id;


  salvarProgresso();

  desenharPaginaPessoa();
}


/* =========================================================
   V-01 — DESENHAR PÁGINA DA PESSOA
========================================================= */

function desenharPaginaPessoa() {

  var pessoa =
    pessoaPorId(
      estado.pessoaVisualizada
    );


  if (!pessoa) {

    voltarParaMural();

    return;
  }


  /* esconder mural */

  var mural =
    document.getElementById(
      "mural"
    );

  if (mural) {

    mural.className =
      "escondido";
  }


  /* esconder grupos */

  var grupos =
    document.getElementById(
      "grupos"
    );

  if (grupos) {

    grupos.className =
      "escondido";
  }


  /* procurar página */

  var pagina =
    document.getElementById(
      "pagina-pessoa"
    );


  /* criar se não existir */

  if (!pagina) {

    pagina =
      document.createElement(
        "section"
      );

    pagina.id =
      "pagina-pessoa";


    var muralOriginal =
      document.getElementById(
        "mural"
      );


    if (
      muralOriginal &&
      muralOriginal.parentNode
    ) {

      muralOriginal.parentNode.insertBefore(
        pagina,
        muralOriginal.nextSibling
      );

    } else {

      document.body.appendChild(
        pagina
      );
    }
  }


  pagina.innerHTML = "";

  pagina.style.display =
    "block";


  /* =====================================================
     BOTÃO VOLTAR
  ===================================================== */

  var voltar =
    document.createElement(
      "button"
    );

  voltar.type =
    "button";

  voltar.className =
    "voltar-pessoa";

  voltar.textContent =
    "← Voltar para o mural";


  voltar.onclick =
    function() {

      voltarParaMural();
    };


  pagina.appendChild(
    voltar
  );


  /* =====================================================
     NOME
  ===================================================== */

  var titulo =
    document.createElement(
      "h1"
    );

  titulo.textContent =
    pessoa.nome;


  pagina.appendChild(
    titulo
  );


  /* =====================================================
     TIPO
  ===================================================== */

  var tipo =
    document.createElement(
      "p"
    );

  tipo.innerHTML =
    "<strong>Tipo:</strong> " +
    (
      pessoa.tipo ||
      "Não informado"
    );


  pagina.appendChild(
    tipo
  );


  /* =====================================================
     CURSO
  ===================================================== */

  var curso =
    document.createElement(
      "p"
    );

  curso.innerHTML =
    "<strong>Curso:</strong> " +
    (
      pessoa.curso ||
      "Não informado"
    );


  pagina.appendChild(
    curso
  );


  /* =====================================================
     INTERESSES
  ===================================================== */

  var interessesTitulo =
    document.createElement(
      "h2"
    );

  interessesTitulo.textContent =
    "Interesses";


  pagina.appendChild(
    interessesTitulo
  );


  var interesses =
    document.createElement(
      "p"
    );


  if (
    Array.isArray(
      pessoa.interesses
    )
  ) {

    interesses.textContent =
      pessoa.interesses.join(
        ", "
      );

  } else {

    interesses.textContent =
      pessoa.interesses ||
      "Não informado";
  }


  pagina.appendChild(
    interesses
  );


  /* =====================================================
     IDEIAS PUBLICADAS
  ===================================================== */

  var ideiasTitulo =
    document.createElement(
      "h2"
    );

  ideiasTitulo.textContent =
    "Ideias publicadas";


  pagina.appendChild(
    ideiasTitulo
  );


  var ideiasPessoa = [];


  for (
    var i = 0;
    i < DADOS.ideias.length;
    i++
  ) {

    if (
      DADOS.ideias[i].autor ===
      pessoa.id
    ) {

      ideiasPessoa.push(
        DADOS.ideias[i]
      );
    }
  }


  /* =====================================================
     NENHUMA IDEIA
  ===================================================== */

  if (
    ideiasPessoa.length === 0
  ) {

    var vazio =
      document.createElement(
        "p"
      );

    vazio.textContent =
      "ainda não publicou ideias";


    pagina.appendChild(
      vazio
    );


    return;
  }


  /* =====================================================
     LISTA DE IDEIAS
  ===================================================== */

  var lista =
    document.createElement(
      "ul"
    );

  lista.className =
    "ideias-da-pessoa";


  for (
    var i = 0;
    i < ideiasPessoa.length;
    i++
  ) {

    var ideia =
      ideiasPessoa[i];


    var item =
      document.createElement(
        "li"
      );


    var link =
      document.createElement(
        "button"
      );

    link.type =
      "button";

    link.className =
      "titulo-ideia";

    link.textContent =
      ideia.titulo;


    link.onclick =
      criarCliqueNaIdeia(
        ideia.id
      );


    item.appendChild(
      link
    );


    lista.appendChild(
      item
    );
  }


  pagina.appendChild(
    lista
  );
}


/* =========================================================
   V-01 — CLICAR NA IDEIA DA PESSOA
========================================================= */

function criarCliqueNaIdeia(idIdeia) {

  return function() {

    estado.pagina =
      "mural";

    estado.pessoaVisualizada =
      null;

    /*
      Remove filtros para garantir
      que a ideia apareça.
    */

    estado.busca = "";

    estado.tag = null;

    estado.curso = null;

    estado.grupoSelecionado =
      null;


    salvarProgresso();


    /* esconder página */

    var pagina =
      document.getElementById(
        "pagina-pessoa"
      );

    if (pagina) {

      pagina.style.display =
        "none";
    }


    /* mostrar mural */

    var mural =
      document.getElementById(
        "mural"
      );

    if (mural) {

      mural.className =
        "";
    }


    trocarAba(
      "mural"
    );


    desenhar();


    /*
      Localiza a ideia e rola
      até o cartão.
    */

    setTimeout(
      function() {

        var ideia =
          ideiaPorId(
            idIdeia
          );

        if (!ideia) {
          return;
        }


        var cartoes =
          document.querySelectorAll(
            ".cartao"
          );


        for (
          var i = 0;
          i < cartoes.length;
          i++
        ) {

          var titulo =
            cartoes[i].querySelector(
              "h3"
            );


          if (
            titulo &&
            titulo.textContent ===
            ideia.titulo
          ) {

            cartoes[i].scrollIntoView({
              behavior: "smooth",
              block: "center"
            });

            break;
          }
        }

      },
      100
    );
  };
}


/* =========================================================
   V-01 — VOLTAR PARA O MURAL
========================================================= */

function voltarParaMural() {

  estado.pagina =
    "mural";

  estado.pessoaVisualizada =
    null;


  salvarProgresso();


  var pagina =
    document.getElementById(
      "pagina-pessoa"
    );

  if (pagina) {

    pagina.style.display =
      "none";
  }


  var mural =
    document.getElementById(
      "mural"
    );

  if (mural) {

    mural.className =
      "";
  }


  trocarAba(
    "mural"
  );


  desenharMural();
}


/* =========================================================
   GRUPOS
========================================================= */

function desenharGrupos() {

  var alvo =
    document.getElementById(
      "lista-grupos"
    );


  if (!alvo) {
    return;
  }


  alvo.innerHTML = "";


  /* grupo selecionado */

  if (
    estado.grupoSelecionado !== null
  ) {

    var grupo =
      grupoPorId(
        estado.grupoSelecionado
      );


    if (!grupo) {

      estado.grupoSelecionado =
        null;

      return;
    }


    /* voltar */

    var voltar =
      document.createElement(
        "button"
      );

    voltar.className =
      "voltar-grupo";

    voltar.textContent =
      "← Voltar para todos os grupos";


    voltar.onclick =
      function() {

        estado.grupoSelecionado =
          null;

        salvarProgresso();

        desenharGrupos();

        desenharMural();
      };


    alvo.appendChild(
      voltar
    );


    /* título */

    var titulo =
      document.createElement(
        "h2"
      );

    titulo.className =
      "titulo-grupo";

    titulo.textContent =
      grupo.nome;


    alvo.appendChild(
      titulo
    );


    /* descrição */

    var descricao =
      document.createElement(
        "p"
      );

    descricao.textContent =
      grupo.descricao;


    alvo.appendChild(
      descricao
    );


    /* projetos */

    var projetos =
      document.createElement(
        "div"
      );

    projetos.className =
      "projetos-grupo";


    var encontrou =
      false;


    for (
      var i = 0;
      i < DADOS.ideias.length;
      i++
    ) {

      var ideia =
        DADOS.ideias[i];


      if (
        grupo.membros.indexOf(
          ideia.autor
        ) >= 0
      ) {

        encontrou =
          true;


        var projeto =
          document.createElement(
            "div"
          );

        projeto.className =
          "projeto-grupo";


        var nomeProjeto =
          document.createElement(
            "strong"
          );

        nomeProjeto.textContent =
          ideia.titulo;


        projeto.appendChild(
          nomeProjeto
        );


        var autor =
          document.createElement(
            "span"
          );

        autor.textContent =
          nomeDe(
            ideia.autor
          );


        projeto.appendChild(
          autor
        );


        var resumo =
          document.createElement(
            "p"
          );

        resumo.textContent =
          ideia.resumo;


        projeto.appendChild(
          resumo
        );


        projetos.appendChild(
          projeto
        );
      }
    }


    if (!encontrou) {

      var vazio =
        document.createElement(
          "p"
        );

      vazio.textContent =
        "Este grupo ainda não tem projetos publicados.";


      projetos.appendChild(
        vazio
      );
    }


    alvo.appendChild(
      projetos
    );


    return;
  }


  /* lista de grupos */

  for (
    var i = 0;
    i < DADOS.grupos.length;
    i++
  ) {

    var grupo =
      DADOS.grupos[i];


    var item =
      document.createElement(
        "li"
      );

    item.className =
      "grupo-clicavel";


    item.onclick =
      function(id) {

        return function() {

          estado.grupoSelecionado =
            id;

          salvarProgresso();

          desenharGrupos();

          desenharMural();
        };

      }(grupo.id);


    var quantos =
      document.createElement(
        "span"
      );

    quantos.className =
      "quantos";

    quantos.textContent =
      grupo.membros.length +
      " membros";


    item.appendChild(
      quantos
    );


    var nome =
      document.createElement(
        "span"
      );

    nome.className =
      "nome";

    nome.textContent =
      grupo.nome;


    item.appendChild(
      nome
    );


    var descricao =
      document.createElement(
        "p"
      );

    descricao.className =
      "descricao";

    descricao.textContent =
      grupo.descricao;


    item.appendChild(
      descricao
    );


    alvo.appendChild(
      item
    );
  }
}


/* =========================================================
   TAGS
========================================================= */

function criarCliqueDeTag(tag) {

  return function() {

    estado.tag =
      tag;

    estado.curso =
      null;

    estado.grupoSelecionado =
      null;


    salvarProgresso();


    trocarAba(
      "mural"
    );


    desenhar();
  };
}


/* =========================================================
   APOIAR
========================================================= */

function criarCliqueDeApoio(idIdeia) {

  return function() {

    var ideia =
      ideiaPorId(
        idIdeia
      );


    if (!ideia) {
      return;
    }


    if (!ideia.apoiadoPor) {

      ideia.apoiadoPor = [];
    }


    if (
      ideia.apoiadoPor.indexOf(
        estado.pessoa
      ) >= 0
    ) {

      return;
    }


    ideia.apoiadoPor.push(
      estado.pessoa
    );


    ideia.apoios++;


    /* V-08 */

    salvarProgresso();


    desenharMural();
  };
}


/* =========================================================
   ABAS
========================================================= */

function trocarAba(qual) {

  estado.aba =
    qual;


  salvarProgresso();


  var mural =
    document.getElementById(
      "mural"
    );

  var grupos =
    document.getElementById(
      "grupos"
    );

  var abaMural =
    document.getElementById(
      "aba-mural"
    );

  var abaGrupos =
    document.getElementById(
      "aba-grupos"
    );


  if (mural) {

    mural.className =
      qual === "mural"
        ? ""
        : "escondido";
  }


  if (grupos) {

    grupos.className =
      qual === "grupos"
        ? ""
        : "escondido";
  }


  if (abaMural) {

    abaMural.className =
      qual === "mural"
        ? "aba ativa"
        : "aba";
  }


  if (abaGrupos) {

    abaGrupos.className =
      qual === "grupos"
        ? "aba ativa"
        : "aba";
  }
}


/* =========================================================
   INÍCIO
========================================================= */

function iniciar() {

  /* V-08 — restaurar */

  restaurarProgresso();


  /* pessoa padrão */

  if (
    estado.pessoa === null &&
    DADOS.pessoas.length > 0
  ) {

    estado.pessoa =
      DADOS.pessoas[0].id;
  }


  /* =====================================================
   BUSCA
   ===================================================== */
var busca = document.getElementById("busca");
if (busca) {
    busca.value = estado.busca;
    busca.oninput = function (e) {
        estado.busca = e.target.value;
        salvarProgresso();
        desenharMural();
    };
}

/* =====================================================
   PUBLICAR NOVA IDEIA
   ===================================================== */
var formPublicar = document.getElementById("form-publicar");
if (formPublicar) {
    formPublicar.onsubmit = function (e) {
        e.preventDefault();

        var titulo = document.getElementById("titulo-novo").value.trim();
        var resumo = document.getElementById("resumo-novo").value.trim();
        var tagsStr = document.getElementById("tags-novo").value.trim();
        var erro = document.getElementById("erro-novo");

        if (titulo === "" || resumo === "" || tagsStr === "") {
            erro.textContent = "Por favor, preencha todos os campos.";
            return;
        }
        erro.textContent = "";

        var tagsArray = tagsStr.split(",").map(function (t) {
            return t.trim();
        }).filter(function (t) {
            return t !== "";
        });

        var novaIdeia = {
            id: Date.now(),
            titulo: titulo,
            resumo: resumo,
            autor: estado.pessoa,
            data: new Date().toLocaleDateString('pt-BR'),
            tags: tagsArray,
            apoios: 0,
            apoiadoPor: []
        };

        DADOS.ideias.unshift(novaIdeia);
        salvarProgresso();
        desenharMural();

        formPublicar.reset();
    };
}

  /* =====================================================
     PESSOA
  ===================================================== */

  var quem =
    document.getElementById(
      "quem"
    );


  if (quem) {

    quem.onchange =
      function(e) {

        estado.pessoa =
          Number(
            e.target.value
          );


        salvarProgresso();


        desenharMural();
      };
  }


  /* =====================================================
     V-02 — FILTRO DE CURSO
  ===================================================== */

  var filtroCurso =
    document.getElementById(
      "filtro-curso"
    );


  if (filtroCurso) {

    filtroCurso.onchange =
      function(e) {

        if (
          e.target.value === ""
        ) {

          /*
            Voltar para todos
          */

          estado.curso =
            null;

        } else {

          estado.curso =
            e.target.value;
        }


        /*
          Limpa outros filtros
          para o curso funcionar
          sozinho.
        */

        estado.tag =
          null;

        estado.grupoSelecionado =
          null;


        salvarProgresso();


        desenharMural();
      };
  }


  /* =====================================================
     ABA MURAL
  ===================================================== */

  var abaMural =
    document.getElementById(
      "aba-mural"
    );


  if (abaMural) {

    abaMural.onclick =
      function() {

        trocarAba(
          "mural"
        );

        desenharMural();
      };
  }


  /* =====================================================
     ABA GRUPOS
  ===================================================== */

  var abaGrupos =
    document.getElementById(
      "aba-grupos"
    );


  if (abaGrupos) {

    abaGrupos.onclick =
      function() {

        trocarAba(
          "grupos"
        );

        desenharGrupos();
      };
  }


  /* =====================================================
     DESENHO INICIAL
  ===================================================== */

  desenhar();


  /*
    Se estava na página de uma pessoa
    quando fechou a página, restaura.
  */

  if (
    estado.pagina === "pessoa" &&
    estado.pessoaVisualizada !== null
  ) {

    desenharPaginaPessoa();

  } else {

    estado.pagina =
      "mural";

    trocarAba(
      estado.aba || "mural"
    );
  }
}


/* =========================================================
   EXECUTAR
========================================================= */

iniciar();
