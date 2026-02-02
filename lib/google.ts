
import { google } from 'googleapis';

// Interface for the booking data needed for the calendar
interface BookingEvent {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    serviceName: string;
    staffName: string;
    dateTimeStart: string; // ISO string
    dateTimeEnd: string;   // ISO string
}

export async function createCalendarEvent(booking: BookingEvent) {
    try {
        // 1. Authenticate with Google
        // Expects GOOGLE_CLIENT_EMAIL and GOOGLE_PRIVATE_KEY in environment variables
        // The private key can be messy with newlines, so we replace literal \n with real newlines just in case
        const SCOPES = ['https://www.googleapis.com/auth/calendar.events'];

        const auth = new google.auth.JWT(
            process.env.GOOGLE_CLIENT_EMAIL,
            undefined,
            process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            SCOPES
        );

        const calendar = google.calendar({ version: 'v3', auth });

        // 2. Create the event
        const event = {
            summary: `${booking.serviceName} - ${booking.customerName}`,
            description: `
        Service: ${booking.serviceName}
        Stylist: ${booking.staffName}
        Customer: ${booking.customerName}
        Phone: ${booking.customerPhone}
        Email: ${booking.customerEmail}
      `,
            start: {
                dateTime: booking.dateTimeStart,
                timeZone: 'Asia/Kolkata', // Hardcoding to India time based on "Kochi" context
            },
            end: {
                dateTime: booking.dateTimeEnd,
                timeZone: 'Asia/Kolkata',
            },
        };

        // 3. Insert into the specified calendar (or primary)
        // The calendar ID should be shared with the service account email
        const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';

        const response = await calendar.events.insert({
            calendarId,
            requestBody: event,
        });

        console.log('Calendar event created: %s', response.data.htmlLink);
        return response.data;

    } catch (error) {
        console.error('Error creating calendar event:', error);
        // We don't want to break the booking flow if calendar sync fails, so we just log it
        // Or you can re-throw if you want to show an error to the user
        return null;
    }
}
