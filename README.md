# YSStatus
A real time app for working status updates.

For pure leisure and enjoyment, and during my free time, I created this app to show information whether teams/members are checked in/out. This might help Yousource in a work from home setup amid COVID-19.

The app's objective is to share working status between teams/members REAL TIME. An on/off toggle switch will be provided per team member to indicate their status. The app also writes the last time the status was updated. There is also an "All" view to check all teams.

## Disclaimer
The application may get outdated overtime (e.g. members forgot to update it), thus the app is not recommended to be an "Absolute Source of Truth" whether a team member is actively working or not. Usual communication channels such as Skype shold still be considered as usual.

## Usage
You can change your status in your respective Team Tab or in the "All" tab. Changing status in one part, changes the others REAL TIME. Other users need not to refresh page to get updates. Please also do note that you can change anyone's  status. Please be careful

## Tech Stack
 - `Angular 8`
 - `Firebase` using `AngularFire`

## Known Issues
 - When you hit the toggle button, the last update cell flickers. This only happens on your screen and not on other users that receives the update
 - Overall UX improvements e.g. Spinners, Overall Layout

