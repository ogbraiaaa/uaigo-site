# 🚀 UaiGO! — O Waze Cultural

O **UaiGO!** é uma plataforma web desenvolvida para mapear, promover e facilitar o acesso a eventos, pontos culturais e atrações turísticas. O projeto funciona como um "Waze Cultural", conectando pessoas às melhores experiências e locais da região em tempo real.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as melhores práticas do ecossistema modern web:

* **Frontend:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Estilização:** CSS / Styled System / Tailwind
* **CI/CD & Deploy:** [GitHub Actions](https://github.com/features/actions) (Automação de Build e Deploy via FTP)
* **Hospedagem:** Locaweb (Servidor Linux)

---

## ⚡ Esteira de CI/CD (Deploy Automático)

O repositório conta com um fluxo automatizado via **GitHub Actions** (`.github/workflows/deploy.yml`). 

Toda vez que uma alteração é enviada para a branch `main`:
1. O runner instala as dependências e executa o build com **Vite**.
2. Os artefatos gerados na pasta `dist/` são enviados automaticamente via **FTP** para o diretório público (`public_html/`) na hospedagem.

---

## 💻 Como Rodar o Projeto Localmente

### Pré-requisitos
* **Node.js** (versão 18 ou superior)
* **npm** ou **yarn**

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/ogbraiaaa/uaigo-site.git](https://github.com/ogbraiaaa/uaigo-site.git)
