---
<%*
  // get note title
  let noteTitle = tp.file.title
  if (noteTitle.startsWith("Untitled")) {
	noteTitle = await tp.system.prompt("Title");
	await tp.file.rename(noteTitle);
  } 
  // set base tag
  baseTag = "resource"
  // get document type
  docType = await tp.system.suggester(["Document", "Short Story", "Poem", "Essay"], ["document", "short_story", "poem", "essay"])
  // determine subtag based on document type
  subTag = `/${docType}`
  // determine subfolder based on document type
  subFolder = tp.user.snake_case_to_title_case(docType)
  // get document title, prefill with note title
  titlePrompt = `Title of ${docType}?`
  docTitle = await tp.system.prompt(titlePrompt, noteTitle);
  // get document author
  authorPrompt = `Author of ${docTitle}?`
  docAuthor = await tp.system.prompt(authorPrompt)
%>
title: <% noteTitle %>
area:

doc_title: <% docTitle %>
doc_author: <% docAuthor %>
doc_type: <% docType %>
created: <% tp.date.now('MMMM Do YYYY, h:mm:ss a') %>
modified: 
tags:
  - <% baseTag + subTag %>
---
<%*
// move note to subfolder
let resourceHolder = "/03_Resources/Document/"
if (!docType.startsWith("document")) {
	resourceHolder = `${resourceHolder}${subFolder}/`
}
await tp.file.move(resourceHolder + noteTitle);
let archiveHolder = `04_Archives/${resourceHolder}/`
if (! tp.file.exists(archiveHolder)) {
	await this.app.vault.createFolder(archiveHolder)
}
-%>