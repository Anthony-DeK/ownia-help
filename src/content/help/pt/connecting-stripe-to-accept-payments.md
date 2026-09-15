---
title: "Ligar o Stripe para aceitar pagamentos online"
description: "Como ligar uma conta Stripe à sua Loja Online Ownia para que os hóspedes possam efetuar pagamentos de reservas diretas e o que esperar durante a configuração."
category: "payments"
articleId: "connecting-stripe-to-accept-payments"
order: 1
updatedDate: 2026-09-15
locale: "pt"
---

A Ownia não retém o seu dinheiro. Todas as reservas são processadas pela Stripe e os fundos são transferidos diretamente para a sua conta bancária — a Ownia retém automaticamente a sua comissão fixa de 5% no momento do pagamento, sem que seja necessário pagar qualquer fatura separada.

Para aceitar uma reserva direta paga, primeiro tem de associar uma conta Stripe à sua Loja Online.

## Onde ligar o Stripe

Vá até **Loja online** na barra lateral e, em seguida, abra o separador **Pagamentos**. Irá ver um cartão **Stripe Connect**:

- Se ainda não estiver nada ligado, aparece a mensagem «Aceitar pagamentos online» com um botão **Ligar o Stripe**.
- Se iniciou a configuração mas não a concluiu, aparece a mensagem «Conclua a configuração do Stripe» com um botão **Retomar a configuração**.
- Assim que tudo estiver verificado, aparece a mensagem «Stripe ligado», com um link para **Gerir pagamentos no Stripe**.

## Escolher o seu país

Clique em **Ligar o Stripe** e ser-lhe-á pedido que confirme o seu país antes de continuar. Isto é importante porque o Stripe utiliza essa informação para determinar quais os requisitos de identificação, bancários e fiscais que se aplicam à sua conta — **isto não pode ser alterado posteriormente**, por isso certifique-se de que seleciona o país onde efetivamente opera e tem a sua conta bancária, e não apenas aquele onde se encontram os seus imóveis.

Após confirmar, clique em **Continuar para o Stripe** para ser redirecionado para o processo de integração do próprio Stripe, onde irá introduzir os dados da sua empresa ou pessoais, a conta bancária e os documentos de verificação de identidade.

## Configuração de acabamento

A integração com o Stripe pode demorar alguns minutos, se tiver os seus dados bancários e documento de identificação à mão. Assim que terminar, será redirecionado de volta para a Ownia. Se o Stripe precisar de mais informações (isto é comum e normal — faz parte das verificações de conformidade do próprio Stripe), o separador «Pagamentos» exibirá a mensagem «Retomar a configuração» até que tudo esteja verificado.

Pode sempre consultar o estado da conta, o calendário de pagamentos e o histórico de transações diretamente no Stripe, utilizando o link **Gerir pagamentos no Stripe**.

## Assim que estiver ligado

Com o Stripe ativado, a sua página de reservas pode aceitar pagamentos e a funcionalidade [caução](/pt/how-security-deposits-work/) fica disponível no mesmo separador «Pagamentos». Os hóspedes pagam o valor total (ou de acordo com as suas [políticas de cancelamento e caução](/pt/setting-your-cancellation-policy/)) no momento da reserva, e os pagamentos são creditados na sua conta bancária de acordo com o calendário normal de pagamentos do Stripe para o seu país.
