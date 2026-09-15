---
title: "Conectar Stripe para aceptar pagos en línea"
description: "Cómo vincular una cuenta de Stripe a tu tienda web de Ownia para que los huéspedes puedan pagar sus reservas directas, y qué puedes esperar durante el proceso de configuración."
category: "payments"
articleId: "connecting-stripe-to-accept-payments"
order: 1
updatedDate: 2026-09-15
locale: "es"
---

Ownia no retiene tu dinero. Cada reserva la gestiona Stripe, y el dinero se ingresa directamente en tu cuenta bancaria; Ownia se queda automáticamente con su comisión fija del 5 % en el momento del pago, sin que tengas que pagar ninguna factura aparte.

Para aceptar una reserva directa de pago, primero debes vincular una cuenta de Stripe a tu tienda online.

## Dónde conectar Stripe

Ve a **Tienda online** en la barra lateral y, a continuación, abre la pestaña **Pagos**. Verás una ficha **Stripe Connect**:

- Si aún no hay nada conectado, aparece el mensaje «Aceptar pagos en línea» junto con un botón **Conectar Stripe**.
- Si has iniciado la configuración pero no la has completado, aparecerá el mensaje «Completa la configuración de Stripe» junto con un botón **Reanudar la configuración**.
- Una vez verificado todo, aparece el mensaje «Stripe conectado» con un enlace a **Gestionar los pagos en Stripe**.

## Selecciona tu país

Haz clic en **Conectar Stripe** y se te pedirá que confirmes tu país antes de continuar. Esto es importante porque Stripe lo utiliza para determinar qué requisitos de identidad, bancarios y fiscales se aplican a tu cuenta; **esto no se puede cambiar más adelante**, así que asegúrate de seleccionar el país en el que realmente operas y desde el que gestionas tus operaciones bancarias, no solo aquel en el que se encuentran tus propiedades.

Una vez confirmada la información, haz clic en **Continuar con Stripe** para que se te redirija al proceso de alta de Stripe, donde deberás introducir los datos de tu empresa o personales, tu cuenta bancaria y los documentos de verificación de identidad.

## Configuración del acabado

El proceso de alta en Stripe puede tardar unos minutos si tienes a mano tus datos bancarios y tu documento de identidad. Una vez que hayas terminado, se te redirigirá de nuevo a Ownia. Si Stripe necesita más información (esto es habitual y normal, forma parte de los controles de cumplimiento de Stripe), la pestaña «Pagos» mostrará «Reanudar la configuración» hasta que todo esté verificado.

Siempre puedes consultar el estado de la operación, el calendario de pagos y el historial de transacciones directamente desde Stripe utilizando el enlace **Gestionar los pagos en Stripe**.

## Una vez que te hayas conectado

Con Stripe activado, tu página de reservas puede aceptar pagos y la función de [depósito de seguridad](/es/how-security-deposits-work/) se habilita en la misma pestaña «Pagos». Los huéspedes pagan el importe total (o según tus [políticas de cancelación y depósito](/es/setting-your-cancellation-policy/)) en el momento de la reserva, y los pagos se ingresan en tu cuenta bancaria según el calendario de pagos habitual de Stripe para tu país.
