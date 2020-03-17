# YSStatus
A real time app for working status updates.

For pure leisure and enjoyment. I created this app to show information whether teams/members are checked in/out. This might help Yousource in a work from home setup amid COVID-19.

You can view status by team or everyone using the "All" tab.

## Disclaimer
The application may get outdated overtime (e.g. members forgot to update it), thus the app is not recommended to be an "Absolute Source of Truth" whether a team member is actively working or not. Usual communication channels such as Skype shold still be considered as usual.

## Usage
You can change your status in your respective Team Tab or in the "All" tab. Changing status in one part, changes the others REAL TIME. Other users need not to refresh page to get updates. Please also do note that you can change anyone's  status. Please be careful

## Tech Stack
 - `Angular 8`
 - `Firebase` using `AngularFire`

## Known Issues
 - When you hit the toggle button, the last update cell flickers. This only happens on your screen and not on other users that receives the update
 - When you hit the toggle button, the whole app might flicker. There is a known hack in place that keeps the state of the selected tab. Without it, the tab selection resets everytime.
 - Tooltip on the team view appears on the center of the cell rather than the text itself
 - Overall UX improvements e.g. Spinners, Overall Layout

