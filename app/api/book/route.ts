
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Simulate database delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log("New Booking Received:", body);

        return NextResponse.json(
            { message: "Booking confirmed successfully", bookingId: Date.now() },
            { status: 200 }
        );
    } catch (error) {
        console.error("Booking api error", error);
        return NextResponse.json(
            { message: "Failed to process booking" },
            { status: 500 }
        );
    }
}
