---
<%*
	let noteTitle = tp.file.title
	if (noteTitle.startsWith("Untitled")) {
		noteTitle = await tp.system.prompt("Title");
		await tp.file.rename(noteTitle);
	} 

	const dv = this.app.plugins.plugins["dataview"].api;
	let projects = dv.pages("#project").file.sort(n => n.name);
	let suggestions = projects.name;
	let values = projects.link;
	let project = await tp.system.suggester(suggestions,values);


	let priority = await tp.system.suggester(["Lowest", "Low", "Normal", "Medium", "High", "Highest"], ["lowest", "low", "normal", "medium", "high", "highest"])
%>
title: <% noteTitle %> 
labels: 
due_date: 
priority: <% priority %>
status: backlog
project: <% project %>
created: <% tp.date.now('MMMM Do YYYY, h:mm:ss a') %>
modified: 
tags:
  - project/issue
---