function FloatingModule({
  title,
  value,
  description,
  top,
  right,
}) {
  return (
    <div
      style={{
        position: "absolute",
        right: right,
        top: top,
        width: "220px",
        height: "220px",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(20px)",
        borderRadius: "30px",
        padding: "30px",
        zIndex: 2,
      }}
    >
      <p style={{ opacity: 0.5 }}>
        {title}
      </p>

      <h3
        style={{
          fontSize: "4rem",
          marginTop: "20px",
        }}
      >
        {value}
      </h3>

      <p style={{ opacity: 0.4 }}>
        {description}
      </p>
    </div>
  )
}

export default FloatingModule