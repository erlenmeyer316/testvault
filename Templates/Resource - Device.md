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
  
  // get device type
  deviceType = await tp.system.suggester(["USB Thumb Drive", "Laptop", "Desktop", "Tablet", "Phone", "Smart Watch", "E-Reader"], ["usb_thumb_drive", "laptop", "desktop", "tablet", "phone", "smart_watch", "e_reader"])
  // determine subtag based on document type
  subTag = `/device/${deviceType}`
  // determine subfolder based on document type
  subFolder = tp.user.snake_case_to_title_case(deviceType)
 %>
title: <% noteTitle %>
area:
device_type: <% deviceType %>
created: <% tp.date.now('MMMM Do YYYY, h:mm:ss a') %>
modified: 
tags:
  - <% baseTag + subTag %>
---
<%*
// move note to subfolder
let resourceHolder = `/03_Resources/Devices/${subFolder}/`
await tp.file.move(resourceHolder + noteTitle);
await this.app.vault.createFolder("/04_Archives")
-%>