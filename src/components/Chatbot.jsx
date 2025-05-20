import { useEffect, useRef } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";
import "./Chatbot.css";

export const Chatbot = () => {
    const chatInstanceRef = useRef(null);

    useEffect(() => {
        // Crear el chat en modo ventana centrada
        chatInstanceRef.current = createChat({
            // URL del webhook de n8n
            webhookUrl:
                "https://albertom.app.n8n.cloud/webhook/fc8edf50-77e0-49c6-acbb-d0dfefbddf96/chat",

            // Configuración estándar del webhook
            webhookConfig: {
                method: "POST",
                headers: {},
            },

            // Elemento donde se renderizará el chat
            target: "#chat-window-container",

            // Modo fullscreen
            mode: "fullscreen",

            showWelcomeScreen: false,
            chatInputKey: "chatInput",
            chatSessionKey: "sessionId",
            defaultLanguage: "es",

            // Mensajes iniciales
            initialMessages: ["¡Hola! 👋", "¿En qué puedo ayudarte?"],

            // Configuración del idioma
            i18n: {
                es: {
                    title: "",
                    subtitle: "",
                    footer: "",
                    getStarted: "Comenzar chat",
                    inputPlaceholder: "¿Dame alguna pista?",
                },
            },

            // Metadatos opcionales
            metadata: {
                userId: "user-123",
                source: "fullscreen-app",
            },
        });

        // Eliminar mensajes de consola no deseados
        console.log = function () {};
        console.error = function () {};
        console.warn = function () {};
    }, []);

    return (
        <div
            id="fullscreen-chat-container"
            style={{
                // Contenedor que ocupa el espacio disponible sin scroll
                position: "relative",
                width: "100%",
                height: "100%",
                // Centrar el contenido
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // Padding mínimo para maximizar espacio
                padding: "0.5rem",
            }}
        >
            {/* Contenedor interno que simula una ventana */}
            <div
                id="chat-window-container"
                style={{
                    width: "95%",
                    maxWidth: "1200px",
                    height: "95%",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backgroundColor: "rgba(44, 51, 51, 0.95)",
                }}
            ></div>
        </div>
    );
};

export default Chatbot;
