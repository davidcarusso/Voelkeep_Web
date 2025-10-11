# 🌸 Voelkeep Web - Guía de Inicio Rápido

## 🚀 Instalación y Desarrollo

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar servidor de desarrollo
```bash
npm run dev
```

El servidor estará disponible en: http://localhost:3000

### 3. Build para producción
```bash
npm run build
```

Los archivos optimizados estarán en la carpeta `dist/`

### 4. Preview del build de producción
```bash
npm run preview
```

## 📄 Páginas Disponibles

- **Home**: http://localhost:3000/
- **Gloss Peel**: http://localhost:3000/gloss-peel.html
- **Gift Card**: http://localhost:3000/gift-card.html

## 📁 Estructura del Proyecto

```
Voelkeep_Web/
├── src/                          # Código fuente
│   ├── index.html               # Página principal
│   ├── gloss-peel.html          # Landing Gloss Peel
│   ├── gift-card.html           # Landing Gift Card
│   ├── js/                      # JavaScript modules
│   │   ├── main.js             # Entry point
│   │   ├── config.js           # Configuración centralizada
│   │   ├── components/         # Componentes reutilizables
│   │   │   ├── whatsapp.js    # Botón flotante de WhatsApp
│   │   │   └── footer.js      # Footer dinámico
│   │   └── utils/              # Utilidades
│   │       ├── animations.js  # Animaciones y scroll
│   │       └── tracking.js    # Analytics y tracking
│   └── styles/                  # Estilos CSS
│       ├── main.css            # Estilos principales
│       ├── variables.css       # Variables CSS
│       └── components/         # Estilos por componente
│           ├── whatsapp.css   
│           ├── hero.css       
│           ├── services.css   
│           ├── footer.css     
│           └── animations.css 
├── public/                      # Assets estáticos
│   └── images/                 # Imágenes
│       ├── GiftCard.webp
│       └── Logo_SVG.svg
├── dist/                        # Build de producción (generado)
├── vite.config.js              # Configuración de Vite
├── package.json                # Dependencias
└── README.md                   # Este archivo
```

## 🎨 Características Implementadas

### ✅ Arquitectura
- ✅ Proyecto Vite multi-página
- ✅ Módulos ES6
- ✅ Componentes reutilizables
- ✅ Configuración centralizada

### ✅ Componentes
- ✅ Botón flotante de WhatsApp (dinámico)
- ✅ Footer (generado dinámicamente)
- ✅ Sistema de animaciones (scroll reveal)
- ✅ Lazy loading de imágenes
- ✅ Smooth scroll

### ✅ Funcionalidades
- ✅ Enlaces de WhatsApp con mensajes personalizados
- ✅ Tracking de eventos (CTAs, scroll, tiempo en página)
- ✅ Integración con Google Maps
- ✅ Animaciones y transiciones suaves
- ✅ Responsive design

### ✅ SEO y Performance
- ✅ Meta tags optimizados
- ✅ Open Graph para redes sociales
- ✅ Performance monitoring
- ✅ Build optimizado con minificación

## 🔧 Configuración

### Modificar datos de contacto
Edita el archivo `src/js/config.js`:

```javascript
export const CONFIG = {
  contact: {
    phone: '+5491123387610',
    phoneFormatted: '+54 9 11 2338-7610',
    instagram: 'voelkeep',
    // ...
  },
  // ...
};
```

### Agregar nuevas páginas
1. Crea el archivo HTML en `src/`
2. Agrega el entry point en `vite.config.js`:

```javascript
input: {
  main: resolve(__dirname, 'src/index.html'),
  nuevaPagina: resolve(__dirname, 'src/nueva-pagina.html'),
}
```

## 📱 Integración con WhatsApp

Los enlaces de WhatsApp se configuran usando el atributo `data-whatsapp`:

```html
<!-- Con mensaje predefinido -->
<a href="#" data-whatsapp="glossPeel">Consultar</a>

<!-- Con mensaje personalizado -->
<a href="#" 
   data-whatsapp="general" 
   data-whatsapp-message="Mensaje personalizado">
  Consultar
</a>
```

Mensajes disponibles en `config.js`:
- `general` - Consulta general
- `agendar` - Agendar turno
- `glossPeel` - Consulta Gloss Peel
- `limpieza` - Limpieza facial
- `ritual` - Ritual corporal
- `giftCard` - Gift cards

## 🎯 Deploy

### Vercel (Recomendado)

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Conecta tu repositorio en Netlify
2. Configura:
   - Build command: `npm run build`
   - Publish directory: `dist`

### GitHub Pages

1. Build:
```bash
npm run build
```

2. Sube la carpeta `dist/` a la rama `gh-pages`

## 🐛 Troubleshooting

### El mapa no carga
Verifica la URL del mapa en `config.js` y asegúrate de que el iframe de Google Maps tenga la URL correcta.

### Los estilos no se aplican
Asegúrate de que el servidor de desarrollo esté corriendo con `npm run dev`.

### Error al importar módulos
Verifica que todos los imports usen rutas relativas correctas y que los archivos existan.

## 📞 Soporte

Para consultas sobre el proyecto:
- **Email**: info@voelkeep.com
- **Instagram**: [@voelkeep](https://instagram.com/voelkeep)

---

Desarrollado con ❤️ por **SixSight Studio** - UADE Team Two
