# Next.js CRUD

## A Next.js CRUD post api that uses an custom built in-memory database to store data.

## Routes:
- /api/v1/blogs (GET)
- /api/v1/blogs (PUT)
- /api/v1/blogs/[id] (GET)
- /api/v1/blogs/[id] (PUT)
- /api/v1/blogs/[id] (PATCH)
- /api/v1/blogs/[id] (DELETE)

### Default Data -> data.ts
```
{
    id: "1713893708281",
    title: "Default post",
    desc: "Default content",
    date: "2024-04-23T17:35:08.281Z",
  }
```

### NOTE: Patch logic doesn't work (for now)
