---
<%*
  let noteTitle = tp.file.title
  if (noteTitle.startsWith("Untitled")) {
	noteTitle = await tp.system.prompt("Title");
	await tp.file.rename(noteTitle);
  } 
  baseTag = "moc"
%>
title: <% noteTitle %>
created: <% tp.date.now('MMMM Do YYYY, h:mm:ss a') %>
modified: 
tags:
  - <% baseTag %>
---
<%*
let mocFolder = "/05_MOCs/" 
await tp.file.move(mocFolder + noteTitle);
-%>

<% noteTitle %> Query

```dataview
TABLE WITHOUT ID "WRITE YOUR QUERY FOR <% noteTitle %>" LIMIT 1
```