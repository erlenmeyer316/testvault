---
<%*
  let noteTitle = tp.file.title
  if (noteTitle.startsWith("Untitled")) {
	noteTitle = await tp.system.prompt("Title");
	await tp.file.rename(noteTitle);
  } 
  baseTag = "resource"
%>
title: <% noteTitle %>
area:
created: <% tp.date.now('MMMM Do YYYY, h:mm:ss a') %>
modified: 
tags:
  - <% baseTag %>
---
<%*
let resourceHolder = "/03_Resources/" 
await tp.file.move(resourceHolder + noteTitle);
let archiveHolder = `04_Archives/${resourceHolder}/`
await this.app.vault.createFolder(archiveHolder)
-%>
