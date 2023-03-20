import NameForm from "./Components/NameForm";
import UserForm from "./Components/UserForm";
import FlavorForm from "./Components/FlavorForm";

export default function App() {
    return (
        <div>
            <h1>Controlled components</h1>
            <h2>Class-based component</h2>
            <NameForm/>
            <h2>Function-based components</h2>
            <UserForm/>
            <h2>Select-based components</h2>
            <FlavorForm/>
        </div>
    );
}
