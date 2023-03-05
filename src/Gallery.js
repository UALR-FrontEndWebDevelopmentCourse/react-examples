function Profile() {
    return (
        <img
            src="https://imgur.com/02vmPIg.gif"
            alt="Ada Lovelace"
        />
    );
}

function Gallery() {
    return (
        <section>
            <h1>Ada Lovelace. The first programmer.</h1>
            <Profile />
            <Profile />
        </section>
    );
}
export default Gallery;