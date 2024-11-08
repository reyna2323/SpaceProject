import timeline2WayNode from "../assets/Timeline2WayNode.png";
import timelineEndNode from "../assets/TimelineEndNode.png";
import timelineInterNode from "../assets/TimelineInterNode.png";
import timelineEndNodeUpsideDown from "../assets/TimelineEndNodeUpsideDown.png";
import Button from 'react-bootstrap/Button';

function scrollToPercentage(percentage) {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollToPosition = (scrollHeight * percentage) / 100;

    window.scrollTo({
        top: scrollToPosition,  // Scrolls to the desired vertical position
        behavior: 'smooth',     // Smooth scrolling

    });
}

function SideBar() {
    const width = window.innerHeight/35
    const height = window.innerHeight/35
    const top = 12
    const left = 6

    return (
        <div style={{position: 'fixed', left: `${left}%`, top: `${top}%`}}>
            {/*<img src={sideBarImage} className="sideBarImg" />*/}

            <Button onClick={() => scrollToPercentage(0/15 * 100)}
                    style={{
                        position: "absolute",
                        display: "flex",
                        backgroundImage: `url(${timelineEndNode})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'transparent',
                        minWidth: `${width}px`,
                        maxWidth: `${width}px`,
                        width: `${width}px`,
                        minHeight: `${height}px`,
                        maxHeight: `${height}px`,
                        height: `${height}px`,
                        border: 'none',
                        padding: '0',
                        outline: 'none',
                        top: `${top}%`,
                        left: `${left}%`

                    }}><span style={{
                color: "white",
                marginLeft: "2vw", // Space between image and text
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
            }}>
                Apollo 1
            </span></Button>

            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${height}px`,
                maxHeight: `${height}px`,
                height: `${height}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${height}px)`,
                left: `${left}%`

            }}></Button>
            <Button onClick={() => scrollToPercentage(1/15 * 100 + 1)}
                    style={{
                        position: "absolute",
                        display: "flex",
                        backgroundImage: `url(${timeline2WayNode})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'transparent',
                        minWidth: `${width}px`,
                        maxWidth: `${width}px`,
                        width: `${width}px`,
                        minHeight: `${height}px`,
                        maxHeight: `${height}px`,
                        height: `${height}px`,
                        border: 'none',
                        padding: '0',
                        outline: 'none',
                        top: `calc(${top}% + ${2 * height}px)`,
                        left: `${left}%`

                    }}><span style={{
                color: "white",
                marginLeft: "2vw", // Space between image and text
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
            }}>
                Apollo 4
            </span></Button>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${height}px`,
                maxHeight: `${height}px`,
                height: `${height}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${3 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button onClick={() => scrollToPercentage(2/15 * 100 + 1)}
                    style={{
                        position: "absolute",
                        display: "flex",
                        backgroundImage: `url(${timeline2WayNode})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'transparent',
                        minWidth: `${width}px`,
                        maxWidth: `${width}px`,
                        width: `${width}px`,
                        minHeight: `${height}px`,
                        maxHeight: `${height}px`,
                        height: `${height}px`,
                        border: 'none',
                        padding: '0',
                        outline: 'none',
                        top: `calc(${top}% + ${4 * height}px)`,
                        left: `${left}%`

                    }}><span style={{
                color: "white",
                marginLeft: "2vw", // Space between image and text
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
            }}>
                Apollo 5
            </span></Button>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${height}px`,
                maxHeight: `${height}px`,
                height: `${height}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${5 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button onClick={() => scrollToPercentage(3/15 * 100 + 1)}
                    style={{
                        position: "absolute",
                        display: "flex",
                        backgroundImage: `url(${timeline2WayNode})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'transparent',
                        minWidth: `${width}px`,
                        maxWidth: `${width}px`,
                        width: `${width}px`,
                        minHeight: `${height}px`,
                        maxHeight: `${height}px`,
                        height: `${height}px`,
                        border: 'none',
                        padding: '0',
                        outline: 'none',
                        top: `calc(${top}% + ${6 * height}px)`,
                        left: `${left}%`

                    }}><span style={{
                color: "white",
                marginLeft: "2vw", // Space between image and text
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
            }}>
                Apollo 6
            </span></Button>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${height}px`,
                maxHeight: `${height}px`,
                height: `${height}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${7 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button onClick={() => scrollToPercentage(4/15 * 100 + 1)}
                    style={{
                        position: "absolute",
                        display: "flex",
                        backgroundImage: `url(${timeline2WayNode})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'transparent',
                        minWidth: `${width}px`,
                        maxWidth: `${width}px`,
                        width: `${width}px`,
                        minHeight: `${height}px`,
                        maxHeight: `${height}px`,
                        height: `${height}px`,
                        border: 'none',
                        padding: '0',
                        outline: 'none',
                        top: `calc(${top}% + ${8 * height}px)`,
                        left: `${left}%`

                    }}><span style={{
                color: "white",
                marginLeft: "2vw", // Space between image and text
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
            }}>
                Apollo 7
            </span></Button>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${height}px`,
                maxHeight: `${height}px`,
                height: `${height}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${9 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button onClick={() => scrollToPercentage(5/15 * 100 + 1)}
                    style={{
                        position: "absolute",
                        display: "flex",
                        backgroundImage: `url(${timeline2WayNode})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'transparent',
                        minWidth: `${width}px`,
                        maxWidth: `${width}px`,
                        width: `${width}px`,
                        minHeight: `${height}px`,
                        maxHeight: `${height}px`,
                        height: `${height}px`,
                        border: 'none',
                        padding: '0',
                        outline: 'none',
                        top: `calc(${top}% + ${10 * height}px)`,
                        left: `${left}%`

                    }}><span style={{
                color: "white",
                marginLeft: "2vw", // Space between image and text
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
            }}>
                Apollo 8
            </span></Button>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${height}px`,
                maxHeight: `${height}px`,
                height: `${height}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${11 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button onClick={() => scrollToPercentage(6/15 * 100 + 1)}
                    style={{
                        position: "absolute",
                        display: "flex",
                        backgroundImage: `url(${timeline2WayNode})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'transparent',
                        minWidth: `${width}px`,
                        maxWidth: `${width}px`,
                        width: `${width}px`,
                        minHeight: `${height}px`,
                        maxHeight: `${height}px`,
                        height: `${height}px`,
                        border: 'none',
                        padding: '0',
                        outline: 'none',
                        top: `calc(${top}% + ${12 * height}px)`,
                        left: `${left}%`

                    }}><span style={{
                color: "white",
                marginLeft: "2vw", // Space between image and text
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
            }}>
                Apollo 9
            </span></Button>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${height}px`,
                maxHeight: `${height}px`,
                height: `${height}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${13 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button onClick={() => scrollToPercentage(7/15 * 100 + 1)}
                    style={{
                        position: "absolute",
                        display: "flex",
                        backgroundImage: `url(${timeline2WayNode})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'transparent',
                        minWidth: `${width}px`,
                        maxWidth: `${width}px`,
                        width: `${width}px`,
                        minHeight: `${height}px`,
                        maxHeight: `${height}px`,
                        height: `${height}px`,
                        border: 'none',
                        padding: '0',
                        outline: 'none',
                        top: `calc(${top}% + ${14 * height}px)`,
                        left: `${left}%`

                    }}><span style={{
                color: "white",
                marginLeft: "2vw", // Space between image and text
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
            }}>
                Apollo 10
            </span></Button>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${height}px`,
                maxHeight: `${height}px`,
                height: `${height}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${15 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button onClick={() => scrollToPercentage(8/15 * 100 + 1)}
                    style={{
                        position: "absolute",
                        display: "flex",
                        backgroundImage: `url(${timeline2WayNode})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'transparent',
                        minWidth: `${width}px`,
                        maxWidth: `${width}px`,
                        width: `${width}px`,
                        minHeight: `${height}px`,
                        maxHeight: `${height}px`,
                        height: `${height}px`,
                        border: 'none',
                        padding: '0',
                        outline: 'none',
                        top: `calc(${top}% + ${16 * height}px)`,
                        left: `${left}%`

                    }}><span style={{
                color: "white",
                marginLeft: "2vw", // Space between image and text
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
            }}>
                Apollo 11
            </span></Button>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${height}px`,
                maxHeight: `${height}px`,
                height: `${height}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${17 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button onClick={() => scrollToPercentage(9/15 * 100 + 1)}
                    style={{
                        position: "absolute",
                        display: "flex",
                        backgroundImage: `url(${timeline2WayNode})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'transparent',
                        minWidth: `${width}px`,
                        maxWidth: `${width}px`,
                        width: `${width}px`,
                        minHeight: `${height}px`,
                        maxHeight: `${height}px`,
                        height: `${height}px`,
                        border: 'none',
                        padding: '0',
                        outline: 'none',
                        top: `calc(${top}% + ${18 * height}px)`,
                        left: `${left}%`

                    }}><span style={{
                color: "white",
                marginLeft: "2vw", // Space between image and text
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
            }}>
                Apollo 12
            </span></Button>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${height}px`,
                maxHeight: `${height}px`,
                height: `${height}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${19 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button onClick={() => scrollToPercentage(10/15 * 100 + 1)}
                    style={{
                        position: "absolute",
                        display: "flex",
                        backgroundImage: `url(${timeline2WayNode})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'transparent',
                        minWidth: `${width}px`,
                        maxWidth: `${width}px`,
                        width: `${width}px`,
                        minHeight: `${height}px`,
                        maxHeight: `${height}px`,
                        height: `${height}px`,
                        border: 'none',
                        padding: '0',
                        outline: 'none',
                        top: `calc(${top}% + ${20 * height}px)`,
                        left: `${left}%`

                    }}><span style={{
                color: "white",
                marginLeft: "2vw", // Space between image and text
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
            }}>
                Apollo 13
            </span></Button>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${height}px`,
                maxHeight: `${height}px`,
                height: `${height}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${21 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button onClick={() => scrollToPercentage(11/15 * 100 + 1)}
                    style={{
                        position: "absolute",
                        display: "flex",
                        backgroundImage: `url(${timeline2WayNode})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'transparent',
                        minWidth: `${width}px`,
                        maxWidth: `${width}px`,
                        width: `${width}px`,
                        minHeight: `${height}px`,
                        maxHeight: `${height}px`,
                        height: `${height}px`,
                        border: 'none',
                        padding: '0',
                        outline: 'none',
                        top: `calc(${top}% + ${22 * height}px)`,
                        left: `${left}%`

                    }}><span style={{
                color: "white",
                marginLeft: "2vw", // Space between image and text
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
            }}>
                Apollo 14
            </span></Button>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${height}px`,
                maxHeight: `${height}px`,
                height: `${height}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${23 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button onClick={() => scrollToPercentage(12/15 * 100 + 1)}
                    style={{
                        position: "absolute",
                        display: "flex",
                        backgroundImage: `url(${timeline2WayNode})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'transparent',
                        minWidth: `${width}px`,
                        maxWidth: `${width}px`,
                        width: `${width}px`,
                        minHeight: `${height}px`,
                        maxHeight: `${height}px`,
                        height: `${height}px`,
                        border: 'none',
                        padding: '0',
                        outline: 'none',
                        top: `calc(${top}% + ${24 * height}px)`,
                        left: `${left}%`

                    }}><span style={{
                color: "white",
                marginLeft: "2vw", // Space between image and text
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
            }}>
                Apollo 15
            </span></Button>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${height}px`,
                maxHeight: `${height}px`,
                height: `${height}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${25 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button onClick={() => scrollToPercentage(13/15 * 100 + 1)}
                    style={{
                        position: "absolute",
                        display: "flex",
                        backgroundImage: `url(${timeline2WayNode})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'transparent',
                        minWidth: `${width}px`,
                        maxWidth: `${width}px`,
                        width: `${width}px`,
                        minHeight: `${height}px`,
                        maxHeight: `${height}px`,
                        height: `${height}px`,
                        border: 'none',
                        padding: '0',
                        outline: 'none',
                        top: `calc(${top}% + ${26 * height}px)`,
                        left: `${left}%`

                    }}><span style={{
                color: "white",
                marginLeft: "2vw", // Space between image and text
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
            }}>
                Apollo 16
            </span></Button>
            <Button style={{
                position: "absolute",
                display: "flex",
                backgroundImage: `url(${timelineInterNode})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${height}px`,
                maxHeight: `${height}px`,
                height: `${height}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                top: `calc(${top}% + ${27 * height}px)`,
                left: `${left}%`

            }}></Button>

            <Button onClick={() => scrollToPercentage(14/15 * 100 + 1)}
                    style={{
                        position: "absolute",
                        display: "flex",
                        backgroundImage: `url(${timelineEndNodeUpsideDown})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'transparent',
                        minWidth: `${width}px`,
                        maxWidth: `${width}px`,
                        width: `${width}px`,
                        minHeight: `${height}px`,
                        maxHeight: `${height}px`,
                        height: `${height}px`,
                        border: 'none',
                        padding: '0',
                        outline: 'none',
                        top: `calc(${top}% + ${28 * height}px)`,
                        left: `${left}%`

                    }}><span style={{
                color: "white",
                marginLeft: "2vw", // Space between image and text
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
            }}>
                Apollo 17
            </span></Button>


        </div>

    )
}

export default SideBar;