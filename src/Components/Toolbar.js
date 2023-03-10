export default function Toolbar() {
    return (
        <div>
            <Button message="Playing!">
                Play Movie
            </Button>
            <Button message="Uploading!">
                Upload Image
            </Button>
        </div>
    );
}

function Button({ message, children }) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}