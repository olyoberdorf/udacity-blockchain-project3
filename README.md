# Blockchain Project 3

This is my implementation of the Project 3 for Blockchain.  It adds a RESTful
webservice on top of Project 2's blockchain code.  Two simple calls are
provided.  `/block/{#}` with a GET call will return the application/json
data for a block at that height, or 404 if the block does not exist.  A
PUT call to `/block/` with content-type application/json and a block will
add the new block to the end of the chain.

### Prerequisites

This simple blockchain depends on `level`, `crypto-js`, `express` and `debug`.

The web application relies on jquery and bootstrap but pulls then in via CDN.
Alternatively, one can simply test the web methods directly with `curl` or
`postman`.

### Installation

```
npm install
```

## Notes

Since project 2, I added a lazy initialization approach to the database.  This
might be confusing if you are looking for the leveldb data prior to the first
read or write to the chain.  So any calls to operate on the blockchain will,
if it does not exist, bootstrap it with the origin block.

## Testing

To test code:
 1. Open a command prompt or shell terminal
 2. Remove the `chaindata` folder, if present (optional)
 3. Run `node index.js` (or `npm test` will do the same thing)
 4. Browse to `http://localhost:8000` to see the debug console for the service.

The debug web app will load the entire chain into an html table for viewing.
It also provides a form that exercises the POST and then reloads the page.
It's not fully AJAX, but demonstrates the web app functionality.
