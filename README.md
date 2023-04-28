# Solução Omnichannel Desafio Bemol

Criação de uma aplicação web com API.

## 🚀 Começando

Para este projeto, possuo a finalidade de apresenta uma solução para o desafio tecnico da Bemol Digital.

### 📋 Pré-requisitos

- Ter o Node.
- Ter o npm.


### 🔧 Instalação

Para a instalação do projeto, utilizamos o NPM.

Para instalar o site, utilize o comando no seu terminal:
```
cd ./backend
npm install
npm run dev
```

Após o download de todas as dependências o necessitamos iniciar o servidor, abra outro terminal na pasta raiz do projeto e digite o comando no seu terminal:

```
cd ./frontend
npm install
```

Após o download de todas as dependências que necessitamos iniciar a aplicação web, digite o comando no seu terminal:

```
npm start
```

### Obs: É necessario no back-end um arquivo ".env" para a executação de alguns comandos: Envio de e-mail, criação de senhas criptografadas e verificação do JWT. Não deixei no arquivo, pois contém informações confidenciais.

### Obs2: Caso queira criar um arquivo .env para executar com precisão, é necessário ter nesse arquivo essas informações:

no arquivo ".env" nas pasta backend
```
ASSINATURA = bemol 
ASSINATURASENHA = bemoldesafio
EMAIL = seuemail@gmail.com
SENHA = suasenhadoemail
```
A assinatura e assinaturasenha são importante para a criação e verificação do JWT, ambas não devem ser alteradas de nenhuma forma.
A senha, é especifico de email para email.
Ps: siga esse video para entender a respeito do email link: https://www.youtube.com/watch?v=em7kYb2SbSw

## ⚙️ Executando os testes

### PARA INICIAR:
Deve-se acessar ao menu inicial, na URL: http://localhost:3000/
Lá você será redirecionado para tela de login caso não esteja logado.
Você poderá se registrar para utilizar o serviço, e deixei em aberto caso queira criar um funcionario ou um cliente, ambos possuem usuabilidade diferentes.

Caso queria ir direto ao ponto, logins de funcionario e cliente:
User: funcionario
Senha: funcionario

User: cliente
Senha: cliente

Para acessar o serviços de chat, é necessario que o Cliente crie um chat e o Funcionario atenda ao pedido.
Pode-se abrir dois navegadores diferentes, ambos no endereço URL: http://localhost:3000/conversa para testar a funcionalidade de chat.

Desta forma você irá ver a comunicação entre os dois usuários.

### IMPORTANTE:
- O serviço de email é mais complexo, porém está funcionando completamente, só tem que ser configurado pelo proprio usuario, como deixei a URL algumas linhas atras.

## 📦 Implantação

Esse serviço serve apenas para carater demonstrativo para o desafio técnico.

### Detalhes sobre o desenvolvimento

Implementei o sistema de back-end no NodeJs, pela tempo que foi dado para realização do projeto, além de dominar a tecnologia, conhecia as funcionalidades e já obtive bastante experiência no mesmo, logo conseguia tratar de bugs mais complexos.

Utilizei o banco de dados MongoDB pela rapidez e facilidade de retornar dados, além de não ter que realizar instalações de outros aplicativos e conexões mais complexas, outro motivos foi a biblioteca "Mongoose" ela é bem completa e ajuda bastante no desenvolvimento.

Utilizei o JWT e Bcrypt, para a criptografica de token(realização de login) e senhas, respectivamente, pela facilidade na comunicação e implementação.

No front-end, utilizei React e Tailwind, ambas as tecnologias possuo grande experiência o que facilitou algumas ocorrências não esperadas.

## 📌 Versão

Versão 1.0
