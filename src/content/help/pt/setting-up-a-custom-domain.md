---
title: "Configurar um domínio personalizado para a sua página de reservas"
description: "Como associar o seu próprio domínio à sua Loja Online Ownia, incluindo os registos CNAME e DNS que terá de adicionar."
category: "growth"
articleId: "setting-up-a-custom-domain"
order: 1
updatedDate: 2026-09-15
locale: "pt"
---

Um domínio personalizado — `book.yourproperty.com` em vez de um URL genérico da Ownia — faz com que a sua página de reservas tenha o aspeto e a sensação de ser o seu próprio site, e vale a pena fazê-lo antes de começar a direcionar tráfego para ela a partir de anúncios, redes sociais ou motores de busca.

## Onde associar um domínio

Vá a **Loja online** → **Definições da loja** e procure a secção **Domínio personalizado**.

## Escolher um domínio

Introduza um subdomínio, como `www.yourdomain.com` ou `book.yourdomain.com`. Um domínio raiz simples (apenas `yourdomain.com`, sem nada à frente) não é suportado — vai precisar de um subdomínio, o que, de qualquer forma, é geralmente a opção mais segura e flexível para uma configuração de DNS.

Clique em **Configurar**. O Ownia irá gerar os registos DNS de que necessita.

## Adicionar os registos DNS

Será apresentado um registo **CNAME** (um par Nome/Valor) e, na maioria dos casos, um registo **TXT** utilizado para verificar que é efetivamente o proprietário do domínio. Inicie sessão no local onde gere o DNS do seu domínio — normalmente, este é o seu registador de domínios (GoDaddy, Namecheap, etc.) ou um fornecedor de DNS como a Cloudflare — e adicione ambos os registos exatamente como indicado.

Algumas dicas que ajudam a poupar tempo:

- As alterações no DNS podem demorar entre alguns minutos e algumas horas a propagar-se, dependendo do seu fornecedor.
- Não elimine nem altere registos DNS existentes que não estejam relacionados com o seu domínio — limite-se a adicionar os novos registos que a Ownia lhe fornece.
- Verifique bem se copiou o valor de destino do CNAME na íntegra; um caractere a mais ou um erro ortográfico são as razões mais comuns pelas quais a verificação não é bem-sucedida.

## Verificação do domínio

Depois de adicionar os registos, volte à secção «Domínio personalizado» e clique em **Verifique agora**. Se a propagação do DNS ainda não tiver terminado, aguarde um pouco e verifique novamente — não é necessário reconfigurar nada entretanto.

Após a verificação, a sua loja online ficará acessível através do seu próprio domínio, e é esse domínio que deverá utilizar em todas as ações de marketing, anúncios ou publicações que controlar daqui em diante — incluindo os [links de reserva direta que partilha, em vez de encaminhar os hóspedes através do Airbnb ou do Booking.com](/pt/taking-direct-bookings-without-commission/).
