# Portfólio pessoal em React — Desafio DNC

Desenvolvi este portfólio durante minha formação em desenvolvimento web na Escola DNC. Nele, reuni minha apresentação pessoal, os trabalhos que realizei, minha trajetória acadêmica e profissional e meus contatos em uma página construída com React.

Meu objetivo foi aplicar os fundamentos de desenvolvimento de interfaces em uma apresentação própria. Organizei o conteúdo em componentes, reutilizei elementos visuais e acrescentei interações com JavaScript. Para a identidade visual, escolhi um cenário espacial, cards escuros e botões em gradiente.

**[Acessar a demonstração](https://desafio-react-dnc.vercel.app/)** · **[Conhecer os componentes](src/componentes/section)** · **[Consultar a primeira versão](https://github.com/EmanoelAngelo/desafio-react-dnc/tree/version-1)**

> Este repositório registra uma etapa da minha formação em 2024. As informações biográficas e as capturas correspondem à versão desenvolvida naquele período.

## Visão geral

![Visão geral do portfólio com fundo espacial, apresentação, cards de projetos e trajetória](https://github.com/EmanoelAngelo/desafio-react-dnc/assets/155268752/5e1c7254-c405-4d6f-bc5b-9fef0516aaef)

Nesta visão geral, mostro como distribuí o conteúdo ao longo da página: primeiro minha apresentação, depois os projetos e, na sequência, minha trajetória e meus contatos. Utilizei o fundo espacial para conectar visualmente essas seções e os cards para destacar cada trabalho.

Organizei os links para que você possa conhecer meus projetos, abrir suas demonstrações e acessar meus perfis profissionais.

## Apresentação e projetos

![Seção inicial com texto de apresentação animado, navegação e primeiros cards de projetos](https://github.com/EmanoelAngelo/desafio-react-dnc/assets/155268752/c467443e-7f48-4461-8335-a314a63060d8)

### Apresentação com efeito de digitação

Na abertura, combinei minha apresentação com uma frase animada. Fiz o texto alternar entre meu nome e as expressões “Desenvolvedor Front End” e “Product Manager”, digitando e apagando os caracteres em sequência.

Implementei essa interação no componente `Technology` com os hooks `useState` e `useEffect`. Incluí o botão “Saber mais!” para levar ao meu perfil do GitHub. Na navegação superior, acrescentei atalhos para as seções de projetos e trajetória, além dos links para meu GitHub e LinkedIn.

### Galeria de trabalhos

Na seção de projetos, reuni quatro cards com imagem, título, descrição e botão de acesso. Criei um componente React reutilizável para os cards e passei o conteúdo de cada trabalho por propriedades.

| Trabalho apresentado | Conteúdo descrito na galeria |
| --- | --- |
| Landing page de arquitetura | Página de uma empresa fictícia, desenvolvida como exercício de interface. |
| Landing page educacional DNC | Página com apresentação do curso, formulário, vídeo e depoimentos. |
| Consulta de endereço e clima | Interface de consulta com consumo de APIs. |
| Portfólio em React | Apresentação de um trabalho de portfólio desenvolvido com React. |

Direcionei os botões dos cards para as versões publicadas dos trabalhos. Com essa galeria, apresento um resumo de cada projeto e ofereço um caminho para você abrir e explorar cada aplicação.

## Trajetória e contato

![Seção Sobre mim com linha do tempo de 2017 a 2024 e rodapé de contato](https://github.com/EmanoelAngelo/desafio-react-dnc/assets/155268752/23859548-1bac-453c-b6ec-ede0f706b58f)

Na seção “Sobre mim”, organizei minha trajetória em uma linha do tempo com os marcos de **2017, 2021, 2022 e 2024**. Nos textos, relacionei minhas experiências em engenharia, tecnologia da informação, design e desenvolvimento web.

Escolhi essa organização para dar contexto aos meus projetos e mostrar o percurso que me levou ao desenvolvimento web. Para construir a seção, utilizei componentes de layout do React Bootstrap e estilos em CSS Modules.

No rodapé, concentrei meu telefone, meu e-mail e os links externos para facilitar o contato.

### Detalhe do e-mail

![Detalhe do endereço de e-mail exibido no rodapé do portfólio](https://github.com/EmanoelAngelo/desafio-react-dnc/assets/155268752/93acc719-4750-4cc2-902c-d6f8e4b3447b)

Nesta captura, destaco o endereço de e-mail que atualizei para receber contatos profissionais na versão apresentada. Incluí essa informação no rodapé para que você possa entrar em contato comigo por e-mail.

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

No arquivo [`src/App.jsx`](src/App.jsx), reuni as seções principais na ordem em que aparecem na página:

| Componente | Responsabilidade |
| --- | --- |
| `Navbar` | Navegação superior e links profissionais. |
| `Technology` | Apresentação pessoal e efeito de digitação. |
| `Projects` | Seleção dos trabalhos apresentados no portfólio. |
| `About` | Trajetória acadêmica e profissional em linha do tempo. |
| `Footer` | Contatos e links externos. |

Criei os componentes `Card`, `ButtonA` e `ButtonB` para reutilizar a estrutura dos cards e botões. Organizei as imagens, os estilos e os componentes em [`src/componentes/section`](src/componentes/section).

## O que aprendi e apliquei

- Dividi a página em componentes com responsabilidades específicas.
- Utilizei propriedades para reutilizar cards e botões.
- Trabalhei com estado e efeitos para controlar a animação de texto.
- Combinei CSS Modules com componentes de layout.
- Organizei uma galeria com links para as demonstrações dos meus trabalhos.
- Preservei versões e acompanhei as publicações do projeto.

## Evolução visual e histórico

Na atualização visual apresentada neste README, substituí o plano de fundo pela composição espacial e atualizei meu e-mail de contato. Mantive a proposta da página e a organização principal das seções.

Preservei uma versão anterior na branch [`version-1`](https://github.com/EmanoelAngelo/desafio-react-dnc/tree/version-1), para que seja possível comparar a evolução da apresentação.

<details>
<summary><strong>Ver as capturas existentes de versionamento e publicações</strong></summary>

### Consulta à versão anterior

![Seletor de branches do GitHub mostrando main e version-1](https://github.com/EmanoelAngelo/desafio-react-dnc/assets/155268752/7c7e5927-7c85-4eb1-9739-b27eb03eb12b)

Nesta imagem, mostro onde encontrar as branches `main` e `version-1` no repositório. Deixei a versão anterior disponível para que você possa compará-la com a apresentação atual.

### Registro de publicações

![Histórico de publicações na Vercel associado às alterações do projeto](https://github.com/EmanoelAngelo/desafio-react-dnc/assets/155268752/5d263db1-71be-4354-8586-f652d49aad0f)

Nesta captura, registrei as publicações associadas aos ajustes que fiz no fundo, no contato e na documentação. Mantive a imagem como parte do histórico de desenvolvimento daquele período; ela não representa uma verificação da disponibilidade atual de cada publicação.

</details>

## Como executar localmente

Para você executar meu projeto localmente, tenha Node.js e npm instalados e utilize os comandos abaixo:

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

Sou **Emanoel Angelo** e desenvolvi este projeto durante minha formação na Escola DNC.

[GitHub](https://github.com/EmanoelAngelo) · [LinkedIn](https://www.linkedin.com/in/emanoelangelo/)
