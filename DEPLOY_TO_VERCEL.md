
# Deploying to Vercel

Vercel is the creators of Next.js and provides the best hosting experience for it. Since your valid code is already on GitHub, deployment is extremely easy.

## Step 1: Create Vercel Account
1. Go to [vercel.com/signup](https://vercel.com/signup).
2. Sign up using **Continue with GitHub**. This will automatically connect your GitHub account.

## Step 2: Import Project
1. Once logged in to the Vercel Dashboard, click **Add New...** > **Project**.
2. You should see a list of your GitHub repositories. Find `saloon-website` and click **Import**.

## Step 3: Configure Project
1. **Project Name**: Leave as is.
2. **Framework Preset**: It should verify "Next.js" automatically.
3. **Root Directory**: Leave as `./`.
4. **Environment Variables**:
   *   Expand this section. This is **CRITICAL** for your Google Calendar integration.
   *   Add the keys you set up locally (from your `.env.local` or the guide):
     *   `GOOGLE_CLIENT_EMAIL`
     *   `GOOGLE_PRIVATE_KEY` (Copy the entire key, including `-----BEGIN...` and `...END-----`)
     *   `GOOGLE_CALENDAR_ID`

## Step 4: Deploy
1. Click **Deploy**.
2. Vercel will build your project. This takes about 1 minute.
3. Once done, you will get a live URL (e.g., `saloon-website.vercel.app`).
4. **Test it!** Go to the URL and try making a booking.

## Updating Your Site
Whenever you want to update the site, just commit and push changes to GitHub:
```bash
git add .
git commit -m "Updated styling"
git push
```
Vercel will detect the push and automatically redeploy the new version!
