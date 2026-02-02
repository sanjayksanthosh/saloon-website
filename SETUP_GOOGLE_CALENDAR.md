
# Google Calendar Integration Setup

To allow the salon app to create bookings directly in a Google Calendar, you need to set up a Service Account in the Google Cloud Console.

## Step 1: Create a Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (e.g., "Luxe Salon Booking").

## Step 2: Enable Google Calendar API
1. In the sidebar, go to **APIs & Services** > **Library**.
2. Search for "Google Calendar API".
3. Click **Enable**.

## Step 3: Create a Service Account
1. Go to **APIs & Services** > **Credentials**.
2. Click **Create Credentials** > **Service Account**.
3. Name it (e.g., "booking-bot").
4. Click **Create and Continue**, then **Done** (no special roles needed for this).

## Step 4: Get Keys
1. In the **Credentials** page, click the email of the service account you just created (e.g., `booking-bot@project-id.iam.gserviceaccount.com`).
2. Go to the **Keys** tab.
3. Click **Add Key** > **Create new key** > **JSON**.
4. A JSON file will download. This contains your private key.

## Step 5: Configure Environment
1. Create a `.env.local` file in your project root (copy from `.env.example`).
2. Fill in the values from your JSON file:
   - `GOOGLE_CLIENT_EMAIL`: The `client_email` field from the JSON.
   - `GOOGLE_PRIVATE_KEY`: The `private_key` field from the JSON.
   - `GOOGLE_CALENDAR_ID`: The ID of the calendar you want to add events to. (Use `primary` to check the calendar linked to the service account, but usually you want to share a specific personal calendar).

## Step 6: Share Your Calendar (IMPORTANT)
Service accounts have their own separate calendars by default. If you want the bookings to appear on *your* (the salon's) personal calendar:
1. Go to [Google Calendar](https://calendar.google.com/).
2. Find the calendar you want to use in the sidebar.
3. Click the three dots > **Settings and sharing**.
4. Scroll to "Share with specific people".
5. Click **Add people** and paste the **Service Account Email** (from Step 4.1).
6. **IMPORTANT**: Permission must be **"Make changes to events"**.
7. Get the **Calendar ID** near the bottom of the settings page (usually your email address) and set `GOOGLE_CALENDAR_ID` in your `.env.local`.

## Verification
Restart your server (`npm run dev`) and make a booking. Check the calendar!
