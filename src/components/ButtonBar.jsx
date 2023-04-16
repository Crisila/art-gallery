export default function ButtonBar({setArtId, artId}) {
    return (
        <div className="button-bar">
            <button 
                type="button"
                onClick={ () => setArtId(artId - 5)} 
                
            >
                    Way Back
            </button>
            
            <button 
                type="button"
                onClick={ () => setArtId(artId - 1)} 
                
            >
                    Back
            </button>

            <button 
                type="button"
                onClick={ () => setArtId(artId + 1)} 
                
            >
                    Next
            </button>

            <button 
                type="button"
                onClick={ () => setArtId(artId + 5)} 
                
            >
                    Next five!
            </button>
        </div>
    );
}