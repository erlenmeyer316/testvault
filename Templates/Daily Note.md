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
let dailyMonth = tp.date.now("MM-MMMM")
console.log(dailyFolder + dailyYear + '/' + dailyMonth + '/' + noteTitle)
await tp.file.move(dailyFolder + dailyYear + '/' + dailyMonth + '/' + noteTitle);
-%>

# <% moment(tp.file.title,'YYYY-MM-DD').format("dddd, MMMM DD, YYYY") %>

<< [[<% dailyFolder %>/<% tp.date.now("YYYY", -1) %>/<% tp.date.now("MM-MMMM", -1) %>/<% tp.date.now("YYYY-MM-DD-dddd", -1) %>|Yesterday]] | [[<% dailyFolder %>/<% tp.date.now("YYYY", 1) %>/<% tp.date.now("MM-MMMM", 1) %>/<% tp.date.now("YYYY-MM-DD-dddd", 1) %>|Tomorrow]] >>

---
### 📅 Daily Questions
##### 🌜 Last night, after work, I...
- 

##### 🙌 One thing I'm excited about right now is...
- 

##### 🚀 One+ thing I plan to accomplish today is...
- [ ] 

##### 👎 One thing I'm struggling with today is...
- 

### 🪷 Daily Haiku
- 
---
### 📋 Tasks

##### 🆘 Over Due

```tasks
not done
due before <% tp.date.now("YYYY-MM-DD") %>
```

#### 🌞 Due Today

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
# 📝 Notes
- <% tp.file.cursor() %>

---
### Notes created today
```dataview
List FROM "" WHERE file.cday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.ctime asc
```

### Notes last touched today
```dataview
List FROM "" WHERE file.mday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.mtime asc
```