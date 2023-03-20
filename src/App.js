import NameForm from "./Components/NameForm";
import UserForm from "./Components/UserForm";
import UncontrolledNameForm from "./Components/UncontrolledNameForm";
import UncontrolledRefNameForm from "./Components/UncontrolledRefNameForm";

export default function App() {
    return (
        <div>
            <h1>Uncontrolled components</h1>
            <h2>Function-based components</h2>
            <UncontrolledNameForm/>
            <UncontrolledRefNameForm/>
        </div>
    );
}
