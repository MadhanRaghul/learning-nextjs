const Card = ({children}:{
    children: React.ReactNode
}) => {
    const cardStyle = {
        padding: "100px",
        margin: "10px",
        boxShadow: "0 3px 5px 0px grey",
        borderRadius: "7px",
        display: "flex",
        backgroundColor: "lightyellow",
        justifyContent: "center",
        alignItems: "center"
    }

    return <div style={cardStyle}>{children}</div>
}

export default Card