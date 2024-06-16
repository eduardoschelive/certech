# Certech

Certech é um conversor de certificados para Desktop que visa facilitar o processo de transformar arquivos PFX em um par de CRT + KEY e vice versa, sendo uma ferramenta facilitadora quando se faz necessário o uso de certificados digitais em diferentes formatos.


## Como rodar o projeto?

Clone o projeto

```bash
  git clone https://github.com/eduardoschelive/certech.git
```

Entre no diretório do projeto

```bash
  cd certech
```

Instale as dependências

```bash
  npm i --global yarn
  yarn install
```

Inicie a aplicação localmente

```bash
  yarn dev
```

Compilar para distribuição

```bash
  yarn package
  yarn make
```




## Stack utilizada

- **Framework Desktop**: [Electron](https://www.electronjs.org/pt/)
- **Interface**: [Typescript](https://www.typescriptlang.org/), [React](https://react.dev/), [TailwindCSS](https://tailwindcss.com/)
- **Implementação do protocolo TLS**: [node-forge](https://github.com/digitalbazaar/forge)