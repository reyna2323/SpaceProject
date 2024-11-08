import Button from "react-bootstrap/Button";
import timelineEndNode from "../assets/TimelineEndNode.png";
import timelineInterNode from "../assets/TimelineInterNode.png";
import timeline2WayNode from "../assets/Timeline2WayNode.png";
import timelineEndNodeUpsideDown from "../assets/TimelineEndNodeUpsideDown.png";
import timelineEndNodeActive from "../assets/TimelineEndNodeActive.png";
import timeline2WayNodeActive from "../assets/Timeline2WayNodeActive.png";
import timelineEndNodeUpsideDownActive from "../assets/TimelineEndNodeUpsideDownActive.png";
import TimelinePanel from "./TimelinePanel";
import TimelineButton from "./TimelineButton";

function Timeline() {
    const width = window.innerHeight/5
    const height = window.innerHeight/5
    const interheight = window.innerHeight/2
    const top = 50
    const left = 35

    return(
        <div>
            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `${top}%`,
                left: `${left}%`,
                gap: '10%'
            }}>
                <TimelineButton width={width} height={height} node1={timelineEndNode} node2={timelineEndNodeActive}/>
                <TimelinePanel header={"Apollo 1"}
                               prompt={"Apollo 1"}/>
            </div>

            <Button style={{
                display: "flex",
                position: "absolute",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${interheight}px`,
                maxHeight: `${interheight}px`,
                height: `${interheight}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${height}px)`,
                left: `${left}%`


            }}></Button>


            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `calc(${top}% + ${3.5 * height}px)`,
                left: `${left}%`,
                gap: '10%'
            }}>
                <TimelineButton width={width} height={height} node1={timeline2WayNode} node2={timeline2WayNodeActive}/>
                <TimelinePanel header={"Apollo 4"}
                               prompt={"Apollo 4"}/>
            </div>

            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${interheight}px`,
                maxHeight: `${interheight}px`,
                height: `${interheight}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${4.5 * height}px)`,
                left: `${left}%`

            }}></Button>
            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `calc(${top}% + ${7 * height}px)`,
                left: `${left}%`,
                gap: '10%'
            }}>
                <TimelineButton width={width} height={height} node1={timeline2WayNode} node2={timeline2WayNodeActive}/>
                <TimelinePanel header={"Apollo 5"}
                               prompt={"Apollo 5"}/>
            </div>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${interheight}px`,
                maxHeight: `${interheight}px`,
                height: `${interheight}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${8 * height}px)`,
                left: `${left}%`

            }}></Button>
            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `calc(${top}% + ${10.5 * height}px)`,
                left: `${left}%`,
                gap: '10%'
            }}>
                <TimelineButton width={width} height={height} node1={timeline2WayNode} node2={timeline2WayNodeActive}/>
                <TimelinePanel header={"Apollo 6"}
                               prompt={"Apollo 6"}/>
            </div>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${interheight}px`,
                maxHeight: `${interheight}px`,
                height: `${interheight}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${11.5 * height}px)`,
                left: `${left}%`

            }}></Button>
            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `calc(${top}% + ${14 * height}px)`,
                left: `${left}%`,
                gap: '10%'
            }}>
                <TimelineButton width={width} height={height} node1={timeline2WayNode} node2={timeline2WayNodeActive}/>
                <TimelinePanel header={"Apollo 7"}
                               prompt={"Apollo 7"}/>
            </div>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${interheight}px`,
                maxHeight: `${interheight}px`,
                height: `${interheight}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${15 * height}px)`,
                left: `${left}%`

            }}></Button>
            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `calc(${top}% + ${17.5 * height}px)`,
                left: `${left}%`,
                gap: '10%'
            }}>
                <TimelineButton width={width} height={height} node1={timeline2WayNode} node2={timeline2WayNodeActive}/>
                <TimelinePanel header={"Apollo 8"}
                               prompt={"Apollo 8"}/>
            </div>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${interheight}px`,
                maxHeight: `${interheight}px`,
                height: `${interheight}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${18.5 * height}px)`,
                left: `${left}%`

            }}></Button>
            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `calc(${top}% + ${21 * height}px)`,
                left: `${left}%`,
                gap: '10%'
            }}>
                <TimelineButton width={width} height={height} node1={timeline2WayNode} node2={timeline2WayNodeActive}/>
                <TimelinePanel header={"Apollo 9"}
                               prompt={"Apollo 9"}/>
            </div>

            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${interheight}px`,
                maxHeight: `${interheight}px`,
                height: `${interheight}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${22 * height}px)`,
                left: `${left}%`

            }}></Button>
            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `calc(${top}% + ${24.5 * height}px)`,
                left: `${left}%`,
                gap: '10%'
            }}>
                <TimelineButton width={width} height={height} node1={timeline2WayNode} node2={timeline2WayNodeActive}/>
                <TimelinePanel header={"Apollo 10"}
                               prompt={"Apollo 10"}/>
            </div>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${interheight}px`,
                maxHeight: `${interheight}px`,
                height: `${interheight}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${25.5 * height}px)`,
                left: `${left}%`

            }}></Button>
            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `calc(${top}% + ${28 * height}px)`,
                left: `${left}%`,
                gap: '10%'
            }}>
                <TimelineButton width={width} height={height} node1={timeline2WayNode} node2={timeline2WayNodeActive}/>
                <TimelinePanel header={"Apollo 11"}
                               prompt={"Apollo 11"}/>
            </div>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${interheight}px`,
                maxHeight: `${interheight}px`,
                height: `${interheight}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${29 * height}px)`,
                left: `${left}%`

            }}></Button>
            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `calc(${top}% + ${31.5 * height}px)`,
                left: `${left}%`,
                gap: '10%'
            }}>
                <TimelineButton width={width} height={height} node1={timeline2WayNode} node2={timeline2WayNodeActive}/>
                <TimelinePanel header={"Apollo 12"}
                               prompt={"Apollo 12"}/>
            </div>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${interheight}px`,
                maxHeight: `${interheight}px`,
                height: `${interheight}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${32.5 * height}px)`,
                left: `${left}%`

            }}></Button>
            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `calc(${top}% + ${35 * height}px)`,
                left: `${left}%`,
                gap: '10%'
            }}>
                <TimelineButton width={width} height={height} node1={timeline2WayNode} node2={timeline2WayNodeActive}/>
                <TimelinePanel header={"Apollo 13"}
                               prompt={"Apollo 13"}/>
            </div>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${interheight}px`,
                maxHeight: `${interheight}px`,
                height: `${interheight}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${36 * height}px)`,
                left: `${left}%`

            }}></Button>
            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `calc(${top}% + ${38.5 * height}px)`,
                left: `${left}%`,
                gap: '10%'
            }}>
                <TimelineButton width={width} height={height} node1={timeline2WayNode} node2={timeline2WayNodeActive}/>
                <TimelinePanel header={"Apollo 14"}
                               prompt={"Apollo 14"}/>
            </div>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${interheight}px`,
                maxHeight: `${interheight}px`,
                height: `${interheight}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${39.5 * height}px)`,
                left: `${left}%`

            }}></Button>
            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `calc(${top}% + ${42 * height}px)`,
                left: `${left}%`,
                gap: '10%'
            }}>
                <TimelineButton width={width} height={height} node1={timeline2WayNode} node2={timeline2WayNodeActive}/>
                <TimelinePanel header={"Apollo 15"}
                               prompt={"Apollo 15"}/>
            </div>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${interheight}px`,
                maxHeight: `${interheight}px`,
                height: `${interheight}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${43 * height}px)`,
                left: `${left}%`

            }}></Button>
            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `calc(${top}% + ${45.5 * height}px)`,
                left: `${left}%`,
                gap: '10%'
            }}>
                <TimelineButton width={width} height={height} node1={timeline2WayNode} node2={timeline2WayNodeActive}/>
                <TimelinePanel header={"Apollo 16"}
                               prompt={"Apollo 16"}/>
            </div>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${interheight}px`,
                maxHeight: `${interheight}px`,
                height: `${interheight}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${46.5 * height}px)`,
                left: `${left}%`

            }}></Button>
            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `calc(${top}% + ${49 * height}px)`,
                left: `${left}%`,
                gap: '10%'
            }}>
                <TimelineButton width={width} height={height} node1={timelineEndNodeUpsideDown} node2={timelineEndNodeUpsideDownActive}/>
                <TimelinePanel header={"Apollo 17"}
                               prompt={"Apollo 17"}/>
            </div>
        </div>
    )
}

export default Timeline;