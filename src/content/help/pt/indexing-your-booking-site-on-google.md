---
title: "Como fazer com que o seu site de reservas seja indexado no Google com o Search Console"
description: "O que é o Google Search Console, como verificar o seu domínio através de um registo DNS, enviar o seu mapa do site e solicitar ao Google que indexe o seu site de reservas."
category: "growth"
articleId: "indexing-your-booking-site-on-google"
order: 3
updatedDate: 2026-09-28
locale: "pt"
---

Os hóspedes que pesquisarem o nome do seu alojamento ou um alojamento para alugar na sua zona devem encontrar o seu próprio site de reservas, e não apenas o seu anúncio no Airbnb ou no Booking.com. O Google Search Console é a ferramenta gratuita que lhe permite informar o Google da existência do seu site e verificar o seu desempenho nas pesquisas.

Este guia demora cerca de 10 minutos a preparar e, depois, é preciso esperar alguns dias pelo Google.

## O que é o Google Search Console?

O Google Search Console é um serviço gratuito do Google destinado aos proprietários de sítios Web. Depois de comprovar que é o proprietário do seu domínio, este serviço permite-lhe:

- Indique ao Google quais são as páginas do seu site, através de um mapa do site
- Peça ao Google para indexar uma página imediatamente, em vez de esperar que ela seja descoberta
- Veja em que pesquisas o seu site aparece, com que frequência e quantas pessoas clicam nele
- Receba um aviso quando o Google não conseguir ler uma das suas páginas

O Search Console, por si só, não altera a sua classificação. Garante que o Google conheça as suas páginas e mostra-lhe o que está a funcionar.

## Antes de começar

Precisas de duas coisas:

- **Um domínio personalizado ativo no seu site de reservas Ownia.** O Search Console só funciona com um domínio do qual seja proprietário. Se ainda não tiver configurado um, siga primeiro as instruções em [Configurar um domínio personalizado para a sua página de reservas](/pt/setting-up-a-custom-domain/) e aguarde até que o seu estado passe a ser **Ativo**.
- **Uma conta do Google.** Qualquer conta do Gmail ou do Google Workspace serve.

Também terá de iniciar sessão no seu **gestor de DNS**: o local onde adicionou o registo CNAME para o seu domínio personalizado. Normalmente, trata-se do seu registador de domínios (GoDaddy, Namecheap, OVHcloud, IONOS…) ou de um fornecedor de DNS como o Cloudflare.

## Passo 1: Adicione o seu domínio à Search Console

1. Aceda a [search.google.com/search-console](https://search.google.com/search-console) e inicie sessão.
2. Abra o seletor de propriedades no canto superior esquerdo e clique em **Adicionar propriedade**.
3. Escolha a opção **Domínio** (à esquerda), e não «Prefixo de URL».
4. Introduza o seu **domínio raiz**, sem `www.`, `book.` nem `https://`. Se o seu site de reservas estiver em `www.villa-example.com`, introduza `villa-example.com`.
5. Clique em **Continuar**.

Uma propriedade de domínio abrange todos os subdomínios e tanto o `http` como o `https`, pelo que inclui o seu site de reservas, independentemente do subdomínio que este utilize.

Os menus da Search Console são apresentados no idioma da sua conta do Google, pelo que os nomes exatos podem diferir ligeiramente dos que constam neste guia.

## Passo 2: Copie o registo de verificação

O Google apresenta agora um **registo TXT** que começa com `google-site-verification=`, seguido de um código longo. Clique em **Copiar**. Deixe esta janela aberta: voltará a ela para clicar em **Verificar**.

## Passo 3: Adicione o registo TXT no seu gestor de DNS

No seu gestor de DNS, abra as definições de DNS do seu domínio e adicione um novo registo:

- **Tipo:** TXT
- **Nome / Host:** `@` (isto significa o próprio domínio raiz; alguns fornecedores preferem que este campo seja deixado em branco)
- **Valor / Conteúdo:** o texto completo `google-site-verification=…` que copiou
- **TTL:** manter o valor predefinido

Onde encontrar esta opção nos fornecedores mais comuns (os nomes dos menus podem sofrer ligeiras alterações ao longo do tempo):

- **Cloudflare:** selecione o seu domínio e, em seguida, **DNS** → **Registos** → **Adicionar registo**.
- **GoDaddy:** **Os meus produtos** → o seu domínio → **DNS** → **Adicionar novo registo**.
- **Namecheap:** **Lista de domínios** → **Gerir** ao lado do seu domínio → **DNS avançado** → **Adicionar novo registo** → **Registo TXT**.
- **OVHcloud:** **Web Cloud** → **Nomes de domínio** → o seu domínio → **Zona DNS** → **Adicionar uma entrada** → **TXT**. Deixe o campo do subdomínio em branco.
- **IONOS:** **Domínios e SSL** → o seu domínio → **DNS** → **Adicionar registo** → **TXT**.
- **Domínios Squarespace** (anteriormente Google Domains): o seu domínio → **DNS** → **Definições de DNS** → **Registos personalizados** → **Adicionar registo**.

Algumas dicas para evitar problemas:

- **Adicione, não substitua.** Se o seu domínio já tiver registos TXT (para e-mail, por exemplo), mantenha-os. Um domínio pode ter vários registos TXT.
- **Não altere o registo CNAME** que adicionou para a Ownia. O seu site de reservas depende dele.
- **Mantenha o registo TXT após a verificação.** O Google volta a verificá-lo de vez em quando e, se o remover, o seu domínio deixará de estar verificado.

## Passo 4: Verifique

Volte à Search Console e clique em **Verificar**.

As alterações no DNS demoram normalmente alguns minutos, mas podem demorar até 48 horas, dependendo do seu fornecedor. Se o Google indicar que não conseguiu encontrar o registo, aguarde algum tempo e clique novamente em **Verificar**. Não é necessário adicionar o registo duas vezes.

## Passo 5: Envie o seu mapa do site

A Ownia cria automaticamente um mapa do site para o seu site de reservas: uma lista das suas páginas que o Google pode ler. Está sempre disponível em:

`https://your-booking-domain/sitemap.xml`

Por exemplo, `https://www.villa-example.com/sitemap.xml`. Também poderá encontrar o endereço exato no Ownia em **Loja online** → **Promover**, no cartão **Faça com que o seu site de reservas seja indexado pelo Google**.

Na Search Console:

1. Clique em **Sitemaps** no menu da esquerda.
2. Cole o endereço completo do mapa do site, incluindo `https://`.
3. Clique em **Enviar**.

O estado deverá passar para **Sucesso** dentro de alguns minutos a algumas horas. O mapa do site atualiza-se automaticamente sempre que adicionar ou remover uma propriedade, pelo que só precisa de o enviar uma vez.

## Passo 6: Solicite a indexação das suas páginas principais

Para acelerar o processo num site totalmente novo:

1. Cole o endereço da página inicial do seu site de reservas na barra de pesquisa na parte superior do Search Console (isto abre a **inspeção de URL**).
2. Clique em **Solicitar indexação**.
3. Repita este procedimento para cada página de propriedades, caso tenha várias propriedades.

Não é preciso repetir este procedimento sempre que editar uma descrição: o Google volta a funcionar automaticamente.

## O que esperar

- **Primeiras páginas no Google:** normalmente alguns dias, por vezes algumas semanas, no caso de um domínio novo.
- **Dados de pesquisa** no relatório **Desempenho**: aparecem alguns dias depois de o seu site começar a aparecer nos resultados.
- **«Excluído pela etiqueta “noindex”»** no relatório **Páginas** é algo esperado para algumas páginas. A Ownia mantém deliberadamente as páginas privadas fora do Google, tais como os livros de boas-vindas aos hóspedes (que contêm códigos de Wi-Fi) e as páginas de confirmação de reservas.

## Perguntas frequentes

### Não tenho um domínio personalizado. Ainda assim, posso utilizar o Search Console?

Não se aplica ao seu próprio site de reservas: o Search Console exige que comprove que é o proprietário do domínio, e `app.ownia.co` pertence à Ownia. A sua página de reservas da Ownia continua a constar no mapa do site da própria Ownia, pelo que o Google consegue encontrá-la, mas não receberá os relatórios do Search Console nem poderá solicitar a indexação. A configuração de um domínio personalizado é a forma de obter ambas as funcionalidades.

### A verificação continua a falhar. O que devo verificar?

- O tipo de registo é **TXT**, e não CNAME.
- O nome é `@` (ou está vazio), e não `www` nem `book`.
- O valor corresponde ao texto completo, incluindo `google-site-verification=`, sem espaços nem aspas adicionais resultantes da operação de copiar e colar.
- Adicionou o registo no fornecedor que efetivamente gere o seu DNS. Se o seu domínio utilizar os servidores de nomes da Cloudflare, por exemplo, os registos adicionados no seu registador são ignorados.

### Isto fará com que o meu site fique em primeiro lugar no Google?

Nenhuma ferramenta pode garantir isso. A Search Console assegura que o Google conheça as suas páginas e mostra-lhe como os visitantes o encontram. O que o ajuda a obter uma boa classificação é um nome claro para a propriedade, boas descrições e fotografias, bem como links para o seu site a partir dos seus anúncios, redes sociais e sites locais.
