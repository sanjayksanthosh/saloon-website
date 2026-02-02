
import { NextResponse } from 'next/server';
import { createCalendarEvent } from '@/lib/google';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Simulate database delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // --- Google Calendar Integration ---
        try {
            if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
                // Parse date and time to create ISO strings
                // body.date = "2024-03-20", body.time = "10:00"
                const startTime = new Date(`${body.date}T${body.time}:00`);
                const endTime = new Date(startTime.getTime() + (body.duration || 60) * 60000);

                await createCalendarEvent({
                    customerName: body.customerName,
                    customerEmail: body.customerEmail,
                    customerPhone: body.customerPhone,
                    serviceName: body.serviceName,
                    staffName: body.staffName,
                    // Convert to ISO string for the API
                    dateTimeStart: startTime.toISOString(),
                    dateTimeEnd: endTime.toISOString()
                });
            } else {
                console.warn("Skipping Google Calendar: Missing Credentials");
            }
        } catch (calError) {
            console.error("Failed to sync with Google Calendar:", calError);
            // Continue execution, don't fail the booking
        }

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
