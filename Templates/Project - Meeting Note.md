---
<%*
	let noteTitle = tp.file.title
	if (noteTitle.startsWith("Untitled")) {
		noteTitle = await tp.system.prompt("Title");
		await tp.file.rename(noteTitle);
	} 

	const dv = this.app.plugins.plugins["dataview"].api;	
	let projects = dv.pages("#project and -#project/issue and -#project/meeting").file.sort(n => n.name);
	
	let suggestions = projects.name;
	let values = projects.link;
	let project = await tp.system.suggester(suggestions,suggestions);	

	let location = await tp.system.suggester(["Virtual", "In Person"], ["Virtual", "In Person"])
%>
title: <% noteTitle %> 
project: "[[<% project %>]]"
location: <% location %>
meeting_date: <% tp.date.now('LL') %>
created: <% tp.date.now('MMMM Do YYYY, h:mm:ss a') %>
modified: 
tags:
  - project/meeting
---
# Attendees
- Adam Dickison
- <% tp.file.cursor() %>

# Meeting Details
- **Location:** <% location %>
- **Date:** <% tp.date.now('LL') %>
- **Time/Duration:** xx:xx - xx:xx

# Agenda
- 

# Notes
- 

# Actions
- 

<%*
let projectIssue = `/01_Projects/${project}/Meetings/` 
await tp.file.move(projectIssue + noteTitle);
-%>