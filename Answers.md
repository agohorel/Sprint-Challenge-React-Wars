# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a UI library that attempts to make development efficient the actual code very performant. React solves many problems but one of the major ones is that of managing state in applications, which can become very complex and tedious in large applications. It makes it much easier to develop libraries of re-usable components and implements a virtual DOM to minimize page re-renders by only updating things that actually need to be updated, which makes it very performant. I would say, in a word, react attempts to solve the problem of "scale" in font end development.

1. What does it mean to think in react?
To me "thinking in react" means a few things:
1. thinking of interfaces as modular arrangements of re-usable components
2. syncing data and state to create predictable code
3. embracing functional programming to minimize side-effects, making debugging simpler

1. Describe state.
State is quite literally "the state of something" - i.e. whether a user is authenticated, whether a button has been clicked, etc.

1. Describe props.
Props (properties) are how data is passed between components in React. For example, you can store your state at the top of your app and then pass it down to components that live "inside" the app.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?
Side effects are mostly things that affect something outside the scope of their own function - a good example of this is modifying state via API calls. We use the useEffect() hook in React Hooks to mitigate/control side-effects.
