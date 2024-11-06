import './TimelinePanel.css';

function TimelinePanel({header, text}) {
    return (
        <div className="panel">
            <header>{header}</header>
            <paragraph>{text}</paragraph>
        </div>
    )
}

export default TimelinePanel;