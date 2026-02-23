Jonathan Skop
Date 2/23/26
CS:465
Module Eight Journal 

Travlr Getaways Full Stack Web Application

This project is the completed Travlr Getaways full-stack web application, built step by step during the course. It includes a public customer site and a secure admin area. In the final phase, I added security features to protect admin functions and allow only authorized access.

Architecture

Frontend Development Comparison

This project uses two frontend approaches, each chosen to fit user needs and application goals.

The customer-facing portion of the application was built with Express, Handlebars templates, HTML, CSS, and JavaScript. This approach follows a traditional server-rendered MVC pattern, where pages are generated on the server using JSON data and delivered to the browser as fully rendered HTML. This method is efficient for content-driven pages and provides fast initial load times.

The administrative interface was built as a single-page application (SPA) using Angular. Unlike the Express frontend, the SPA loads once and dynamically updates content without page reloads. Angular components and services handle user interaction and communicate with the backend API to perform create, update, and delete operations. This approach provides a responsive, interactive user experience, ideal for administrative tasks.

Together, these two frontend approaches demonstrate flexibility in selecting the right tools for different application needs and share the same backend services.

Backend Database Choice

The backend uses a NoSQL MongoDB database. MongoDB was selected because it stores data in a flexible, document-based format that aligns with JavaScript objects used throughout the MEAN stack. This flexibility allows schemas to evolve as application requirements change, which is helpful during iterative development. MongoDB also integrates with Node.js and Mongoose, simplifying data modeling and CRUD operations.

Functionality

JSON and JavaScript in Full Stack Development

JSON (JavaScript Object Notation) is a lightweight data format used for data exchange, while JavaScript is a programming language used to implement application logic. JSON differs from JavaScript because it is purely a data representation format and cannot contain functions or executable code.

In this application, JSON acts as the bridge between the frontend and backend. API responses return data in JSON format, which is then used by the Express views and the Angular SPA. This consistent data format enables smooth communication between application layers and ensures both frontend implementations can work with the same backend services.

Refactoring and Reusable Components

Throughout development, code was refactored to improve clarity, efficiency, and maintainability. Examples include separating routing logic from controllers, consolidating database access through models, and abstracting API communication into Angular services.

Reusable UI components in Angular provided benefits, including reduced duplication, easier maintenance, and consistent user interaction patterns. Refactoring also improved readability and made the application easier to extend with additional features.

Testing

API TeEndpoints, Endpoints, and Security involved validating epoints using tools such as Postman to ensure correct request handling and data retrieval. HTTP methods, including GET, POST, PUT, and DELETE, were tested to verify full CRUD functionality.

With the addition of security, testing also included authentication and authorization scenarios. Secured endpoints were verified to ensure unauthenticated requests were rejected and only authorized users could access administrative functionality. This demonstrated an understanding of how endpoints, HTTP methods, and security mechanisms interact within a full-stack application.

Reflection

This course has advanced my understanding of full-stack web development and modern application architecture. I gained hands-on experience designing and building a complete application using the MEAN stack, integrating frontend frameworks, backend services, databases, and security features into a cohesive system.

Skills developed in this course include full-stack architecture design, RESTful API development, database modeling with MongoDB, frontend development using both server-rendered views and SPAs, and secure authentication. These skills support my professional goals by making me a more well-rounded, marketable candidate with practical experience building safe, production-grade applications.



