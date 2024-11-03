# Pact-Example PoC

Open a terminal and navigate to the directory where these files are saved.
Start the server by running:
```bash
npm start
```

In another terminal window, navigate to the same directory and run the client script:
```bash
node Consumer/consumer.js
```

# Expected Output
When you run the client.js script, it will make an HTTP GET request to the http://localhost:5000/user endpoint and print the following output to the console (assuming the server is running):
```json
{ 
    "message": "Hello, John Doe", 
    "user": { 
      "id": 1, 
      "name": "John Doe", 
      "email": "johndoe@example.com"
    } 
}

```

If there are any errors (such as the server not running), the error will be caught and printed to the console.

This setup should help you call the /user endpoint from another file and print the response.