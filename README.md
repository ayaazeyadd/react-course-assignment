# Student Dashboard — React Assignments 1, 2, 3 & 4

A single evolving React project built across four assignments.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Project Structure

```
student-dashboard/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                   # wraps App in Redux <Provider>, <ThemeProvider>, <BrowserRouter>
    ├── App.jsx                    # routes + reads theme via useTheme()
    ├── index.css
    ├── context/
    │   └── ThemeContext.jsx       # Context API: Light/Dark theme, useTheme() hook
    ├── redux/
    │   ├── store.js               # configureStore()
    │   ├── products.js            # static product catalog
    │   └── slices/
    │       └── cartSlice.js       # Redux Toolkit slice: cart items + reducers
    ├── hooks/
    │   ├── useStudents.js
    │   ├── usePersistedFilter.js
    │   └── useForm.js
    ├── pages/
    │   ├── Home.jsx
    │   ├── About.jsx
    │   ├── Students.jsx
    │   ├── Shop.jsx                # NEW — reads/dispatches Redux cart state
    │   ├── Cart.jsx                # NEW — reads/dispatches Redux cart state
    │   ├── Contact.jsx
    │   └── NotFound.jsx
    └── components/
        ├── Navbar.jsx              # reads Redux cart count + Context theme
        ├── Header.jsx
        ├── FilterTabs.jsx
        ├── StudentList.jsx
        ├── StudentCard.jsx
        ├── StudentCard.module.css
        ├── Badge.jsx
        ├── LoadingSpinner.jsx
        ├── EmptyState.jsx
        └── Footer.jsx
```

## Assignment 4 — What's New

| Requirement | Where |
|---|---|
| **Context API — shared feature** | `context/ThemeContext.jsx` manages Light/Dark theme globally |
| **Context Provider + useContext** | `ThemeProvider` wraps the app in `main.jsx`; components call the `useTheme()` hook (built on `useContext`) instead of prop-drilling |
| **Redux — shared feature** | `redux/slices/cartSlice.js` manages the shopping cart |
| **Redux Toolkit + React-Redux installed** | `@reduxjs/toolkit`, `react-redux` in `package.json`; store wired up via `<Provider store={store}>` in `main.jsx` |
| **Redux Slice with initial state + reducers** | `cartSlice.js` — `addToCart`, `removeFromCart`, `increaseQty`, `decreaseQty`, `clearCart` |
| **useSelector** | `Shop.jsx`, `Cart.jsx`, `Navbar.jsx` read `state.cart.items` |
| **useDispatch** | `Shop.jsx`, `Cart.jsx` dispatch cart actions |
| **Two different global-state sources** | Theme = Context API, Cart = Redux — both readable from multiple components (e.g. `Navbar.jsx` reads *both*) |
| **Organized files** | `context/`, `redux/store.js`, `redux/slices/`, `pages/`, `components/` all separated |

### How it plays out in the UI

- **Navbar** shows a live cart-item badge (Redux) and a Light/Dark toggle button (Context) — both update instantly and are visible from every page.
- **Shop page** (`/shop`) lists products; "Add to Cart" dispatches `addToCart`, and each card shows how many of that product are already in the cart.
- **Cart page** (`/cart`) reads the Redux cart, lets you adjust quantity, remove individual items, or clear the whole cart, and shows a running total.
- **Theme** toggling from the Navbar switches the whole app (background, navbar, cards, table) between Light and Dark instantly, and Context is what keeps that in sync everywhere.

## Notes

This app now demonstrates concepts from all four assignments in one place:
Reusable Components, Props, Ternary, &&, .map() (Assignment 1) · Hooks, Custom
Hooks, all 4 styling approaches, Bootstrap (Assignment 2) · React Router,
Forms, Axios, more Custom Hooks (Assignment 3) · Context API + Redux Toolkit
(Assignment 4).
