import Button from "react-bootstrap/Button";
import timelineEndNode from "../assets/TimelineEndNode.png";
import timelineInterNode from "../assets/TimelineInterNode.png";
import timeline2WayNode from "../assets/Timeline2WayNode.png";
import timelineEndNodeUpsideDown from "../assets/TimelineEndNodeUpsideDown.png";
import timelineEndNodeActive from "../assets/TimelineEndNodeActive.png";
import timeline2WayNodeActive from "../assets/Timeline2WayNodeActive.png";
import timelineEndNodeUpsideDownActive from "../assets/TimelineEndNodeUpsideDownActive.png";
import TimelinePanel from "./TimelinePanel";
import WikipediaAPI from "./WikipediaAPI";
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
                <TimelinePanel header={"Apollo 2"} text={"Apollo 4 (November 9, 1967), also known as SA-501, was the uncrewed first test flight of the Saturn V launch vehicle, the rocket that eventually took astronauts to the Moon. The space vehicle was assembled in the Vehicle Assembly Building, and was the first to be launched from Kennedy Space Center (KSC) in Florida, ascending from Launch Complex 39, where facilities built specially for the Saturn V had been constructed."}/>
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
                <TimelinePanel header={"Apollo 3"} text={"Apollo 5 (launched January 22, 1968), also known as AS-204, was the uncrewed first flight of the Apollo Lunar Module (LM) that would later carry astronauts to the surface of the Moon. The Saturn IB rocket bearing the LM lifted off from Cape Kennedy on January 22, 1968. The mission was successful, though due to programming problems an alternate mission to that originally planned was executed.\n" +
                    "\n" +
                    "Like Apollo 4, this flight was long delayed, due in part to setbacks in development of the LM, manufactured by Grumman Aircraft. The original Saturn IB rocket that was to take the first LM (LM-1) to space was taken down during the delays and replaced with the one that would have launched Apollo 1 if the spacecraft fire that killed three astronauts had not occurred. LM-1 arrived at the Kennedy Space Center in June 1967; the following months were occupied in testing and placing the LM atop the Saturn IB. After final delays due to equipment trouble, the countdown began on January 21, 1968, and the space vehicle was launched the following day."}/>
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
                <TimelinePanel header={"Apollo 4"} text={"Apollo 6 (April 4, 1968), also known as AS-502, was the third and final uncrewed flight in the United States' Apollo Program and the second test of the Saturn V launch vehicle. It qualified the Saturn V for use on crewed missions, and it was used beginning with Apollo 8 in December 1968.\n" +
                    "\n" +
                    "Apollo 6 was intended to demonstrate the ability of the Saturn V's third stage, the S-IVB, to propel itself and the Apollo spacecraft to lunar distances. Its components began arriving at the Kennedy Space Center in early 1967. Testing proceeded slowly, often delayed by testing of the Saturn V intended for Apollo 4—the inaugural launch of the Saturn V. After that uncrewed mission launched in November 1967, there were fewer delays, but enough so that the flight was postponed from March to April 1968.\n" +
                    "\n" +
                    "The flight plan called for, following trans-lunar injection, a direct return abort using the service module's main engine with a flight time totaling about 10 hours but vibrations damaged some of the Rocketdyne J-2 engines in the second and third stages by rupturing internal fuel lines causing a second-stage engine to shut down early. An additional second-stage engine also shut down early due to cross-wiring with the engine that had shut down. The vehicle's onboard guidance system compensated by burning the second and third stages longer, although the resulting parking orbit was more elliptical than planned. The damaged third-stage engine failed to restart for trans-lunar injection. Flight controllers elected to repeat the flight profile of the previous Apollo 4 test, achieving a high orbit and high-speed return. Despite the engine failures, the flight provided NASA with enough confidence to use the Saturn V for crewed launches; a potential third uncrewed flight was cancelled."}/>
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
                <TimelinePanel header={"Apollo 5"} text={"Apollo 7 (October 11–22, 1968) was the first crewed flight in NASA's Apollo program, and saw the resumption of human spaceflight by the agency after the fire that had killed the three Apollo 1 astronauts during a launch rehearsal test on January 27, 1967. The Apollo 7 crew was commanded by Walter M. Schirra, with command module pilot Donn F. Eisele and Lunar Module pilot R. Walter Cunningham (so designated even though Apollo 7 did not carry a Lunar Module).\n" +
                    "\n" +
                    "The three astronauts were originally designated for the second crewed Apollo flight, and then as backups for Apollo 1. After the Apollo 1 fire, crewed flights were suspended while the cause of the accident was investigated and improvements made to the spacecraft and safety procedures, and uncrewed test flights made. Determined to prevent a repetition of the fire, the crew spent long periods monitoring the construction of their Apollo command and service modules (CSM). Training continued over much of the 21-month pause that followed the Apollo 1 disaster.\n" +
                    "\n" +
                    "Apollo 7 was launched on October 11, 1968, from Cape Kennedy Air Force Station, Florida, and splashed down in the Atlantic Ocean eleven days later. Extensive testing of the CSM took place, and also the first live television broadcast from an American spacecraft. Despite tension between the crew and ground controllers, the mission was a complete technical success, giving NASA the confidence to send Apollo 8 into orbit around the Moon two months later. In part because of these tensions, none of the crew flew in space again, though Schirra had already announced he would retire from NASA after the flight. Apollo 7 fulfilled Apollo 1's mission of testing the CSM in low Earth orbit, and was a significant step towards NASA's goal of landing astronauts on the Moon."}/>
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
                <TimelinePanel header={"Apollo 6"} text={"Apollo 7 (October 11–22, 1968) was the first crewed flight in NASA's Apollo program, and saw the resumption of human spaceflight by the agency after the fire that had killed the three Apollo 1 astronauts during a launch rehearsal test on January 27, 1967. The Apollo 7 crew was commanded by Walter M. Schirra, with command module pilot Donn F. Eisele and Lunar Module pilot R. Walter Cunningham (so designated even though Apollo 7 did not carry a Lunar Module).\n" +
                    "\n" +
                    "The three astronauts were originally designated for the second crewed Apollo flight, and then as backups for Apollo 1. After the Apollo 1 fire, crewed flights were suspended while the cause of the accident was investigated and improvements made to the spacecraft and safety procedures, and uncrewed test flights made. Determined to prevent a repetition of the fire, the crew spent long periods monitoring the construction of their Apollo command and service modules (CSM). Training continued over much of the 21-month pause that followed the Apollo 1 disaster.\n" +
                    "\n" +
                    "Apollo 7 was launched on October 11, 1968, from Cape Kennedy Air Force Station, Florida, and splashed down in the Atlantic Ocean eleven days later. Extensive testing of the CSM took place, and also the first live television broadcast from an American spacecraft. Despite tension between the crew and ground controllers, the mission was a complete technical success, giving NASA the confidence to send Apollo 8 into orbit around the Moon two months later. In part because of these tensions, none of the crew flew in space again, though Schirra had already announced he would retire from NASA after the flight. Apollo 7 fulfilled Apollo 1's mission of testing the CSM in low Earth orbit, and was a significant step towards NASA's goal of landing astronauts on the Moon."}/>
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
                <TimelinePanel header={"Apollo 7"} text={"Apollo 7 (October 11–22, 1968) was the first crewed flight in NASA's Apollo program, and saw the resumption of human spaceflight by the agency after the fire that had killed the three Apollo 1 astronauts during a launch rehearsal test on January 27, 1967. The Apollo 7 crew was commanded by Walter M. Schirra, with command module pilot Donn F. Eisele and Lunar Module pilot R. Walter Cunningham (so designated even though Apollo 7 did not carry a Lunar Module).\n" +
                    "\n" +
                    "The three astronauts were originally designated for the second crewed Apollo flight, and then as backups for Apollo 1. After the Apollo 1 fire, crewed flights were suspended while the cause of the accident was investigated and improvements made to the spacecraft and safety procedures, and uncrewed test flights made. Determined to prevent a repetition of the fire, the crew spent long periods monitoring the construction of their Apollo command and service modules (CSM). Training continued over much of the 21-month pause that followed the Apollo 1 disaster.\n" +
                    "\n" +
                    "Apollo 7 was launched on October 11, 1968, from Cape Kennedy Air Force Station, Florida, and splashed down in the Atlantic Ocean eleven days later. Extensive testing of the CSM took place, and also the first live television broadcast from an American spacecraft. Despite tension between the crew and ground controllers, the mission was a complete technical success, giving NASA the confidence to send Apollo 8 into orbit around the Moon two months later. In part because of these tensions, none of the crew flew in space again, though Schirra had already announced he would retire from NASA after the flight. Apollo 7 fulfilled Apollo 1's mission of testing the CSM in low Earth orbit, and was a significant step towards NASA's goal of landing astronauts on the Moon."}/>

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
                <TimelinePanel header={"Apollo 8"} text={"Apollo 7 (October 11–22, 1968) was the first crewed flight in NASA's Apollo program, and saw the resumption of human spaceflight by the agency after the fire that had killed the three Apollo 1 astronauts during a launch rehearsal test on January 27, 1967. The Apollo 7 crew was commanded by Walter M. Schirra, with command module pilot Donn F. Eisele and Lunar Module pilot R. Walter Cunningham (so designated even though Apollo 7 did not carry a Lunar Module).\n" +
                    "\n" +
                    "The three astronauts were originally designated for the second crewed Apollo flight, and then as backups for Apollo 1. After the Apollo 1 fire, crewed flights were suspended while the cause of the accident was investigated and improvements made to the spacecraft and safety procedures, and uncrewed test flights made. Determined to prevent a repetition of the fire, the crew spent long periods monitoring the construction of their Apollo command and service modules (CSM). Training continued over much of the 21-month pause that followed the Apollo 1 disaster.\n" +
                    "\n" +
                    "Apollo 7 was launched on October 11, 1968, from Cape Kennedy Air Force Station, Florida, and splashed down in the Atlantic Ocean eleven days later. Extensive testing of the CSM took place, and also the first live television broadcast from an American spacecraft. Despite tension between the crew and ground controllers, the mission was a complete technical success, giving NASA the confidence to send Apollo 8 into orbit around the Moon two months later. In part because of these tensions, none of the crew flew in space again, though Schirra had already announced he would retire from NASA after the flight. Apollo 7 fulfilled Apollo 1's mission of testing the CSM in low Earth orbit, and was a significant step towards NASA's goal of landing astronauts on the Moon."}/>

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
                <TimelinePanel/>
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
                <TimelinePanel/>
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
                <TimelinePanel/>
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
                <TimelinePanel/>
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
                <TimelinePanel/>
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
                <TimelinePanel/>
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
                <TimelineButton width={width} height={height} node1={timeline2WayNode} node2={timeline2WayNodeActive}/>
                <TimelinePanel/>
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
                top: `calc(${top}% + ${50 * height}px)`,
                left: `${left}%`

            }}></Button>
            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `calc(${top}% + ${52.5 * height}px)`,
                left: `${left}%`,
                gap: '10%'
            }}>
                <TimelineButton width={width} height={height} node1={timeline2WayNode} node2={timeline2WayNodeActive}/>
                <TimelinePanel/>
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
                top: `calc(${top}% + ${53.5 * height}px)`,
                left: `${left}%`

            }}></Button>
            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                top: `calc(${top}% + ${56 * height}px)`,
                left: `${left}%`,
                gap: '10%',
                // height: `${.25 * window.innerHeight}px`
            }}>
                <TimelineButton width={width} height={height} node1={timelineEndNodeUpsideDown} node2={timelineEndNodeUpsideDownActive}/>
                <TimelinePanel/>
            </div>
        </div>
    )
}

export default Timeline;