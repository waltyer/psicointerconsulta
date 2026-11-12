# PSICOINTERCONSULTA 🏥
**Guía rápida de orientación para la atención psicológica por interconsulta**  
*Hospital Francisco de Paula Santander E.S.E. — Santander de Quilichao, Cauca*

---

## 📌 1. Identidad y Propósito del Producto

**PSICOINTERCONSULTA** es una **guía digital rápida e interactiva (manual de bolsillo)** diseñada para orientar a estudiantes y practicantes de Psicología en formación clínica antes, durante y después de la atención por interconsulta en el contexto hospitalario.

### ⚠️ Límites Éticos y de Seguridad Innegociables:
- **NO** es una historia clínica electrónica.
- **NO** es un sistema de gestión hospitalaria ni de asignación de camas.
- **NO** solicita, captura ni almacena datos personales ni clínicos identificables de pacientes.
- **NO** emite diagnósticos automáticos ni toma decisiones clínicas.
- **NO** sustituye la supervisión docente, el criterio profesional ni los protocolos médicos institucionales vigentes.

---

## 📱 2. Instalación en Dispositivos Móviles (Soporte PWA y Modo Offline)

La aplicación está construida bajo los estándares de una **Progressive Web App (PWA)**:

- **Instalable como App nativa**: Se añade a la pantalla de inicio del teléfono con su propio icono sin necesidad de descargarla de Google Play Store ni Apple App Store.
- **Experiencia a pantalla completa**: Abre sin barra de direcciones web del navegador, con navegación táctil fluida y barra de pestañas inferior optimizada para celulares.
- **Funciona 100% Sin Internet (Offline)**: Gracias al *Service Worker*, todo el contenido queda guardado en la memoria local del dispositivo. El practicante puede consultar cualquier ficha o pregunta en sótanos, salas de aislamiento o zonas del hospital sin cobertura celular ni Wi-Fi.

### ¿Cómo instalarla en el celular?
1. **En Android (Chrome / Edge / Samsung Internet)**:
   - Abre el enlace de la aplicación.
   - Pulsa el botón **"Instalar App"** en el encabezado o en el banner inferior que aparecerá automáticamente.
2. **En iPhone / iPad (Safari)**:
   - Abre el enlace en Safari.
   - Toca el botón **Compartir** (icono de cuadrado con flecha hacia arriba).
   - Selecciona **"Añadir a la pantalla de inicio"** (Add to Home Screen).

---

## 📂 3. Estructura de Navegación y Capítulos

1. **Inicio**: Presentación de la guía, objetivo pedagógico, reflexión humana y accesos directos por temas.
2. **1. Antes de iniciar**: Revisión del motivo, pertinencia clínica, coordinación con enfermería/médicos y condiciones de privacidad.
3. **2. Abordaje inicial**: Protocolo de saludo, encuadre, consentimiento, límites de confidencialidad y **guion de apertura textual con botón para copiar**.
4. **3. Valoración psicológica**: Preguntas orientadoras por 5 áreas (Estado emocional, Situación actual y hospitalización, Red de apoyo, Afrontamiento y Necesidades inmediatas) + Protocolo de seguridad ante señales de riesgo.
5. **4. Rutas de orientación clínica**: Fichas estructuradas de consulta rápida:
   - *A. Crisis emocional*
   - *B. Interrupción Voluntaria del Embarazo (IVE)*
   - *C. Desregulación emocional*
   - *D. Código Rojo y activaciones institucionales* (con aviso de validación HFPS)
   - *E. Acompañamiento al paciente y su familia*
6. **5. Herramientas de intervención psicológica**: Explicación paso a paso y precauciones para:
   - Escucha activa
   - Validación emocional
   - Contención emocional
   - Respiración consciente
   - Psicoeducación
   - Orientación a la red de apoyo
7. **6. Cierre de la atención**: Pautas para síntesis, verificación de necesidades, claridad sobre el rol y despedida.
8. **7. Registro de interconsulta**: Estructura de redacción, recomendaciones éticas y **ejemplo educativo ficticio**.
9. **8. Servicios y contextos hospitalarios**: Consideraciones específicas para *Hospitalización*, *Urgencias*, *Ginecología y Obstetricia* y *Consulta Externa*.
10. **9. Ética, seguridad y límites del rol**: Principios bioéticos, límites de actuación del practicante y frases motivacionales de autocuidado.
11. **Glosario interactivo**: Definiciones conceptuales rápidas con buscador.
12. **Mis Fichas Guardadas**: Marcadores rápidos almacenados localmente en el dispositivo (`localStorage`), sin datos de pacientes.
13. **Validación Institucional**: Checklist de control de calidad institucional previo a la adopción formal.

---

## 💻 4. Requisitos y Ejecución Técnica

### Requisitos:
- Node.js (versión 18 o superior recomendada; probado en v26.13)
- npm (versión 9 o superior)

### Comandos de ejecución:

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo con acceso local y móvil (red)
npm run dev

# 3. Compilar para producción (genera carpeta /dist)
npm run build

# 4. Probar la versión de producción compilada localmente
npm run preview
```

---

## 🎨 5. Identidad Visual

- **Paleta de color oficial**:
  - Verde oscuro institucional: `#246B57`
  - Verde suave de fondo/resalte: `#EAF3EF`
  - Azul sobrio complementario: `#365B73`
  - Superficies: Blanco `#FFFFFF` y grises neutros cálidos.
- **Tipografía**: `Inter` (sans-serif sobria, moderna y de alta legibilidad en pantallas móviles).

---

## 📋 6. Elementos Institucionales Sujetos a Validación HFPS

Antes de la socialización formal en los servicios clínicos del hospital, se deben coordinar los siguientes puntos:
1. **Logotipo oficial**: Reemplazar el isotipo provisional por el logotipo oficial de alta resolución provisto por la Oficina de Comunicaciones del HFPS.
2. **Protocolo oficial de Código Rojo**: Confirmar el protocolo de activación institucional específico del Hospital Francisco de Paula Santander E.S.E. con la subdirección científica.
3. **Validación de la Coordinación de Docencia-Servicio y Supervisión de Psicología**: Revisión y aval pedagógico final del contenido.

