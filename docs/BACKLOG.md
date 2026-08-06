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

**Como** usuário,
**quero** não perder o que escrevi,
**para** não ter que digitar tudo de novo.

Pronto quando:
- os dados permanecem disponíveis após atualizar a página;
- as informações são restauradas automaticamente ao abrir a aplicação.
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

## Caixa de entrada

Anotações de conversa. Ninguém escreveu direito ainda.

- **V-10** — ideias paradas
- **V-11** — relatório por curso
- **V-12** — exportar / importar o estado

---

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
| V-02 |  | nada foi alterado | ... |
| V-03 || nada foi alterado | ... |
| V-04 || ... | ... |
| V-05 || nada foi alterado  | ... |
| V-06 || ... | ... |
| V-07 || nada foi alterado | ... |
| V-08 |feita, mas mal feita |a comunicação técnica foi retirada e foi adicionada comunicação de fácil compreensão| explicação de forma técnica, difícil pra alguém de fora do projeto compreender |
| V-09 | | nada foi alterado | ... |

