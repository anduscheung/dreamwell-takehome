# Dreamwell-take-home-assignment

## How to run the app locally

1. run `npm install` at the project root

2. run `npm run dev` and open http://localhost:5173/ at the browser

## Highlighted Features

1. **Incremental Message Rendering**:

   - Messages appear one by one within a scroll view, similar to Perplexity

2. **Dynamic Data Visualization**:

   - Campaign insights are presented visually through texts, Charts and tables
   - Follow-up suggestions are included in some of the responses.

3. **Smooth Micro-animations**:

   - While waiting for the next bot message, a loading placeholder (like Perplexity) is displayed
   - When text are generated, there is a typing effect animation
   - Animations are supported by default with Ant Design charts
   - There are Hover effects on suggestions and buttons

4. **User Experience Features**:

   - There is a Scroll-to-bottom functionality ensures the chat stays focused on the latest messages.
   - Suggestion Buttons: Predefined quick prompts enhance usability.
   - Keyboard Shortcut: Pressing “Enter” sends the message

5. **Clean, Modular Code**:
   - SCSS modules are used for scoped styles.
   - TypeScript is utilized for strict type checking.
   - A Modular component structure (i.e. features are broken down into smaller components) is applied to increase readability
   - A Featured based folder structure is used to ensure easy maintenance and good scalability.
