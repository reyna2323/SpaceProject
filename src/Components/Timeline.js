import Button from "react-bootstrap/Button";
import timelineEndNode from "../assets/TimelineEndNode.png";
import timelineInterNode from "../assets/TimelineInterNode.png";
import timeline2WayNode from "../assets/Timeline2WayNode.png";
import timelineEndNodeUpsideDown from "../assets/TimelineEndNodeUpsideDown.png";
import TimelinePanel from "./TimelinePanel";

function Timeline() {
    const width = window.innerHeight/5
    const height = window.innerHeight/5
    const top = 12
    const left = 50
    return(
        <div>
            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `${top}%`,
                left: `${left}%`,
                gap: '2%'
            }}>
                <Button
                    style={{
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
                    }}></Button>
                <TimelinePanel header={"Apollo 1"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis fermentum nisi. Phasellus risus lorem, condimentum ac velit ac, condimentum dictum arcu. Nullam in diam velit. Pellentesque sagittis vehicula quam et elementum. Mauris et quam nec erat efficitur venenatis. Cras ut augue sed nisl rhoncus ullamcorper. Maecenas dictum, velit et maximus cursus, augue dui maximus metus, eu interdum lorem lectus a nunc. Nullam vitae lectus dignissim, sollicitudin sem at, aliquam mi. Aliquam quis hendrerit diam. Curabitur leo ante, cursus eget dolor sit amet, iaculis varius sem. Ut pretium laoreet dolor eget sollicitudin. Cras efficitur libero mollis, lobortis leo ut, ornare nulla. In aliquam efficitur lectus, mollis pulvinar justo tristique id. Duis sem nisl, dapibus quis metus sodales, malesuada ultrices nulla.\n" +
                    "\n" +
                    "Aenean nec urna non quam tincidunt posuere in sed sapien. Nullam vitae lorem egestas, ultrices ante ac, aliquet tellus. Proin id ipsum sapien. Suspendisse sollicitudin interdum leo ut vehicula. Nunc felis enim, consectetur et facilisis vitae, varius in diam. Aliquam eleifend ante id nulla suscipit mattis. Aenean quis felis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a quam bibendum, mollis lectus vel, congue nisi. Proin sed metus vitae turpis elementum sagittis. Fusce quam orci, gravida vel vestibulum eu, consequat in sapien. Integer nec nisl porttitor, lacinia elit id, maximus tortor. Morbi sed ligula eget lectus tristique semper.\n" +
                    "\n" +
                    "Morbi libero ipsum, dignissim eu orci non, maximus porta ante. Maecenas vel velit eu velit ornare maximus. Nullam condimentum consequat ultrices. Vivamus sodales maximus leo vitae vestibulum. Duis ultrices rhoncus sem, vitae blandit urna tincidunt et. Donec sed maximus erat. Nulla malesuada neque non arcu efficitur malesuada. Duis eu faucibus leo, et lobortis arcu. Nulla ex ligula, eleifend id elit ut, vehicula molestie mi. Etiam molestie dui sit amet ultricies facilisis. Vestibulum lorem est, accumsan id libero ut, volutpat pharetra enim.\n" +
                    "\n" +
                    "Etiam pulvinar pharetra eros, in vulputate nulla aliquet gravida. Nam maximus ultrices euismod. Mauris scelerisque libero eu ex convallis, in mattis libero elementum. Integer vehicula purus ipsum, eu eleifend orci blandit a. Sed elementum bibendum dui, eu posuere erat finibus in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus lorem quam, pulvinar in arcu non, viverra mattis justo. In in lectus eu magna molestie placerat a et lacus. Etiam vitae neque sem. Mauris scelerisque felis sit amet erat porttitor vehicula.\n" +
                    "\n" +
                    "Nam eleifend quam eu magna sodales, eu mattis risus pretium. Nulla id molestie metus, et bibendum ipsum. Phasellus accumsan quam quis diam pretium, vitae dictum odio bibendum. Vestibulum a dapibus velit. Donec sed fermentum tortor, eu bibendum nisi. Nulla varius pharetra justo, a porttitor mauris fermentum quis. Nulla hendrerit nunc nulla, sit amet placerat risus pharetra non. Aliquam id pulvinar dui. In ac aliquet magna. Sed luctus leo at diam tristique scelerisque. Fusce mollis turpis tempus, dictum arcu non, iaculis leo. Nam risus est, lacinia sed efficitur nec, auctor fringilla urna. Nulla convallis elit leo, vel ullamcorper ipsum tempus mollis. Curabitur bibendum non dui quis consectetur. Integer lectus ante, finibus sit amet massa sed, lacinia rutrum magna."}/>
            </div>

            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `calc(${top}% + ${height}px)`,
                left: `${left}%`,
            }}>
                <Button style={{
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
            </div>


            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `calc(${top}% + ${2 * height}px)`,
                left: `${left}%`,
                gap: '2%'
            }}>
                <Button
                    style={{
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

                    }}></Button>
                <TimelinePanel/>
            </div>

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
            <Button
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
                Apollo 3
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
            <Button
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
                top: `calc(${top}% + ${7 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button
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
                top: `calc(${top}% + ${9 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button
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
                top: `calc(${top}% + ${11 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button
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
                top: `calc(${top}% + ${13 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button
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
                top: `calc(${top}% + ${15 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button
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
                top: `calc(${top}% + ${17 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button
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
                top: `calc(${top}% + ${19 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button
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
                top: `calc(${top}% + ${21 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button
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
                Apollo ${left}
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
            <Button
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
                top: `calc(${top}% + ${25 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button
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
                top: `calc(${top}% + ${27 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button
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
                        top: `calc(${top}% + ${28 * height}px)`,
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
                top: `calc(${top}% + ${29 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button
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
                        top: `calc(${top}% + ${30 * height}px)`,
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
                top: `calc(${top}% + ${31 * height}px)`,
                left: `${left}%`

            }}></Button>
            <Button
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
                        top: `calc(${top}% + ${32 * height}px)`,
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

export default Timeline;