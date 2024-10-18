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
// 2. 1. Drawbacks of Rest API
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