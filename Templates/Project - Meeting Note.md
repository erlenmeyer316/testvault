---
<%*
	let noteTitle = tp.file.title
	if (noteTitle.startsWith("Untitled")) {
		noteTitle = await tp.system.prompt("Title");
		await tp.file.rename(noteTitle);
	} 

	const dv = this.app.plugins.plugins["dataview"].api;	
	let projects = dv.pages("#project and -#project/issue and -#project/meeting_note").file.sort(n => n.name);
	
	let suggestions = projects.name;
	let values = projects.link;
	let project = await tp.system.suggester(suggestions,suggestions);

	let priority = await tp.system.suggester(["Lowest", "Low", "Normal", "Medium", "High", "Highest"], ["lowest", "low", "normal", "medium", "high", "highest"])
	
	let summary = await tp.system.prompt("Summary");
%>
title:  
project: "[[ Another Personal Project]]"
created: May 27th 2024, 6:12:14 pm
modified: 
tags:
  - project/meeting
---
# Attendees
- Adam Dickison
- ???

# Meeting Details
- **Topic:** <% tp.file.title %>  
- **Location:** <% tp.system.suggester(["Virtual", "In Person"], ["Virtual", "In Person"]) %>
- **Date:** <% tp.file.title.split(" ")[0] %>
- **Time/Duration:** xx:xx - xx:xx

# Agenda
- 

# Notes
- 

# Actions
- 

# Recent Meetings
```dataviewjs
dv.view("/00-09 Meta/00 System Data/00.08 Data View/dv_MeetingListing");
```
---
````

```

**Tags:** 
```