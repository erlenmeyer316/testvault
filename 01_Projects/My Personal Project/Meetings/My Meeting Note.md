---
title: My Meeting Note
project: "[[ My Personal Project]]"
location: In Person
date: 05-25-2024
created: May 27th 2024, 8:24:02 pm
modified: 
tags:
  - project/meeting
---
# Attendees
- Adam Dickison
- ???

# Meeting Details
- **Location:** In Person
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
date as "Meeting Date",
date("today") 
location as "Location",
file.link as "Note"
FROM "01_Projects/My Personal Project/Meetings"
WHERE date > date("today")
SORT date DESC
```
---
```
**Tags:** 
```
