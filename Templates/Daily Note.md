---
tags: daily_note
---
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