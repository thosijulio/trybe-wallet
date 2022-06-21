# trybe-wallet
Carteira de controle de gastos com conversor de moeda

## Sumário

- [O que foi desenvolvido](#o-que-foi-desenvolvido)
- [Instruções para rodar o projeto](#instruções-para-rodar-o-projeto)
- [Desenvolvimento](#desenvolvimento)
- [Habilidades](#habilidades)
- [Principais Páginas](#principais-páginas)
- [Deploy](#deploy)
- [Contato](#contato)

## O que foi desenvolvido

Desenvolvimento de uma carteira de controle de gastos com conversor de moedas, que consume a API de moedas da AwesomeAPI (https://docs.awesomeapi.com.br/api-de-moedas). Ao utilizar essa aplicação, um usuário é capaz de:

Adicionar e remover um gasto;
Visualizar uma tabelas com seus gastos;
Visualizar o total de gastos convertidos para uma moeda de escolha;

---

## Instruções para rodar o projeto

1. Clone o repositório

- `git clone git@github.com:thosijulio/trybe-wallet.git`.

- Entre na pasta do repositório que você acabou de clonar:
  - `cd trybe-wallet`

2. Instale as dependências

- `npm install`

4. Rode o projeto:

- `npm start`

---

## Desenvolvimento

Desenvolvi duas páginas (Login e Wallet) com diferentas rotas e alguns componentes para divisão de código.

Utilizei Redux como ferramenta de manipulação de estado.

Através dessa aplicação, é possível realizar as operações básicas de criação e manipulação de um estado de redux. O estado global foi separado com o seguinte formato:

```
{
  user: {
    email: '',
  },
  wallet: {
    totalExpenses: 0,
    expenses: []
  }
}
```

---

## Habilidades

Neste projeto, desenvolvi as seguintes habilidades:

- Compreensão do funcionamento de uma página utilizando React;

- Organização de rotas utilizando a biblioteca React Router;

- Fazer deploy utilizando o gh-pages;

- Utilização da Font Awesome para utilização de ícones;

- Utilização de Redux em aplicações React;

---

### Estilização

Utilizei a biblioteca de ícones Font Awesome, e para criar a paleta de cores da página, o site Coolors (https://coolors.co/). Esta aplicação não possui design responsivo, sendo possível apenas utiliza-la por uma tela com largura mínima de 1040px.

---

## Principais páginas

### Página de Login (/)

- Nessa tela é possível:
  -  Digitar usuário e senha (apenas uma simulação. A aplicação não possui um BD com cadastro de usuários);
  -  Entrar na aplicação;
  -  E-mail informado precisa ser válido "exemplo@exemplo.com";
  -  Senha deve possuir seis ou mais caracteres.

### Página de Carteira (/wallet):
Essa tela foi dividida em três componentes:

#### Header:
Esse componente possui:
  - O e-mail digitado na tela anterior;
  - A despesa total do usuário.

#### Formulário de adição de Despesa:
Esse componente possui:
  - Um formulário contendo valor, descrição, moeda, método de pagamento e tag, para adição de despesa;
  - Ao clicar no botão "adicionar despesa", os valores inseridos no formulário é salvo dentro da chave expenses no estado global, e a cotação do câmbio é salva no momento da adição da despesa, para garantir que o valor do câmbio não seja diferente posteriormente.
  - Após a despesa ser salva, o valor dela é somado ao valor total de despesas (Header).

#### Tabela de Gastos:
Esse componente possui:
  - Um cabeçalho com os mesmos campos do formulário;
  - A tabela é alimentada pelo estado global (wallet => expenses);
  - Cada despesa possui um botão de excluir, que ao ser clicado, remove a despesa do estado global e também altera o valor de despesa total.


---

## Deploy
  O deploy foi feito utilizando o git-hub pages. É possível acessar o site através do link: https://thosijulio.github.io/trybe-wallet

---

## Contato
Caso surga alguma dúvida, comentário ou sugestão sobre o projeto, não hesite em me contactar:
<p align=center>
Linkedin:<a href="https://www.linkedin.com/in/thosijulio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="thosijulio" height="20" width="20" /></a>
Github:<a href="https://www.github.com/thosijulio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="thosijulio" height="20" width="20" /></a>
Instagram:<a href="https://www.instagram.com/thosijulio" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="thosijulio" height="20" width="20" /></a>
</p>
