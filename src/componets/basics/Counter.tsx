import CountUp from "react-countup";
// import VisibilitySensor from 'react-visibility-sensor';
import { Waypoint } from 'react-waypoint';
import { useState } from "react";

const Counter = ({ endCount }: { endCount: number }) => {
    const [viewPortEntered, setViewPortEntered] = useState(false);
    return (
        <CountUp duration={3} useEasing delay={0.05} start={viewPortEntered ? 0 : 1} end={endCount} redraw={false}>
            {({ countUpRef }) => (
                <Waypoint
                    onEnter={(): void => {
                        setViewPortEntered(true);
                    }}
                >
                    <span ref={countUpRef} />
                </Waypoint>
            )}
        </CountUp>
    )
}

export default Counter