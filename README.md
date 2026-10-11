# Kevin Alves — Portfólio

Site estático do portfólio de Kevin Alves, desenvolvedor Full Stack Pleno. React, TypeScript, Vite e Tailwind CSS. A navegação é por âncoras, sem backend.

## Executar localmente

```bash
npm install
npm run dev
```

Outros comandos:

```bash
npm run lint
npm test
npm run build
npm run preview
```

`npm run dev` usa a raiz `/`. O build de produção usa o caminho `/kevin-alves-portfolio/`, que é o endereço do GitHub Pages deste repositório. `npm run preview` serve esse build.

## Onde editar o conteúdo

- Dados pessoais e links: `src/data/site.ts`
- Textos em português e inglês: `src/i18n/pt.ts` e `src/i18n/en.ts`
- Currículo: `public/cv/kevin-alves-cv.pdf`

Links vazios não são renderizados. GitHub e LinkedIn precisam começar com `https://`. O e-mail precisa conter `@`.

Para publicar um projeto de verdade, adicione o mesmo item nos dois arquivos de idioma com `status: 'publicado'` e preencha `repository` ou `demo` só quando a URL existir. Itens com `status: 'planejado'` continuam visíveis como estudos, não como entregas concluídas.

Imagens de projeto em `public/` devem ser referenciadas sem domínio. O componente aplica o `base` do Vite, então o arquivo funciona no GitHub Pages.

## Publicar no GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment**, escolha **Source: GitHub Actions**.
3. Envie a branch `main`. O workflow `.github/workflows/pages.yml` instala as dependências com `npm ci`, roda lint e testes, gera `dist/` e publica esse diretório.
4. O endereço esperado é [https://kevinalves55.github.io/kevin-alves-portfolio/](https://kevinalves55.github.io/kevin-alves-portfolio/).

Se a URL final do Pages for outra, atualize `site.url` em `src/data/site.ts` e as tags canônicas em `index.html`.

O workflow pede só leitura do código no job de build, mais `pages: write` e `id-token: write` para enviar e publicar o artefato. O job de deploy não recebe permissão de escrita no conteúdo do repositório.
