# SQLite3 Methods (a few)

## db.exec()

- [ ] You want to run multiple statements at once.
- [ ] Does not return any data
- [ ] Typical use:
  - Schema setup:

```js
await db.exec(`
  CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  size TEXT NOT NULL,
  );
`)
```

## db.run()

- [ ] You want to run a single statement.
- [ ] Typical uses are inserting, updating, deleting.
- [ ] Does not return any data

```js
db.run(`INSERT INTO users (name, email) VALUES (?,?)`, [name, email])
```

## db.get()

- [ ] Used when you expect one row back (or you only care about the first row).
- [ ] Typical use: lookup one row by id:

```js
db.get(`SELECT * FROM users WHERE id = ?`, [id])
```

## db.all()

- [ ] You want all matching rows from a table as an array.
- [ ] Typical use: select all in-stock products:

```js
db.all(`SELECT * FROM products WHERE status = ?`, ["in stock"])
```
