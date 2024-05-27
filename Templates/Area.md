---
<%*
  let noteTitle = tp.file.title
  if (noteTitle.startsWith("Untitled")) {
	noteTitle = await tp.system.prompt("Note Title");
	await tp.file.rename(noteTitle);
  } 
  baseTag = "area"
  // get area type
  areaType = await tp.system.suggester(["Personal", "Work"], ["personal", "work"])
  // determine subtag based on document type
  subTag = `/${areaType}`
%>
title: <% noteTitle %>
area_type: <% areaType %>
created: <% tp.date.now('MMMM Do YYYY, h:mm:ss a') %>
modified: 
tags:
  - <% baseTag + subTag %>
---
<%*
let areaFolder = "/02_Areas/" 
await tp.file.move(areaFolder + noteTitle);
await this.app.vault.createFolder("/04_Archives")
-%>

## About
## Goals
## Notes
## Urls
## Considerations
## Maintenance Tasks
## Active Projects
```dataview
LIST
FROM [[]] AND #project
```
## Linked Resources
```dataview
LIST
FROM [[]] AND #resource 
```
## External Resources