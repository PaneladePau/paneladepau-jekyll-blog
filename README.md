Blog Panela de Pau
================

1. Ambiente de produção no repositório paneladepau_prod

2. Ambiente de homologação no repositório _site

##Projeto criado a partir de Jekyll e Github Pages.

O repositório principal é o paneladepau_prod.

É nele que está a estrutura do site em Jekyll. Por padrão do Github Pages, o build é feito pelo próprio servidor do Github ao se enviar o push no branch gh-pages.

Ao buildar o projeto com Jekyll localmente, a pasta _site é criada com a estrutura compilada, e deve preferencialmente ser ignorada no .gitignore. Como forma de obter um ambiente de homologação, dentro desse diretório foi criado o repositório _site (aproveitando a nomenclatura do build), também com um branch gh-pages, para o qual é enviado o push que servirá o site de homologação.
