// Hooks de React
import { useEffect, useState } from "react"

// Sonido ambiental
import ambientSound from "./assets/ambient.mp3"

// Referencia persistente de audio
import { useRef } from "react"

function App() {

  // Estados principales
  const [signal, setSignal] = useState(78)
  const [hovered, setHovered] = useState(false)

  // Audio ambiental
  const audioRef = useRef(
    new Audio(ambientSound)
  )

  // Mensajes dinámicos
  const messages = [
    "Frecuencia estable",
    "Nodo sincronizado",
    "Señal detectada",
    "Transmisión activa",
    "Observando actividad",
  ]

  // Mensaje actual
  const [message, setMessage] = useState(
    messages[0]
  )

  // Cambio automático de señal
  useEffect(() => {

    const interval = setInterval(() => {

      setSignal(
        Math.floor(Math.random() * 10) + 75
      )

    }, 3000)

    return () => clearInterval(interval)

  }, [])

  // Cambio automático de mensajes
  useEffect(() => {

    const messageInterval = setInterval(() => {

      const randomMessage =
        messages[
          Math.floor(
            Math.random() * messages.length
          )
        ]

      setMessage(randomMessage)

    }, 4000)

    return () =>
      clearInterval(messageInterval)

  }, [])

  // Sonido ambiental en loop
  useEffect(() => {

    const audio = audioRef.current

    audio.loop = true
    audio.volume = 0.2

    audio.play().catch(() => {
      console.log("Autoplay bloqueado")
    })

    return () => {
      audio.pause()
    }

  }, [])

  // Partículas del fondo
  const particles = Array.from({ length: 40 })

  return (

    <div
      style={{
        background: "#050510",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        color: "white",
        fontFamily: "Arial",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      {/* Partículas espaciales */}
      {particles.map((_, index) => (

        <div
          key={index}

          style={{
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,

            background:
              Math.random() > 0.5
                ? "#8b5cf6"
                : "white",

            borderRadius: "50%",

            position: "absolute",

            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,

            opacity: Math.random() * 0.5,

            animation: `
              pulse
              ${Math.random() * 5 + 2}s
              ease-in-out
              infinite
            `,
          }}
        />

      ))}

      {/* Glow principal */}
      <div
        style={{
          width: "600px",
          height: "600px",

          borderRadius: "50%",

          background:
            signal > 80
              ? "#a855f7"
              : "#6d28d9",

          position: "absolute",

          filter: "blur(180px)",

          opacity: hovered ? 0.4 : 0.25,

          transition: "0.5s ease",
        }}
      />

      {/* Línea horizontal HUD */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",

          height: "1px",

          background: "rgba(255,255,255,0.08)",

          opacity: 0.5,
        }}
      />

      {/* Línea vertical HUD */}
      <div
        style={{
          position: "absolute",
          width: "1px",

          left: "50%",
          top: "50%",

          transform: "translateY(-50%)",

          height: "700px",

          background: "rgba(255,255,255,0.08)",

          opacity: 0.5,
        }}
      />

      {/* Línea scan animada */}
      <div
        style={{
          position: "absolute",

          width: "100%",
          height: "2px",

          background:
            "rgba(255,255,255,0.06)",

          top: "0%",

          animation:
            "scan 6s linear infinite",

          zIndex: 1,
        }}
      />

      {/* Núcleo principal */}
      <div
        style={{
          width: "420px",
          height: "420px",

          borderRadius: "50%",

          border:
            "1px solid rgba(255,255,255,0.08)",

          background:
            "rgba(255,255,255,0.03)",

          backdropFilter: "blur(20px)",

          display: "flex",
          flexDirection: "column",

          justifyContent: "center",
          alignItems: "center",

          position: "relative",

          zIndex: 2,

          transform: hovered
            ? "scale(1.03)"
            : "scale(1)",

          transition: "0.4s ease",

        }}

        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >

        {/* Nombre del sistema */}
        <p
          style={{
            letterSpacing: "8px",
            opacity: 0.5,
            marginBottom: "25px",
          }}
        >
          VANTA
        </p>

        {/* Porcentaje dinámico */}
        <h1
          style={{
            fontSize: "5rem",

            margin: 0,

            color:
              signal > 80
                ? "#c084fc"
                : "#ffffff",

            textShadow:
              "0 0 20px rgba(255,255,255,0.4)",

            lineHeight: "1",

            animation:
              "pulse 4s ease-in-out infinite",
          }}
        >
          {signal}%
        </h1>

        {/* Mensaje dinámico */}
        <p
          style={{
            opacity: 0.6,

            marginTop: "25px",

            transition: "0.5s ease",

            animation:
              "fadeText 4s ease-in-out infinite",
          }}
        >
          {message}
        </p>

        {/* Órbita giratoria */}
        <div
          style={{
            width: "520px",
            height: "520px",

            borderRadius: "50%",

            border:
              "1px solid rgba(255,255,255,0.05)",

            position: "absolute",

            boxShadow:
              "0 0 40px rgba(139, 92, 246, 0.2)",

            animation:
              "spin 20s linear infinite",
          }}
        />

        {/* Estado del sistema */}
        <div
          style={{
            position: "absolute",

            top: "-20px",
            right: "40px",

            fontSize: "0.8rem",

            letterSpacing: "4px",

            opacity: 0.4,
          }}
        >
          SIGNAL ACTIVE
        </div>

        {/* Build experimental */}
        <div
          style={{
            position: "absolute",

            bottom: "-30px",
            left: "20px",

            fontSize: "0.8rem",

            opacity: 0.3,

            letterSpacing: "3px",
          }}
        >
          EXPERIMENTAL BUILD
        </div>

      </div>
    </div>
  )
}

// Animaciones CSS dinámicas
const style = document.createElement("style")

style.innerHTML = `

@keyframes spin {

  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {

  0% {
    opacity: 0.7;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(1.05);
  }

  100% {
    opacity: 0.7;
    transform: scale(1);
  }
}

@keyframes fadeText {

  0% {
    opacity: 0.3;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.3;
  }
}

@keyframes scan {

  0% {
    top: 0%;
  }

  100% {
    top: 100%;
  }
}
`

document.head.appendChild(style)

export default App