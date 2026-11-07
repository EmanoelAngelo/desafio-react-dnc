# Portfólio pessoal em React — Desafio DNC

Portfólio desenvolvido por **Emanoel Angelo** durante a formação em desenvolvimento web da Escola DNC. O projeto reúne apresentação pessoal, trabalhos realizados, trajetória acadêmica e profissional e informações de contato em uma página construída com React.

A proposta foi aplicar os fundamentos de desenvolvimento de interfaces em uma apresentação própria: organizar o conteúdo em componentes, reutilizar elementos visuais e acrescentar interações com JavaScript. A identidade utiliza um cenário espacial, cards escuros e botões em gradiente.

**[Acessar a demonstração](https://desafio-react-dnc.vercel.app/)** · **[Conhecer os componentes](src/componentes/section)** · **[Consultar a primeira versão](https://github.com/EmanoelAngelo/desafio-react-dnc/tree/version-1)**

> Este repositório registra uma etapa da minha formação em 2024. As informações biográficas e as capturas correspondem à versão desenvolvida naquele período.

## Visão geral

![Visão geral do portfólio com fundo espacial, apresentação, cards de projetos e trajetória](https://github.com/EmanoelAngelo/desafio-react-dnc/assets/155268752/5e1c7254-c405-4d6f-bc5b-9fef0516aaef)

A visão geral mostra como o conteúdo foi distribuído ao longo da página: primeiro a apresentação, depois os projetos e, na sequência, a trajetória e os contatos. O fundo espacial conecta visualmente essas seções, enquanto os cards destacam cada trabalho.

O visitante pode conhecer os projetos, abrir suas demonstrações e acessar os perfis profissionais pelos links disponíveis na interface.

## Apresentação e projetos

![Seção inicial com texto de apresentação animado, navegação e primeiros cards de projetos](https://github.com/EmanoelAngelo/desafio-react-dnc/assets/155268752/c467443e-7f48-4461-8335-a314a63060d8)

### Apresentação com efeito de digitação

A abertura combina uma introdução pessoal com uma frase animada. O texto alterna entre o nome do autor e as expressões “Desenvolvedor Front End” e “Product Manager”, digitando e apagando os caracteres em sequência.

Essa interação foi implementada no componente `Technology` com os hooks `useState` e `useEffect`. O botão “Saber mais!” direciona ao perfil do GitHub. A navegação superior inclui atalhos para as seções de projetos e trajetória, além dos links para GitHub e LinkedIn.

### Galeria de trabalhos

A seção de projetos apresenta quatro cards com imagem, título, descrição e botão de acesso. Cada card utiliza o mesmo componente React, recebendo seu conteúdo por propriedades.

| Trabalho apresentado | Conteúdo descrito na galeria |
| --- | --- |
| Landing page de arquitetura | Página de uma empresa fictícia, desenvolvida como exercício de interface. |
| Landing page educacional DNC | Página com apresentação do curso, formulário, vídeo e depoimentos. |
| Consulta de endereço e clima | Interface de consulta com consumo de APIs. |
| Portfólio em React | Apresentação de um trabalho de portfólio desenvolvido com React. |

Os botões dos cards apontam para as versões publicadas dos trabalhos. A galeria funciona como uma seleção de projetos: o visitante encontra um resumo e pode abrir cada aplicação para explorá-la.

## Trajetória e contato

![Seção Sobre mim com linha do tempo de 2017 a 2024 e rodapé de contato](https://github.com/EmanoelAngelo/desafio-react-dnc/assets/155268752/23859548-1bac-453c-b6ec-ede0f706b58f)

A seção “Sobre mim” organiza a trajetória em uma linha do tempo com os marcos de **2017, 2021, 2022 e 2024**. Os textos relacionam experiências em engenharia, tecnologia da informação, design e desenvolvimento web.

Essa organização acrescenta contexto aos projetos: além de visualizar as interfaces, o visitante pode conhecer o percurso que levou ao seu desenvolvimento. A implementação utiliza componentes de layout do React Bootstrap e estilos em CSS Modules.

No rodapé, telefone, e-mail e links externos concentram os caminhos de contato.

### Detalhe do e-mail

![Detalhe do endereço de e-mail exibido no rodapé do portfólio](https://github.com/EmanoelAngelo/desafio-react-dnc/assets/155268752/93acc719-4750-4cc2-902c-d6f8e4b3447b)

A captura destaca a atualização do endereço de e-mail utilizado para contato profissional na versão apresentada. Trata-se de uma informação exibida no rodapé, não de um formulário de envio de mensagens.

## Tecnologias utilizadas

| Tecnologia | Aplicação no projeto |
| --- | --- |
| React 18 | Construção e composição dos componentes da interface. |
| JavaScript e JSX | Lógica da aplicação, propriedades dos componentes e efeito de digitação. |
| HTML e CSS | Estrutura dos elementos e apresentação visual. |
| CSS Modules | Estilos associados aos componentes, como cards, botões e seções. |
| Bootstrap e React Bootstrap | Grade de layout e componentes utilizados na organização da página. |
| React Icons | Ícones de redes e serviços externos. |
| Vite | Ambiente de desenvolvimento e geração da versão de distribuição. |
| ESLint | Análise estática do código. |
| Vercel | Plataforma indicada pelo endereço de publicação da demonstração. |

## Organização dos componentes

O arquivo [`src/App.jsx`](src/App.jsx) reúne as seções principais na ordem de exibição:

| Componente | Responsabilidade |
| --- | --- |
| `Navbar` | Navegação superior e links profissionais. |
| `Technology` | Apresentação pessoal e efeito de digitação. |
| `Projects` | Seleção dos trabalhos apresentados no portfólio. |
| `About` | Trajetória acadêmica e profissional em linha do tempo. |
| `Footer` | Contatos e links externos. |

Os componentes `Card`, `ButtonA` e `ButtonB` permitem reutilizar a estrutura dos cards e botões. Imagens, estilos e componentes estão organizados em [`src/componentes/section`](src/componentes/section).

## Aprendizados aplicados

- Divisão de uma página em componentes com responsabilidades específicas.
- Passagem de propriedades para reutilizar cards e botões.
- Uso de estado e efeitos para controlar uma animação de texto.
- Combinação de CSS Modules com componentes de layout.
- Organização de uma galeria com links para demonstrações.
- Preservação de versões e acompanhamento das publicações.

## Evolução visual e histórico

A atualização documentada neste README alterou o plano de fundo para a composição espacial e atualizou o e-mail de contato. A proposta da página e a organização principal das seções foram mantidas.

A branch [`version-1`](https://github.com/EmanoelAngelo/desafio-react-dnc/tree/version-1) preserva uma versão anterior, permitindo consultar a evolução da apresentação.

<details>
<summary><strong>Ver as capturas existentes de versionamento e publicações</strong></summary>

### Consulta à versão anterior

![Seletor de branches do GitHub mostrando main e version-1](https://github.com/EmanoelAngelo/desafio-react-dnc/assets/155268752/7c7e5927-7c85-4eb1-9739-b27eb03eb12b)

A imagem mostra o seletor de branches do repositório, com `main` e `version-1`. Esse registro indica onde consultar a versão preservada para comparação com a apresentação atual.

### Registro de publicações

![Histórico de publicações na Vercel associado às alterações do projeto](https://github.com/EmanoelAngelo/desafio-react-dnc/assets/155268752/5d263db1-71be-4354-8586-f652d49aad0f)

A captura registra publicações associadas a alterações no projeto, incluindo ajustes no fundo, no contato e na documentação. Ela documenta o histórico daquele período, sem representar uma verificação da disponibilidade atual de cada publicação.

</details>

## Como executar localmente

Com Node.js e npm instalados:

```bash
git clone https://github.com/EmanoelAngelo/desafio-react-dnc.git
cd desafio-react-dnc
npm install
npm run dev
```

Abra o endereço informado pelo Vite no terminal.

Outros comandos disponíveis no projeto:

| Comando | Finalidade |
| --- | --- |
| `npm run build` | Gerar os arquivos de distribuição. |
| `npm run preview` | Visualizar localmente a distribuição após o build. |
| `npm run lint` | Executar a análise estática configurada. |

## Autor

**Emanoel Angelo** — projeto desenvolvido no contexto da formação na Escola DNC.

[GitHub](https://github.com/EmanoelAngelo) · [LinkedIn](https://www.linkedin.com/in/emanoelangelo/)
