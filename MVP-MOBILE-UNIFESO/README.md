# 🌳 Terê Verde

Aplicativo móvel desenvolvido como um MVP (Minimum Viable Product) para a exploração de trilhas e eventos ecológicos, utilizando React Native com Expo, TypeScript e Firebase.

## Dados integrantes

- **Nome**: Antônio Dias Patricio Neto
- **Matricula**: 06006178

- **Nome**: Carlos Felipe Leopoldino
- **Matricula**: 06006160

- **Nome**: Ricardo de Oliveira Feitoza
- **Matricula**: 06006800

- **Nome**: Vitória Miranda da Silva
- **Matricula**: 06007409

## 📜 Sobre o Projeto

O **Terê Verde** é uma plataforma que visa conectar entusiastas da natureza com atividades ao ar livre, como trilhas e eventos. O aplicativo permite que os usuários naveguem por uma lista de opções, vejam detalhes específicos e, para administradores, oferece a capacidade de gerenciar o conteúdo, adicionando ou removendo itens.

## ✨ Funcionalidades

- **Autenticação de Usuários**: Sistema completo de login, cadastro e logout utilizando Firebase Authentication.
- **Listagem de Trilhas e Eventos**: Telas dedicadas para visualizar todas as trilhas e eventos disponíveis, com dados consumidos do Firestore.
- **Detalhes de Itens**: Ao selecionar um item, o usuário pode ver informações detalhadas, como descrição, nível de dificuldade, distância (para trilhas), localização e duração (para eventos).
- **Gerenciamento de Conteúdo (Admin)**: Usuários com permissão de administrador podem adicionar e excluir trilhas e eventos diretamente pelo aplicativo.
- **Perfil de Usuário**: Uma tela de configurações onde o usuário pode ver seus dados e sair da conta.
- **Navegação Moderna**: Utiliza o Expo Router para uma navegação baseada em arquivos, simplificando a estrutura de rotas.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias:

- **[React Native](https://reactnative.dev/)**: Framework para desenvolvimento de aplicativos móveis multiplataforma.
- **[Expo](https://expo.dev/)**: Plataforma e conjunto de ferramentas para construir e implantar aplicativos React Native.
- **[Expo Router](https://expo.github.io/router/docs/)**: Sistema de roteamento baseado em arquivos para aplicativos Expo.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
- **[Firebase](https://firebase.google.com/)**:
  - **Authentication**: Para gerenciamento de usuários.
  - **Firebase**: Como banco de dados para armazenar os dados das trilhas e eventos.

## 🚀 Começando

Para executar este projeto localmente, siga os passos abaixo.

### Pré-requisitos

Você precisará ter o seguinte software instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
  ```sh
  npm install -g expo-cli
  ```
- O aplicativo **Expo Go** em seu smartphone (iOS ou Android) ou um emulador configurado.

### Instalação

1. **Clone o repositório:**

   ```sh
   git clone <url-do-seu-repositorio>
   cd MVP-MOBILE-UNIFESO
   ```

2. **Instale as dependências:**

   ```sh
   npm install
   ```

   ou

   ```sh
   yarn install
   ```

3. **Configure o Firebase:**

   - Crie um projeto no [console do Firebase](https://console.firebase.google.com/).
   - Ative os serviços de **Authentication** (com o provedor de E-mail/Senha) e **Cloud Firestore**.
   - Na configuração do seu projeto no Firebase, crie um novo aplicativo Web (`</>`).
   - Copie as credenciais do Firebase (o objeto `firebaseConfig`).
   - Renomeie ou crie o arquivo `src/lib/firebase.ts` e cole suas credenciais, como no exemplo abaixo:

     ```typescript
     // src/lib/firebase.ts
     import { initializeApp } from "firebase/app";
     import { getFirestore } from "firebase/firestore";
     import { getAuth } from "firebase/auth";

     // Suas credenciais do Firebase aqui
     const firebaseConfig = {
       apiKey: "SUA_API_KEY",
       authDomain: "SEU_AUTH_DOMAIN",
       projectId: "SEU_PROJECT_ID",
       storageBucket: "SEU_STORAGE_BUCKET",
       messagingSenderId: "SEU_MESSAGING_SENDER_ID",
       appId: "SEU_APP_ID",
     };

     const app = initializeApp(firebaseConfig);
     export const db = getFirestore(app);
     export const auth = getAuth(app);
     ```

4. **Inicie o projeto:**

   ```sh
   npx expo start
   ```

5. **Execute no seu dispositivo:**
   - Escaneie o QR code exibido no terminal com o aplicativo Expo Go.

## 📂 Estrutura do Projeto

A estrutura de pastas principal do projeto é a seguinte:

```
src
├── app/           # Contém todas as telas e rotas (Expo Router)
│   ├── _layout.tsx  # Layout principal da navegação
│   ├── index.tsx    # Tela inicial
│   └── ...          # Outras telas (login, main, trail, etc.)
├── components/    # Componentes React reutilizáveis (Button, Footer, etc.)
└── lib/           # Módulos e configurações
    ├── auth.ts      # Funções de autenticação (login, registro)
    └── firebase.ts  # Configuração e inicialização do Firebase
```
