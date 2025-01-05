```javascript
// Solution: Handle empty arrays explicitly
const query = { field: { $in: someArray } };
if (someArray.length === 0) {
  db.collection.find({}); // Return all documents if the array is empty
} else {
  db.collection.find(query);
}
```