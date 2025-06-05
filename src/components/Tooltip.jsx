export function Tooltip({isVisible, message}) {
    return(
        <div className="teal lighten-2" style={{
            visibility: isVisible ? "visible" : "hidden",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.3s ease",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            zIndex: 1000,
        }}>
            {message}
        </div>
    )
}