---
<%*
	let noteTitle = tp.file.title
	let date = tp.date.now("MM-DD-YYYY")
	if (noteTitle.startsWith("Untitled")) {
		noteTitle = await tp.system.prompt("Title");
		await tp.file.rename(date + " - " + noteTitle);
	} 

	const dv = this.app.plugins.plugins["dataview"].api;	
	let projects = dv.pages("#project and -#project/issue and -#project/meeting_note").file.sort(n => n.name);
	
	let suggestions = projects.name;
	let values = projects.link;
	let project = await tp.system.suggester(suggestions,suggestions);	

	let location = await tp.system.suggester(["Virtual", "In Person"], ["Virtual", "In Person"])
%>
title: <% noteTitle %> 
project: "[[ <% project %>]]"
location: <% location %>
meeting_date: <% date.format.format("MMM Do YY") %>
created: <% tp.date.now('MMMM Do YYYY, h:mm:ss a') %>
modified: 
tags:
  - project/meeting
---
# Attendees
- Adam Dickison
- ???

# Meeting Details
- **Location:** <% location %>
- **Date:** <% date %>
- **Time/Duration:** xx:xx - xx:xx

# Agenda
- 

# Notes
- 

# Actions
- 

# Recent Meetings
```dataview
LIST
FROM '01_Projects/<% project %>/Meetings
SORT BY created
```
---
```
**Tags:** 
```
<%*
let projectIssue = `/01_Projects/${project}/Meetings/` 
await tp.file.move(projectIssue + noteTitle);
-%>