import binImage from '../assets/bin.png';
import './Task.css';

function Task() {
    return (
        <div className="task">
            <div className="task-name">
                TASK - 1
            </div>
            <div>
                <button className="remove-task">
                    <img src={binImage} height="20"></img>
                </button>
            </div>
        </div>
    )

}

export default Task