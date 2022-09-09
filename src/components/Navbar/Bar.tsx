import React from 'react';
import { trpc } from "../../utils/trpc"

const Bar = () => {
    const user = trpc.useQuery(["api.register"]);
    return (
        <div>
            
        </div>
    );
};

export default Bar;