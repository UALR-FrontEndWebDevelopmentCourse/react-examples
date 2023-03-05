function Profile() {
    return (
        <img
            src="https://imgur.com/02vmPIg.gif"
            alt="Ada Lovelace"
        />
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Ada Lovelace. The first programmer.</h1>
            <Profile />
            <Profile />
        </section>
    );
}