
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

export const useGetCallById = (id: string | string[]) => {
    const [call, setCall] = useState<Call>();
    const [isCallLoading, setIsCallLoading] = useState(true);

    const client = useStreamVideoClient();

    useEffect(() => {

        if (!client) return;

        const loadCall = async () => {
            const { calls } = await client.queryCalls({
                filter_conditions: {
                    id
                }
            })

            if (calls.length > 0) {
                setCall(calls[0]);
            }

            setIsCallLoading(false);
        }
        loadCall();
    }, [client, id])
    return { call, isCallLoading }
}





// import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
// import { useEffect, useState } from "react";

// export const useGetCallById = (id: string | string[]) => {
//     const [call, setCall] = useState<Call | null>(null);
//     const [isCallLoading, setIsCallLoading] = useState(true);
//     const [error, setError] = useState<Error | null>(null);

//     const client = useStreamVideoClient();

//     useEffect(() => {
//         if (!client) {
//             setIsCallLoading(false);
//             return;
//         }

//         const loadCall = async () => {
//             setIsCallLoading(true);
//             setError(null); // Reset error state before making the call

//             try {
//                 const { calls } = await client.queryCalls({
//                     filter_conditions: { id },
//                 });

//                 if (calls.length > 0) {
//                     setCall(calls[0]);
//                 } else {
//                     setCall(null);
//                 }
//             } catch (err) {
//                 setError(err instanceof Error ? err : new Error("Failed to fetch call"));
//             } finally {
//                 setIsCallLoading(false);
//             }
//         };

//         loadCall();
//     }, [client, id]);

//     return { call, isCallLoading, error };
// };