# Daily Check

Sistema web de tarefas e clima desenvolvido com HTML, CSS, JavaScript, Node.js, Express, Prisma ORM e MySQL.

---

# Tecnologias utilizadas

## Front-end
- HTML
- CSS
- JavaScript

## Back-end
- Node.js
- Express
- Prisma ORM
- MySQL

---

# Funcionalidades

- Cadastro de tarefas
- Listagem de tarefas
- Cards dinâmicos
- Modal para cadastro
- Página de clima utilizando API OpenWeather

---

# Como executar o projeto

## 1. Abrir o projeto

Abrir o projeto no VS Code.

---

## 2. Ligar o XAMPP

Iniciar:
- Apache
- MySQL

---

## 3. Instalar dependências

Abrir o terminal na pasta backend:

```bash
npm install
```

---

## 4. Rodar as migrations do Prisma

```bash
npx prisma migrate dev
```

---

## 5. Iniciar o servidor

```bash
node src/server.js
```

Servidor rodando em:

```txt
http://localhost:3000
```

---

# Testar API no Insomnia

## Listar tarefas

```http
GET http://localhost:3000/tarefas/listar
```

---

## Cadastrar tarefa

```http
POST http://localhost:3000/tarefas/cadastrar
```

Body JSON:

```json
{
  "nome": "",
  "descricao": "",
  "imagem": "",
  "dataInicio": "",
  "dataFim": ""
}
```

---

# Executar o Front-end

Abrir:
- index.html
- clima.html
- tarefas.html

Ou utilizar a extensão Live Server.

---
# Desenvolvido por

Beatriz Albuquerque
