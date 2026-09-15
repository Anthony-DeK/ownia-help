---
title: "Configuración de un dominio personalizado para tu página de reservas"
description: "Cómo vincular tu propio dominio a tu tienda online de Ownia, incluyendo los registros CNAME y DNS que tendrás que añadir."
category: "growth"
articleId: "setting-up-a-custom-domain"
order: 1
updatedDate: 2026-09-15
locale: "es"
---

Un dominio personalizado —`book.yourproperty.com` en lugar de una URL genérica de Ownia— hace que tu página de reservas tenga el aspecto y la sensación de ser tu propio sitio web, y merece la pena hacerlo antes de empezar a dirigir tráfico hacia ella desde anuncios, redes sociales o motores de búsqueda.

## Dónde vincular un dominio

Ve a **Tienda online** → **Configuración de la tienda** y busca la sección **Dominio personalizado**.

## Elegir un dominio

Introduce un subdominio como `www.yourdomain.com` o `book.tu-dominio.com`. No se admiten los dominios raíz sin prefijo (solo `tu-dominio.com`, sin nada delante); necesitarás un subdominio, que, de todos modos, suele ser la opción más segura y flexible para una configuración de DNS.

Haz clic en **Configurar**. Ownia generará los registros DNS que necesitas.

## Añadir los registros DNS

Se te mostrará un registro **CNAME** (un par nombre/valor) y, en la mayoría de los casos, un registro **TXT** que se utiliza para verificar que eres el propietario del dominio. Inicia sesión en el lugar donde gestionas el DNS de tu dominio —normalmente es tu registrador de dominios (GoDaddy, Namecheap, etc.) o un proveedor de DNS como Cloudflare— y añade ambos registros exactamente como se muestran.

Algunas cosas que permiten ahorrar tiempo en este caso:

- Los cambios en el DNS pueden tardar entre unos minutos y unas horas en propagarse, dependiendo de tu proveedor.
- No borres ni modifiques los registros DNS existentes que no estén relacionados con tu dominio; limita a añadir los nuevos que te proporciona Ownia.
- Comprueba bien que hayas copiado el valor de destino del CNAME exactamente; un carácter de más al final o un error tipográfico son las causas más habituales por las que no se supera la verificación.

## Verificación del dominio

Una vez que hayas añadido los registros, vuelve a la sección «Dominio personalizado» y haz clic en **Compruébalo ahora**. Si la propagación del DNS aún no ha finalizado, espera un poco y vuelve a comprobarlo; no es necesario volver a configurar nada mientras tanto.

Una vez verificada, podrás acceder a tu tienda web a través de tu propio dominio, y es el que deberás utilizar en todas las acciones de marketing, anuncios o anuncios que publiques en adelante, incluidos los [enlaces de reserva directa que compartas en lugar de redirigir a los huéspedes a través de Airbnb o Booking.com](/es/taking-direct-bookings-without-commission/).
