import React from 'react';
import { trpc } from "../../utils/trpc"

const Bar = () => {
    const user = trpc.useQuery(["api.getUser"]);
    return (
        <div>
            
        </div>
    );
};

export default Bar;