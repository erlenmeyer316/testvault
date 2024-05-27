---
<%*
  let noteTitle = tp.file.title
  if (noteTitle.startsWith("Untitled")) {
	noteTitle = await tp.system.prompt("Title");
	await tp.file.rename(noteTitle);
	  } 
	baseTag = "project/issue"

	const dv = this.app.plugins.plugins["dataview"].api;
	let projects = dv.pages("#project").file.sort(n => n.name);
	let suggestions = projects.name;
	let values = projects.link;
  await tp.system.suggester(suggestions,values);
%>
title: <% noteTitle %> 
labels: 
due_date: 
priority: normal
status: backlog
project: 
created: <% tp.date.now('MMMM Do YYYY, h:mm:ss a') %>
modified: 
tags:
  - <% projectIssue %>
---


tags:
  - <% baseTag %>
---
