import "./Tab.css"
import Button from 'react-bootstrap/Button';

function Tab() {

    return (
        <div className="tabLayout">
            <Button className="tabButton">Tab 1</Button>
            <Button className="tabButton">Tab 2</Button>
            <Button className="tabButton">Tab 3</Button>
        </div>
    )
}

export default Tab;