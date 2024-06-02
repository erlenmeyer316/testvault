---
<%*
 let noteTitle = tp.file.title
  baseTag = "daily"
-%>
title: <% noteTitle %>
created: <% tp.date.now('MMMM Do YYYY, h:mm:ss a') %>
modified: 
tags:
  - <% baseTag %>
---
<%*
let dailyFolder = "/Daily Notes/" 
let dailyYear = tp.date.now("YYYY")
let dailyMonthNum = tp.date.now("MM")
let dailyMonth = tp.date.
await tp.file.move(dailyFolder + dailyYear + '/' + dailyMonth + '/' + noteTitle);
-%>