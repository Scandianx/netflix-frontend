### Documentação do Frontend

---

## 1. Visão Geral do Projeto

O frontend desta aplicação foi desenvolvido utilizando **React.js**, uma biblioteca popular para criação de interfaces de usuário. O objetivo é fornecer uma interface amigável e responsiva para que os usuários possam se cadastrar, realizar login, explorar filmes, adicionar favoritos e visualizar detalhes de filmes.

### Tecnologias Utilizadas

- **React.js**: Framework principal para a criação da interface.
- **CSS**: Para estilização dos componentes, garantindo uma experiência de usuário fluida.
- **Axios**: Para realizar requisições HTTP.
- **LocalStorage**: Para armazenar e recuperar o token JWT do usuário após o login, facilitando a autenticação contínua.

---

## 2. Estrutura do Frontend

A estrutura do frontend foi organizada em componentes reutilizáveis, que juntos compõem as principais funcionalidades da aplicação. Abaixo estão descrições dos principais componentes e suas funcionalidades.

---

### 2.1 Componentes do Frontend

#### **2.1.1 `Banner`**
- **Arquivo**: `src/components/Banner.js`
- **Descrição**: 
  - O componente `Banner` exibe um destaque do filme na parte superior da página principal. Ele contém uma imagem de fundo (pôster do filme), título, descrição, e botões de ação, como "Assistir" e "Favoritos".
  - Funções importantes:
    - `truncate()`: Função que limita o número de caracteres da descrição do filme.
  - **Responsabilidade**: Fornecer um destaque visual do filme com opções de interação para o usuário.

#### **2.1.2 `Login`**
- **Arquivo**: `src/components/Login.jsx`
- **Descrição**:
  - O componente `Login` é responsável por autenticar o usuário no sistema. Ele contém um formulário para o login via e-mail e senha.
  - **Validações**:
    - Verifica se o e-mail tem um formato válido.
    - A senha deve ter entre 4 e 60 caracteres.
  - **Integração**:
    - Envia uma requisição POST para o endpoint `/auth/login`, e, se a autenticação for bem-sucedida, o token JWT é armazenado no **localStorage**.
  - **Responsabilidade**: Gerenciar o processo de login dos usuários.

#### **2.1.3 `MovieDetails`**
- **Arquivo**: `src/components/MovieDetails.jsx`
- **Descrição**:
  - Este componente exibe os detalhes de um filme específico, incluindo o pôster, a sinopse, a data de lançamento e a classificação.
  - **Funções importantes**:
    - `truncateOverview()`: Limita o número de caracteres da sinopse do filme.
    - `handleFavoriteClick()`: Adiciona ou remove o filme da lista de favoritos do usuário através de uma requisição POST para o endpoint `/favs`.
  - **Responsabilidade**: Exibir informações detalhadas de um filme e permitir que o usuário o adicione/remova dos favoritos.

#### **2.1.4 `MoviesList`**
- **Arquivo**: `src/components/MoviesList.jsx`
- **Descrição**:
  - Exibe uma lista de filmes com base nos dados recebidos como props. Cada pôster de filme é clicável e aciona a função `onPosterClick`.
  - **Responsabilidade**: Renderizar a lista de filmes, permitindo que o usuário clique para ver detalhes de cada filme.

#### **2.1.5 `Movies`**
- **Arquivo**: `src/components/Movies.jsx`
- **Descrição**:
  - Exibe várias seções de filmes, como "Favoritos", "Populares" e "Lançamentos", obtidas a partir do backend.
  - **Integração**:
    - Realiza uma requisição GET para o endpoint `/movies/homepage`, passando o token JWT do usuário para personalizar as seções exibidas.
  - **Responsabilidade**: Exibir as seções de filmes personalizadas com base nos dados fornecidos pelo backend.

#### **2.1.6 `MovieSearch`**
- **Arquivo**: `src/components/MovieSearch.jsx`
- **Descrição**:
  - Permite ao usuário buscar filmes pelo título. Ao enviar o formulário, o componente realiza uma requisição GET para `/movies/search/{title}` e atualiza a lista de filmes com os resultados da pesquisa.
  - **Responsabilidade**: Gerenciar a funcionalidade de busca de filmes pelo título.

#### **2.1.7 `Nav`**
- **Arquivo**: `src/components/Nav.jsx`
- **Descrição**:
  - Renderiza a barra de navegação com o logotipo da aplicação, o campo de busca e o avatar do usuário. O componente também implementa a funcionalidade de alteração de cor da barra ao rolar a página.
  - **Responsabilidade**: Prover navegação para as principais funcionalidades da aplicação.

#### **2.1.8 `Register`**
- **Arquivo**: `src/components/Register.jsx`
- **Descrição**:
  - Componente responsável pelo cadastro de novos usuários. O usuário pode se cadastrar fornecendo nome, e-mail e senha.
  - **Validações**:
    - O e-mail é validado para garantir que tenha um formato válido.
    - A senha deve conter entre 4 e 60 caracteres.
  - **Integração**:
    - Envia uma requisição POST para o endpoint `/auth/register`. Se o cadastro for bem-sucedido, o usuário é autenticado automaticamente.
  - **Responsabilidade**: Gerenciar o processo de registro de novos usuários.

---

## 3. Fluxo de Autenticação

### Login
1. O usuário insere seu e-mail e senha na tela de login.
2. O componente `Login` valida os campos localmente.
3. Uma requisição POST é enviada para o endpoint `/auth/login`, com o corpo contendo os dados do usuário.
4. Se a autenticação for bem-sucedida, o token JWT recebido é armazenado no **localStorage**.
5. O token é então utilizado para autenticar o usuário em futuras requisições.

### Registro
1. O usuário insere seu nome, e-mail e senha na tela de registro.
2. O componente `Register` valida os campos localmente.
3. Uma requisição POST é enviada para o endpoint `/auth/register`.
4. Se o registro for bem-sucedido, o token JWT é armazenado no **localStorage**.

---

## 4. Requisições HTTP e Integração com Backend

### Utilização do Axios
O **Axios** é utilizado para realizar as requisições HTTP ao backend, facilitando a integração com a API. As principais funcionalidades incluem:

- **Autenticação**: O token JWT, armazenado no **localStorage**, é enviado no cabeçalho das requisições para endpoints protegidos, como `/favs` e `/movies/homepage`.
  
### Exemplos de Requisições
#### Login
```javascript
fetch('http://localhost:8081/auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
})
```

#### Adicionar Filme aos Favoritos
```javascript
axios.post('http://localhost:8081/favs', {
    id: movie.idDb
}, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});
```

---

## 5. Estilização

### Estrutura de Estilos (CSS)
Os arquivos CSS são organizados por componentes e estão localizados na pasta `src/styles`. Cada componente possui um arquivo de estilo correspondente que define a aparência e o layout da interface.

Exemplo de uso no `Banner.css`:
```css
.banner-container {
    background-size: cover;
    background-position: center;
    height: 70vh;
}
```

---

## 6. LocalStorage

- O **localStorage** é utilizado para armazenar o token JWT após o login ou registro do usuário.
- Esse token é persistido entre sessões e utilizado para autenticar as requisições subsequentes, eliminando a necessidade de o usuário fazer login novamente até que o token expire.

---
