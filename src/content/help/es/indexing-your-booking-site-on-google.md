---
title: "Cómo conseguir que tu página web de reservas aparezca en los resultados de búsqueda de Google con Search Console"
description: "Qué es Google Search Console, cómo verificar tu dominio mediante un registro DNS, enviar tu mapa del sitio y solicitar a Google que indexe tu página web de reservas."
category: "growth"
articleId: "indexing-your-booking-site-on-google"
order: 3
updatedDate: 2026-09-28
locale: "es"
---

Los huéspedes que busquen el nombre de tu alojamiento o un alquiler en tu zona deberían encontrar tu propia página web de reservas, y no solo tu anuncio en Airbnb o Booking.com. Google Search Console es la herramienta gratuita que te permite indicar a Google que tu sitio web existe y ver cómo se posiciona en los resultados de búsqueda.

Esta guía requiere unos 10 minutos de trabajo y, después, hay que esperar unos días a que Google la procese.

## ¿Qué es Google Search Console?

Google Search Console es un servicio gratuito de Google dirigido a los propietarios de sitios web. Una vez que hayas demostrado que eres el propietario de tu dominio, te permite:

- Indica a Google qué páginas tiene tu sitio web mediante un mapa del sitio
- Pide a Google que indexe una página de inmediato, en lugar de esperar a que la detecte
- Comprueba en qué búsquedas aparece tu sitio web, con qué frecuencia y cuántas personas hacen clic en él
- Recibe una notificación cuando Google no pueda leer una de tus páginas

Search Console no modifica por sí sola tu posicionamiento. Se encarga de que Google conozca tus páginas y te muestra qué es lo que funciona.

## Antes de empezar

Necesitas dos cosas:

- **Un dominio personalizado activo en tu página de reservas de Ownia.** Search Console solo funciona con un dominio del que seas propietario. Si aún no has configurado uno, sigue primero las instrucciones de [Cómo configurar un dominio personalizado para tu página de reservas](/es/setting-up-a-custom-domain/) y espera a que su estado aparezca como **Activo**.
- **Una cuenta de Google.** Vale cualquier cuenta de Gmail o de Google Workspace.

También tendrás que iniciar sesión en tu **gestor de DNS**: el lugar donde añadiste el registro CNAME para tu dominio personalizado. Suele ser tu registrador de dominios (GoDaddy, Namecheap, OVHcloud, IONOS…) o un proveedor de DNS como Cloudflare.

## Paso 1: Añade tu dominio a Search Console

1. Ve a [search.google.com/search-console](https://search.google.com/search-console) e inicia sesión.
2. Abre el selector de propiedades situado en la parte superior izquierda y haz clic en **Añadir propiedad**.
3. Selecciona la opción **Dominio** (a la izquierda), no «Prefijo de URL».
4. Introduce tu **dominio raíz**, sin «www.», «book.» ni «https://». Si tu página web de reservas está en «www.villa-example.com», introduce «villa-example.com».
5. Haz clic en **Continuar**.

Una propiedad de dominio abarca todos los subdominios y tanto `http` como `https`, por lo que incluye tu página web de reservas, independientemente del subdominio que utilice.

Los menús de Search Console aparecen en el idioma de tu cuenta de Google, por lo que los nombres exactos pueden diferir ligeramente de los que figuran en esta guía.

## Paso 2: Copia el registro de verificación

Google muestra ahora un **registro TXT** que comienza con `google-site-verification=`, seguido de un código largo. Haz clic en **Copiar**. Deja esta ventana abierta: volverás a ella para hacer clic en **Verificar**.

## Paso 3: Añade el registro TXT en tu gestor de DNS

En tu gestor de DNS, abre la configuración de DNS de tu dominio y añade un nuevo registro:

- **Tipo:** TXT
- **Nombre / Servidor:** `@` (esto se refiere al propio dominio raíz; algunos proveedores prefieren que este campo se deje en blanco)
- **Valor / Contenido:** el texto completo `google-site-verification=…` que has copiado
- **TTL:** dejar el valor por defecto

Dónde encontrarlo en los proveedores habituales (los nombres de los menús pueden variar ligeramente con el tiempo):

- **Cloudflare:** selecciona tu dominio y, a continuación, **DNS** → **Registros** → **Añadir registro**.
- **GoDaddy:** **Mis productos** → tu dominio → **DNS** → **Añadir nuevo registro**.
- **Namecheap:** **Lista de dominios** → **Gestionar** junto a tu dominio → **DNS avanzado** → **Añadir nuevo registro** → **Registro TXT**.
- **OVHcloud:** **Web Cloud** → **Nombres de dominio** → tu dominio → **Zona DNS** → **Añadir una entrada** → **TXT**. Deja el campo del subdominio en blanco.
- **IONOS:** **Dominios y SSL** → tu dominio → **DNS** → **Añadir registro** → **TXT**.
- **Dominios de Squarespace** (antes Google Domains): tu dominio → **DNS** → **Configuración de DNS** → **Registros personalizados** → **Añadir registro**.

Algunas cosas que ayudan a evitar problemas:

- **Añade, no sustituyas.** Si tu dominio ya tiene registros TXT (para el correo electrónico, por ejemplo), consérvalos. Un dominio puede tener varios registros TXT.
- **No modifiques el registro CNAME** que has añadido para Ownia. Tu página web de reservas depende de él.
- **Conserva el registro TXT tras la verificación.** Google lo comprueba de nuevo de vez en cuando, y si lo eliminas, tu dominio dejará de estar verificado.

## Paso 4: Verifica

Vuelve a Search Console y haz clic en **Verificar**.

Los cambios en el DNS suelen tardar unos minutos, pero pueden tardar hasta 48 horas, dependiendo de tu proveedor. Si Google indica que no ha podido encontrar el registro, espera un rato y vuelve a hacer clic en **Verificar**. No es necesario que añadas el registro dos veces.

## Paso 5: Envía tu mapa del sitio

Ownia crea automáticamente un mapa del sitio para tu página web de reservas: una lista de tus páginas que Google puede leer. Siempre se encuentra en:

`https://your-booking-domain/sitemap.xml`

Por ejemplo, `https://www.villa-example.com/sitemap.xml`. También encontrarás la dirección exacta en Ownia, en **Tienda online** → **Promover**, en la ficha **Haz que Google indexe tu página web de reservas**.

En Search Console:

1. Haz clic en **Mapas del sitio** en el menú de la izquierda.
2. Pega la dirección completa del mapa del sitio, incluyendo `https://`.
3. Haz clic en **Enviar**.

El estado debería cambiar a **Éxito** en un plazo de unos minutos a unas horas. El mapa del sitio se actualiza automáticamente cada vez que añadas o elimines una propiedad, por lo que solo tienes que enviarlo una vez.

## Paso 6: Solicita la indexación de tus páginas principales

Para agilizar el proceso en el caso de una página web totalmente nueva:

1. Pega la dirección de la página de inicio de tu sitio web de reservas en la barra de búsqueda situada en la parte superior de Search Console (esto abre la **inspección de URL**).
2. Haz clic en **Solicitar indexación**.
3. Repite este proceso para cada página de propiedades si tienes varias.

No hace falta que repitas este proceso cada vez que edites una descripción: Google se actualiza automáticamente.

## Qué puedes esperar

- **Primeras páginas en Google:** normalmente unos días; a veces, unas semanas en el caso de un dominio nuevo.
- **Datos de búsqueda** en el informe **Rendimiento**: aparecen unos días después de que tu sitio web empiece a aparecer en los resultados.
- **«Excluida por la etiqueta 'noindex'»** en el informe **Páginas** es algo normal en algunas páginas. Ownia mantiene deliberadamente fuera de Google las páginas privadas, como los libros de bienvenida para huéspedes (que contienen códigos de wifi) y las páginas de confirmación de reservas.

## Preguntas frecuentes

### No tengo un dominio propio. ¿Puedo usar Search Console de todos modos?

No para tu propia página de reservas: Search Console exige que demuestres que eres el propietario del dominio, y `app.ownia.co` pertenece a Ownia. Tu página de reservas de Ownia sigue apareciendo en el mapa del sitio de Ownia, por lo que Google puede encontrarla, pero no recibirás los informes de Search Console ni podrás solicitar la indexación. Configurar un dominio personalizado es la forma de conseguir ambas cosas.

### La verificación sigue fallando. ¿Qué debería comprobar?

- El tipo de registro es **TXT**, no CNAME.
- El nombre es «@» (o está vacío), no «www» ni «book».
- El valor es el texto completo, incluyendo «google-site-verification=», sin espacios ni comillas adicionales añadidos al copiar y pegar.
- Has añadido el registro en el proveedor que gestiona realmente tu DNS. Si tu dominio utiliza los servidores de nombres de Cloudflare, por ejemplo, los registros añadidos en tu registrador se ignoran.

### ¿Esto hará que mi página web aparezca en primer lugar en Google?

Ninguna herramienta puede garantizarlo. Search Console se asegura de que Google conozca tus páginas y te muestra cómo te encuentran los visitantes. Lo que te ayuda a posicionarte es un nombre claro de la propiedad, buenas descripciones y fotos, y enlaces a tu sitio web desde tus anuncios, redes sociales y páginas web locales.
