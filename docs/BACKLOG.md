# Backlog do Viveiro

> Documento herdado. Escrito ao longo do 1º semestre de 2026 pela equipe anterior.
> Última alteração: 2026-05-28.
>
> **Aviso de quem escreveu:** algumas destas histórias passaram pela revisão do
> cliente e outras não. Não me lembro quais. Boa sorte. — R.M.

---

## Histórias escritas

### V-01 — Página da pessoa

**Como** aluno que encontrou uma ideia interessante,
**quero** ver a página de quem a publicou,
**para** saber se temos interesses em comum antes de procurá-la.

Pronto quando:
- clicar no nome do autor, em qualquer cartão, abre a página dessa pessoa;
- a página mostra nome, tipo (aluno ou professor), curso e interesses;
- a página lista as ideias publicadas por essa pessoa, com o título clicável;
- se a pessoa não publicou nenhuma ideia, aparece a frase "ainda não publicou ideias" no lugar da lista vazia;
- existe um caminho de volta ao mural sem usar o botão do navegador.

---

### V-02 — Filtro por curso

**Como** professor,
**Quero** filtrar as  ideias do mural pelo curso do autor,
**Para** para encontrar facilmente projetos e pessoas de áreas específicas.

Pronto quando:
- Houver uma lista suspensa ou conjunto de botões com as opções de cursos;
- Ao selecionar um curso a tela atualiza (sem recarregar a página) para mostrar apenas as ideias de pessoas do curso escolhido;
- Se um curso for selecionado e não houver ideias publicadas por alunos daquele curso exibir a mensagem: "Nenhuma ideia encontrada para este curso no momento";

---

### V-03 — Publicar uma ideia

**Como** aluno com uma ideia na cabeça,
**quero** publicá-la sem depender de ninguém,
**para** que ela exista antes de eu esquecer.

Pronto quando:
- existe um formulário com título, resumo e tags;
- ao enviar, a ideia aparece no topo do mural imediatamente, sem recarregar a página;
- a ideia criada traz, como autor, o nome de quem está navegando, e a data de hoje;
- título vazio impede o envio e mostra uma mensagem dizendo o que falta;
- a contagem total de ideias exibida no mural aumenta em um.

---

### V-04 — Encontrar ideias que combinam comigo

**Como** aluno buscando projetos
**quero** encontrar rapidamente as ideias que cruzem com os meus interesses cadastrados,
**para** encontrar e descobrir rapidamente iniciativas onde minhas habilidades são úteis.

Pronto quando:
- uma aba ou seção específica chamada "Recomendadas para mim";
- O sistema comparar as tags cadastradas no perfil do usuário com as tags das ideias publicadas;
- A lista exibir apenas ideias que tenham pelo menos uma tag em comum com o perfil do usuário;
- As ideias forem ordenadas por relevância: aquelas com o maior número de tags aparecem primeiro;
- Se o usuário não tiver interesses cadastrados no perfil, exibir um aviso sugerindo: "Adicione interesses ao seu perfil para receber recomendações de ideias", com um link para a edição de perfil.

---

### V-05 — Entrar e sair de um grupo

**Como** aluno que quer se aproximar de um tema,
**quero** entrar num grupo,
**para** acompanhar o que se discute ali.

Pronto quando:
- a lista de grupos mostra, em cada grupo, se estou dentro ou fora;
- entrar acrescenta meu nome à lista de membros e o contador sobe;
- sair remove meu nome e o contador desce;
- a lista mostra os nomes dos membros, não apenas o número;
- trocar a pessoa em "navegando como" muda corretamente o que aparece como "meus grupos".

---
-----------------------------------
### V-06 — Estados da ideia

**Como** Autor de uma ideia,
**quero** poder mudar o status da minha publicação (ex: Semente, Germinando, Proposta),
**para** que outros saibam o estado que o projeto se encontra

Pronto quando:
- Apenas o autor da ideia (ou um administrador) puder alterar o status da ideia publicada;
- Toda ideia recém-publicada recebe, automaticamente, o status de "Semente";
- O autor puder acessar a página da sua ideia e selecionar entre os status: "Semente", "Germinando" e "Proposta";
- O status atual deve ficar visível de forma clara (ex: uma etiqueta customizada) no cartão da ideia no mural;

--------------------------------- Correção

Obs.: falamos em três estados — semente, germinando, proposta.

---

### V-07 — Registrar interesse em participar

**Como** aluno que quer entrar num projeto,
**quero** declarar interesse numa ideia,
**para** que quem a propôs saiba que pode me chamar.

Pronto quando:
- cada cartão tem um controle "tenho interesse em participar";
- ao acionar, meu nome passa a constar na lista de interessados daquela ideia;
- a mesma pessoa não consegue se registrar duas vezes na mesma ideia;
- é possível desfazer o interesse, e o nome sai da lista;
- o número de interessados exibido no cartão corresponde ao tamanho da lista.

---

### V-08 — Não perder o que foi escrito
**Como** usuário que está escrevendo uma nova ideia,
**quero** que meu progresso seja salvo automaticamente (rascunho),
**para** não perder as informações caso eu feche a aba, atualize a página sem querer ou perca a conexão.

Pronto quando:
- os dados inseridos no formulário forem salvos no `localStorage` (ex: usando `JSON.stringify`) a cada alteração ou em intervalos curtos;
- os dados forem recuperados do `localStorage` preenchendo os campos automaticamente no recarregamento da página;
- os dados temporários do `localStorage` forem limpos assim que a ideia for publicada com sucesso.

---

### V-09 — Aviso de novo interessado

**Como** aluno com uma ideia publicada,
**quero** receber uma notificação no celular quando alguém demonstrar interesse,
**para** não perder a chance de formar grupo.

Pronto quando:
- ao registrar interesse, o autor recebe uma notificação no celular em até um minuto;
- a notificação mostra o nome de quem se interessou e o título da ideia;
- tocar na notificação abre a ideia correspondente.

---
### V-10 — Ideias Paradas
**Como** administrador da plataforma (ou aluno visualizando o mural),
**quero** poder identificar ou arquivar ideias que estão sem nenhuma interação há muito tempo,
**para** manter o mural focado em projetos ativos, evitando poluição visual.

Pronto quando:
- ideias sem novos interessados ou sem mudança de status por mais de 30 dias (tempo configurável) receberem um marcador visual de "Inativa" ou "Parada";
- houver uma rotina que notifique o autor perguntando se ele deseja manter a ideia no mural ou arquivá-la;
- ideias arquivadas sumirem do mural principal, mas continuarem acessíveis no perfil do autor.

---

### V-11 — Relatório por Curso
**Como** coordenador ou administrador do sistema,
**quero** visualizar um relatório de engajamento agrupado pelo curso dos alunos,
**para** entender quais cursos estão propondo mais ideias e participando mais ativamente da plataforma.

Pronto quando:
- existir um painel (dashboard) acessível apenas para perfis com permissão;
- o sistema exibir uma tabela ou gráfico mostrando a quantidade de ideias propostas por curso;
- o sistema exibir a quantidade de alunos que demonstraram interesse em projetos, segmentados pelo seu curso de origem.

---

### V-12 — Busca por Palavras-chave
**Como** aluno em busca de um projeto para participar,
**quero** poder pesquisar ideias utilizando palavras-chave,
**para** encontrar rapidamente projetos que estejam alinhados às minhas habilidades tecnológicas ou áreas de interesse.

Pronto quando:
- houver uma barra de pesquisa facilmente visível na tela do mural de ideias;
- ao digitar um termo, a lista de ideias for filtrada, exibindo apenas as correspondentes;
- o filtro de pesquisa buscar ocorrências da palavra no título, na descrição e nas tags da ideia.
## Defeitos conhecidos

Nenhum destes foi priorizado. Estão aqui para não serem esquecidos.

- **B-01** — depois de clicar numa tag, não há como desfazer o filtro; só recarregando a página.
- **B-02** — quando a busca não encontra nada, o mural fica em branco, sem nenhuma explicação.
- **B-03** — a data aparece como `2026-03-14` em vez de `14/03/2026`.
- **B-04** — buscar `robotica` não encontra "Robótica"; buscar `Musica` não encontra "música".
- **B-05** — o número de apoios no cartão só muda depois que se refaz a busca.

- **B-06** — título comprido vaza para fora do cartão e atravessa o cartão vizinho.


## Registro da triagem — 30/07

| História | Situação em que foi recebida | O que foi alterado | Justificativa |
|---|---|---|---|
| V-02 | incompleta | O formato da história, bem como o critério de aceite | Não segue o formato de história de usuário, e o critério de aceite estava bastante ambíguo |
| V-03 | Completa | nada foi alterado | ... |
| V-04 || incompleta | A história e os detalhes | Os detalhes da história eram bastante subjetivos, não podendo ser "medidos" de maneira exata |
| V-05 | Completa | nada foi alterado  | ... |
| V-06 || ... | ... |
| V-07 | Completa | nada foi alterado | ... |
| V-08 || ... | ... |
| V-09 | Completa | nada foi alterado | ... |

