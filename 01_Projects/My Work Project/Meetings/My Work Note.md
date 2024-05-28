---

title: My Work Note 
project: "[[ My Work Project]]"
location: Virtual
meeting_date: 05-27-2024
created: May 27th 2024, 8:45:22 pm
modified: 
tags:
  - project/meeting
---
# Attendees
- Adam Dickison
- ???

# Meeting Details
- **Location:** Virtual
- **Date:** 05-27-2024
- **Time/Duration:** xx:xx - xx:xx

# Agenda
- 

# Notes
- 

# Actions
- 

# Recent Meetings
```dataview
TABLE WITHOUT ID
meeting_date as "Date",
location as "Location",
file.link as "Note"
FROM "01_Projects/My Work Project/Meetings"
SORT meeting_date DESC
WHERE meeting_date < date("today")
```

