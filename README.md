# 🚀 UaiGO! — O Waze Cultural

O **UaiGO!** é uma plataforma web para mapear, promover e facilitar o acesso a eventos, pontos culturais e atrações turísticas. O projeto funciona como um "Waze Cultural": conecta pessoas a experiências e locais da região.

🔗 **Site:** [ogbraiaaa.github.io/uaigo-site](https://ogbraiaaa.github.io/uaigo-site/)

---

## 🛠️ Tecnologias

- **Frontend:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build:** [Vite](https://vitejs.dev/)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions)
- **Hospedagem:** Locaweb (servidor Linux)

---

## 📁 Estrutura do repositório

```
uaigo-site/
├── .github/workflows/   # Pipeline de build e deploy (GitHub Actions)
├── uaigo!/              # Aplicação React + Vite
├── package.json         # Scripts da raiz que repassam os comandos para a pasta uaigo!
└── README.md
```

---

## 💻 Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior (versão LTS)
- npm

### Passo a passo

1. Clone o repositório e entre na pasta:

   ```bash
   git clone https://github.com/ogbraiaaa/uaigo-site.git
   cd uaigo-site
   ```

2. Instale as dependências da raiz e do app:

   ```bash
   npm install
   npm --prefix 'uaigo!' install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   O Vite mostra o endereço no terminal, normalmente `http://localhost:5173`.

### Scripts disponíveis

Todos os scripts rodam na raiz do repositório e repassam o comando para a pasta `uaigo!`.

| Comando           | O que faz                                      |
|-------------------|------------------------------------------------|
| `npm run dev`     | Servidor de desenvolvimento                    |
| `npm run build`   | Gera a versão de produção na pasta `dist/`     |
| `npm run preview` | Abre localmente a versão gerada pelo build     |
| `npm run deploy`  | Executa o script `deploy` da pasta `uaigo!`    |

---

## ⚡ Deploy automático (CI/CD)

O deploy é feito pelo **GitHub Actions** (`.github/workflows/deploy.yml`).

**Gatilho:** push na branch `main`.

**O que acontece:**

1. O runner instala as dependências e executa o build com Vite.
2. O conteúdo gerado em `dist/` é enviado para o diretório público (`public_html/`) da hospedagem, por FTPS ou SFTP.

**Credenciais:** host, usuário e senha ficam nos **GitHub Secrets** do repositório (*Settings > Secrets and variables > Actions*). Elas nunca devem aparecer no código, no workflow ou no histórico do Git.

---

## 👤 Autor

Brayan Silva · [github.com/ogbraiaaa](https://github.com/ogbraiaaa)
