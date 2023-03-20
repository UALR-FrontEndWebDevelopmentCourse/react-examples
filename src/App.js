import Header from "./Components/Header";
import Main from "./Components/Main";

// TODO 02. Here we define the routes
/*
Our application is defined within the <App> component.
To simplify things, we will split our application into two parts.
The <Header> component will contain links to navigate throughout the website.
The <Main> component is where the rest of the content will be rendered.
 */
export default function App() {
    return (
        <div>
            <Header/>
            <Main/>
        </div>
    );
}
