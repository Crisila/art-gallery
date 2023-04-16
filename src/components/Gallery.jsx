export default function Gallery( {primaryImage, title, artistDisplayName} ) {
    return <div style={{'width': '100%'}}>
        <img src={primaryImage} alt={title} />
        <p>{artistDisplayName}</p>
    </div>
}