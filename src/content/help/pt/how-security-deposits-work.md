---
title: "Como funcionam as cauções"
description: "Como a funcionalidade de caução da Ownia autoriza e debita o cartão de um hóspede, e como ativá-la para um imóvel."
category: "payments"
articleId: "how-security-deposits-work"
order: 2
updatedDate: 2026-09-15
locale: "pt"
---

Os depósitos de segurança permitem-lhe proteger-se contra danos ou custos adicionais de limpeza, sem, na maioria dos casos, ter de cobrar nada antecipadamente ao hóspede.

## Ativar um depósito

Os depósitos de segurança são configurados por imóvel. Aceda a **Loja online** → **Pagamentos** e encontrará o cartão **Caução** logo abaixo do Stripe Connect. Este cartão permanece desativado até que a sua [conta Stripe esteja ativa](/pt/connecting-stripe-to-accept-payments/), uma vez que os depósitos são cobrados através da mesma conta associada que os pagamentos normais.

Defina um **Montante do depósito**. Deixe o campo em branco para desativar totalmente os depósitos para esse imóvel.

## Como é que o «hold» funciona, na realidade

A Ownia não cobra o valor do depósito quando o hóspede faz a reserva. Em vez disso:

1. O depósito é **autorizado** (reservado) no cartão do hóspede **um dia antes do check-out**, e não no momento da reserva.
2. Se não surgir nada, a retenção é simplesmente levantada — nunca é cobrado qualquer montante ao hóspede e o dinheiro volta a ficar disponível no seu cartão.
3. Caso seja necessário reclamar parte ou a totalidade do depósito devido a danos ou a algum problema ocorrido durante a estadia, o montante correspondente é deduzido dessa mesma reserva.

Como a retenção ocorre imediatamente antes do check-out e não no momento da reserva, os hóspedes não vêem um montante elevado pendente no seu cartão durante toda a estadia — apenas no último dia, mais ou menos.

## O que isto significa para os hóspedes

A confirmação da reserva e qualquer texto destinado aos hóspedes devem deixar claro que será aplicada uma retenção de depósito. Por vezes, os hóspedes entram em contacto a perguntar sobre uma autorização pendente desconhecida no seu cartão, perto da data de check-out; saber que se trata da retenção de depósito da Ownia/Stripe permite dar uma resposta rápida, em vez de se tornar um problema para o apoio ao cliente.

## Definições relacionadas

Os depósitos de segurança são independentes da sua [política de cancelamento](/pt/setting-your-cancellation-policy/) — o bloqueio do depósito destina-se a proteger contra danos durante a estadia, enquanto a política de cancelamento rege os reembolsos caso um hóspede cancele antes da chegada.
