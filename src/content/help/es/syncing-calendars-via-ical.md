---
title: "Sincronización de Airbnb, Booking.com y otros calendarios a través de iCal"
description: "Cómo exportar tu calendario de Ownia a otras plataformas e importar calendarios externos, para que nunca tengas reservas solapadas."
category: "calendar"
articleId: "syncing-calendars-via-ical"
order: 1
updatedDate: 2026-09-15
locale: "es"
---

Si publicas una propiedad en Airbnb, Booking.com o cualquier otra plataforma, además de tu tienda web de Ownia, es necesario que esos calendarios estén sincronizados. De lo contrario, corres el riesgo de que se produzca una doble reserva: que un huésped reserve las mismas fechas en dos plataformas a la vez.

Ownia gestiona esto mediante iCal, el formato estándar de feed de calendario compatible con todas las principales plataformas de reservas. La disponibilidad se sincroniza en ambos sentidos; los precios, los detalles del alojamiento y la información de los huéspedes no se sincronizan a través de iCal y se gestionan por separado en cada plataforma.

## Dónde encontrar la sincronización del calendario

Abre la propiedad que quieras sincronizar desde **Propiedades** y, a continuación, ve a la sección **iCal Sync**. Verás dos partes: **Exporta tu calendario** y **Importar calendarios externos**.

## Exportar tu calendario de Ownia

En **Exporta tu calendario**, copia el enlace único del calendario que Ownia genera para ese inmueble. Pégalo en la configuración de importación de calendarios de la plataforma externa:

- **Airbnb**: Disponibilidad → Importar calendario
- **Booking.com**: Calendario → iCal

Esto indica a Airbnb o Booking.com que bloqueen las fechas que ya se hayan reservado a través de tu tienda web de Ownia.

## Importación de calendarios externos

En el apartado **Importar calendarios externos**, añade la URL del feed iCal de cada plataforma en la que tengas un perfil (tanto Airbnb como Booking.com proporcionan su propio enlace de calendario exportable en la configuración de sus respectivos calendarios). Ownia bloquea automáticamente esas fechas en tu tienda online.

Puedes añadir más de un calendario externo por alojamiento —por ejemplo, tus fuentes de Airbnb y Booking.com— y Ownia las combinará.

## Con qué frecuencia se sincroniza

Los calendarios importados se actualizan automáticamente cada dos horas aproximadamente. Si acabas de realizar una reserva en otra plataforma y necesitas que tu calendario de Ownia la refleje de inmediato, normalmente no es necesario realizar una «sincronización inmediata» manual: solo tienes que esperar un poco y evitar confirmar manualmente una solicitud para el mismo día en una segunda plataforma hasta que la sincronización haya tenido tiempo de completarse.

## Una nota sobre lo que no hace iCal

La sincronización con iCal solo incluye la disponibilidad. No transferirá el precio por noche, la descripción del alojamiento ni los datos de contacto de los huéspedes entre plataformas; cada plataforma sigue necesitando que se configuren directamente sus propios precios y el contenido del anuncio.
