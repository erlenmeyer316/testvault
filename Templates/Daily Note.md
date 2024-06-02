---
<%*
  let noteTitle = tp.file.title
  if (noteTitle.startsWith("Untitled")) {
	noteTitle = 
	await tp.file.rename(noteTitle);
  } 
  baseTag = "daily"
%>
title: <% noteTitle %>
created: <% tp.date.now('MMMM Do YYYY, h:mm:ss a') %>
modified: 
tags:
  - <% baseTag %>
---
<%*
let dailyFolder = "/Daily Notes/" 
let dailyYear = tp.date.now('YYYY')
let daily
await tp.file.move(mocFolder + noteTitle);
-%>

# <% tp.date.now("dddd Do MMMM YYYY") %>
[[<% tp.date.now("YYYY-MM-DD", -1) %>|← Yesterday]] - [[<% tp.date.now("YYYY-MM-DD", +1) %>|Tomorrow →]]


## Tasks

#### Over Due

```tasks
not done
due before <% tp.date.now("YYYY-MM-DD") %>
```

#### Due Today

```tasks
not done
due on <% tp.date.now("YYYY-MM-DD") %>
```

#### New Tasks

## Daily Check List

### Start of Day

- [ ] Check Email
- [ ] Check Teams
- [ ] Check Calendar

### End of Day

- [ ] Show Offline
- [ ] File Resources
- [ ] Update Tasks

## Other Tasks

#### No Due Date

```tasks
not done
no due date
```

#### Done Today

```tasks
done on <% tp.date.now("YYYY-MM-DD") %>
```