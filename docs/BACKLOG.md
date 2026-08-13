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

### V-06 — Estados da ideia

**Como** Autor de uma ideia,
**quero** poder mudar o status da minha publicação (ex: Semente, Germinando, Proposta),
**para** que outros saibam o estado que o projeto se encontra

Pronto quando:
- Apenas o autor da ideia (ou um administrador) puder alterar o status da ideia publicada;
- Toda ideia recém-publicada recebe, automaticamente, o status de "Semente";
- O autor puder acessar a página da sua ideia e selecionar entre os status: "Semente", "Germinando" e "Proposta";
- O status atual deve ficar visível de forma clara (ex: uma etiqueta customizada) no cartão da ideia no mural;

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

**Como** autor de uma ideia,
**quero** quero salvar o progresso da minha ideia,
**para** não perder o meu trabalho caso aconteça alguma eventualidade (internet caia, a página recarregue, feche a aba sem querer, entre outros).

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

### V-10 — Ideias paradas

**Como** administrador ou moderador do sistema,  
**quero** identificar e filtrar ideias que não recebem interações ou atualizações há mais de X dias,  
**para** poder arquivá-las ou contactar os autores e manter o mural atualizado.

Pronto quando:
- existir uma aba ou filtro exclusivo de moderação para "Ideias Inativas";
- o sistema considerar inativa qualquer ideia sem novos comentários, apoios ou edições há mais de 30 dias (ou parâmetro configurável);
- a lista exibir há quantos dias a ideia está sem interação;
- o moderador puder acionar a ação "Arquivar ideia" ou "Enviar lembrete ao autor".

---

### V-11 — Relatório por curso

**Como** coordenador de curso ou gestor da plataforma,  
**quero** visualizar um relatório com a quantidade de ideias e interações agrupadas por curso,  
**para** entender quais áreas da instituição estão mais engajadas com as iniciativas.

Pronto quando:
- houver uma página ou seção de estatísticas/relatórios acessível a gestores;
- o relatório exibir um gráfico ou tabela simples mostrando o número total de ideias criadas por alunos de cada curso;
- o relatório mostrar a taxa de participação (ex: número total de apoios/interesses por curso);
- for possível filtrar o período do relatório (ex: último mês, último semestre, todo o período).

---

### V-12 — Exportar e importar o estado

**Como** administrador do sistema,  
**quero** exportar todos os dados atuais da aplicação e importar um arquivo de estado prévio,  
**para** realizar backups de segurança e restaurar o sistema em caso de falhas ou testes.

Pronto quando:
- existir um botão "Exportar Estado" que baixa um arquivo (ex: `.json`) contendo todas as ideias, usuários e interações;
- existir um campo de upload "Importar Estado" que lê o arquivo e substitui/atualiza a base de dados atual;
- o sistema validar a estrutura do arquivo importado antes de aplicar as alterações, exibindo erro se o arquivo estiver corrompido;
- após a importação bem-sucedida, a tela recarregar exibindo os novos dados importados.
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
| V-01 | Completa e revisada pelo cliente. | Nada foi alterado | A história já estava no formato ideal (Como / Quero / Para) e com critérios claros. |
| V-02 | Incompleta (apenas título e critério genérico: "o filtro estiver funcionando"). | Reescrita no formato Como / Quero / Para e adicionados critérios de aceitação detalhados. | O requisito original não explicava a motivação do usuário nem definia o comportamento esperado do filtro. |
| V-03 | Completa e bem estruturada. | nada foi alterado | Já possuía estrutura adequada e critérios de aceitação objetivos. |
| V-04 | Muito genérica ("interface amigável", "busca rápida"). | Especificado o mecanismo de recomendação por tags/interesses e critérios mensuráveis de aceitação. | Critérios como "relevante" ou "amigável" eram ambíguos para o time de desenvolvimento. |
| V-05 | Completa e revisada pelo cliente. | nada foi alterado  | Detalhamento dos estados e contadores já estava claro e completo. |
| V-06 | V-06	Incompleta e genérica ("para que os estados fiquem registrados"). | Definida a regra de permissões (autor/admin), estado padrão ("Semente") e transições visuais. | A versão original apenas mencionava os nomes dos estados em uma observação solta. |
| V-07 | Completa e bem detalhada. | nada foi alterado | Regras de duplicidade e desfazimento já estavam bem especificadas. |
| V-08 | Incompleta (faltava a justificativa do "Para") | Completada a justificativa do usuário e detalhados os cenários de salvamento/restauração do estado.| Toda história de usuário precisa de uma motivação de valor bem definida. |
| V-09 | Completa, porém muito complexa. | porém de alta complexidade.	Mantido o escopo original, identificando riscos de infraestrutura (Push Notifications). | Desafiadora, mas está correta |
| V-10 | Rascunho na "Caixa de Entrada" (apenas o título "ideias paradas"). | Formatada como História de Usuário e criados critérios de aceitação (regra dos 30 dias de inatividade). | Precisava ser promovida de anotação solta para um requisito testável. |
| V-11 | Rascunho na "Caixa de Entrada" ("relatório por curso"). | Formatada como História de Usuário, definindo perfis de acesso (gestores) e métricas do relatório. | Anotações soltas não oferecem insumos suficientes para estimativa ou desenvolvimento. |
| V-12 | Rascunho na "Caixa de Entrada" ("exportar / importar o estado"). | Formatada como História de Usuário com validações de arquivo corrompido e recarregamento dos dados. |Requisito de alto risco que exigia regras claras de importação/exportação.|
