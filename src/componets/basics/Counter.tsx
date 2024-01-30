import React, { useState } from "react";
import CountUp from "react-countup";
import { Waypoint } from 'react-waypoint';

const Counter = ({ endCount }: { endCount: number }) => {
    const [viewPortEntered, setViewPortEntered] = useState(false);

    return (
        <CountUp duration={3} useEasing delay={0.05} start={viewPortEntered ? 0 : 1} end={endCount} redraw={false}>
            {({ countUpRef }) => (
                <Waypoint onEnter={() => setViewPortEntered(true)}>
                    <span ref={countUpRef} />
                </Waypoint>
            )}
        </CountUp>
    );
}

export default Counter;
