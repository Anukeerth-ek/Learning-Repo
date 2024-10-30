// _______________________________________________________________
// 1. What is graphql?
// ans: Graphql is a query language and a server side runtime for executing query using a type system you define for your data. GraphQL isn’t tied to any 
// specific database or storage engine and is instead backed by your existing code and data.
// _______________________________________________________________

// _______________________________________________________________
// 2. What you mean by a QueryLanguage?
// ans: A QueryLanguage is mean by a computer language that allow users to interact with a data base management system(DBMS) to retrieve data or manipulate data.
// _______________________________________________________________

// _______________________________________________________________
// 3. How does GraphQL work?
// ans: GraphQL uses a single endpoint where clients send queries to request exactly what they need, avoiding over-fetching or under-fetching.

// Key features:

// Schema: Defines the structure and types of data.
// Queries: Fetch data (e.g., user { name email }).
// Mutations: Modify data (e.g., createUser).
// Resolvers: Server functions that handle fetching data.
// Subscriptions: Real-time updates for data changes.
// GraphQL is flexible, typed, and efficient, providing clients with exactly the data they request.
// _______________________________________________________________

// _______________________________________________________________
// 4. 1. Drawbacks of Rest API
// ans:
// a. Overfetching - Consider we are requesting of only some of the thing in the data only
//  {
//     "id": 1,
//     "title": "The Great Gatsby",
//     "author": "F. Scott Fitzgerald",
//     "published_year": 1925,
//     "genre": "Fiction",
//     "price": 10.99
//   },

//   now we only need to fetch the price, title, author only but in rest api it will fetch all the data in this. 

//   b. Underfetching - Underfetching is happen when a server returns only a basic information, such as ID and Username instead of data needed. 
//   This will lead to :
//   * Complexity
//   * User - Frustration
//   * Extra time processing
//   * Lengthened response time.
// _______________________________________________________________

// _______________________________________________________________
// 5. 𝗪𝗵𝗲𝗻 𝘁𝗼 𝘂𝘀𝗲 𝗶𝘁? 
// ans: 
// 1. Complex Data Requirements: When your application needs to fetch complex or nested data structures, GraphQL allows clients to 
// request exactly what they need in a single query.  
// 2. Over-fetching and Under-fetching: If your current REST API results in over-fetching (getting more data than needed) or under-fetching 
// (needing multiple requests to get the right data), GraphQL can help streamline these interactions.
// 3. Multiple Resources: When an application requires data from multiple sources or resources, GraphQL can consolidate requests into a single query, 
// simplifying data retrieval.
// 4. Rapid Development: In fast-paced development environments where requirements change frequently, GraphQL's flexible query structure allows 
// frontend developers to iterate quickly without needing backend changes.
// _______________________________________________________________

// _______________________________________________________________
// 6. What is a Query in Graphql ?
// ans:
// A query in GraphQL is read only operation that request data from the server. It allow client to request for exact data they want from the api.

// Key points of Graphql (F, F, O, O, S, S, V)
// 1. Flexibility
// GraphQL queries are flexible and dynamic, allowing clients to fetch whatever they want.
// 2. Filtering
// GraphQL queries can filter for a list of objects, including nested objects. 
// 3. Operation type
// The operation type for a GraphQL query is query, mutation, or subscription. 
// 4. Operation name
// The operation name for a GraphQL query can be anything that helps you relate with the operation you're trying to perform.
// 5. Structure
// GraphQL queries are structured, allowing clients to write fewer, more precise requests to get all the data they need in one go. 
// 6. Syntax
// GraphQL queries have their own syntax, or way of writing requests.
// 7. Variables
// Variables are used to factor out dynamic values from queries and pass them as a separate dictionary.
// _______________________________________________________________

// _______________________________________________________________
// 7. What is typedefs in Apollo Server?
// ans: typedefs is a required argument that define Graphql schema language. It can be string or an array of strings or a function that returns an 
// array of strings.
// _______________________________________________________________

// _______________________________________________________________
// 8. What is resolvers in Apollo Server?
// ans: resolvers is an optional argument that defines the resolvers for the schema.
// _______________________________________________________________

// _______________________________________________________________