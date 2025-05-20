# Asistente Virtual - Chatbot con n8n

## Descripción

Este proyecto implementa un chatbot interactivo utilizando React y la plataforma n8n. El chatbot ofrece una interfaz elegante y moderna que permite a los usuarios interactuar con un asistente virtual inteligente.

## Características

-   **Interfaz moderna**: Diseño elegante con gradientes, sombras y animaciones
-   **Ventana personalizada**: Chat en formato ventana con bordes redondeados
-   **Respuestas dinámicas**: Integrado con n8n para procesar consultas y devolver respuestas inteligentes
-   **Totalmente personalizable**: Estilos CSS completamente personalizables
-   **Experiencia de usuario mejorada**: Animaciones suaves y efectos visuales

## Tecnologías utilizadas

-   **React**: Biblioteca de JavaScript para construir interfaces de usuario
-   **Vite**: Herramienta de compilación rápida para desarrollo moderno
-   **n8n Chat API**: API para la integración de chatbots inteligentes
-   **CSS moderno**: Variables CSS, flexbox, gradientes y animaciones

## Instalación

1. Clona este repositorio:

    ```bash
    git clone <url-del-repositorio>
    cd chatbot2
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo:

    ```bash
    npm run dev
    ```

4. Abre tu navegador en `http://localhost:5173` (o el puerto que indique Vite)

## Configuración

Para configurar el chatbot con tu propia instancia de n8n, edita el archivo `src/components/Chatbot.jsx` y actualiza la URL del webhook:

```javascript
webhookUrl: "https://tu-instancia-n8n.com/webhook/tu-id-webhook/chat",
```

## Personalización

Puedes personalizar la apariencia del chatbot modificando las variables CSS en `src/components/Chatbot.css`. Las principales variables que puedes ajustar son:

```css
:root {
    --chat--color-primary: #ff7846; /* Color principal */
    --chat--color-secondary: #6c63ff; /* Color secundario */
    --chat--message--bot--background: #3b3131; /* Fondo para mensajes del bot */
    --chat--message--user--background: #ff7846; /* Fondo para mensajes del usuario */
}
```

## Estructura del proyecto

-   `src/App.jsx`: Componente principal que contiene el título y el chatbot
-   `src/App.css`: Estilos para la aplicación principal
-   `src/components/Chatbot.jsx`: Componente del chatbot que integra con n8n
-   `src/components/Chatbot.css`: Estilos personalizados para el chatbot

## Contribución

Las contribuciones son bienvenidas. Por favor, sigue estos pasos para contribuir:

1. Haz fork del repositorio
2. Crea una rama para tu función (`git checkout -b feature/nueva-funcion`)
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva función'`)
4. Haz push a la rama (`git push origin feature/nueva-funcion`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Autor

Desarrollado por Alberto Martínez.
