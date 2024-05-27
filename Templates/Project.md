---
<%*
	let projectArea = (await tp.system.suggester((item) => item.basename, app.vault.getMarkdownFiles().filter(file => file.path.startsWith("02_Areas")), false, "Please select Area...")).basename

  let noteTitle = tp.file.title
  if (noteTitle.startsWith("Untitled")) {
	noteTitle = await tp.system.prompt("Title");
	await tp.file.rename(noteTitle);
  } 
  baseTag = "project"


%>
title: <% noteTitle %>
area: "[[ <% projectArea %>]]"
created: <% tp.date.now('MMMM Do YYYY, h:mm:ss a') %>
modified: 
tags:
  - project
---
<%*
let projectFolder = `/01_Projects/${noteTitle}/` 
let issuesFolder = "Issues"
let mtgNotesFolders = "Meeting Notes"
await tp.file.move(projectFolder + noteTitle);
await this.app.vault.createFolder(projectFolder + issuesFolder)
await this.app.vault.createFolder(projectFolder + mtgNotesFolders)

-%>