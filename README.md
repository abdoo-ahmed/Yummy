# 🍽️ Yummy Food App

This project is a **modern Food Application** built using **React + Vite**, providing a fast development environment with HMR, optimized builds, and a clean modular structure.
The app showcases meals, categories, filtering, searching, and detailed meal information.

---

## ⚡ Tech Stack

* **React + Vite** – Fast bundling & Hot Module Replacement (HMR)
* **Tailwind CSS** – Utility-first responsive styling
* **Axios** – API requests and handling
* **TanStack Query** – Data fetching & caching
* **Context API** – Global state management
* **React Router** – Navigation between pages

---

## 🍔 Features

* Browse food categories and meals
* Search meals by name or first letter
* View detailed information about each meal
* Smooth and fast UI with cached data
* Fully responsive layout

---

## 🔗 API Used

All meal data comes from **TheMealDB API**:

```
https://www.themealdb.com/api.php
```

API calls are handled using **Axios**.

---

## 📁 Project Structure

```
src/
│── assets/
│ └── Icons/
│ └── react.svg
│
│── Components/
│ ├── Area/
│ ├── Categories/
│ ├── Contacts/
│ ├── Contexts/
│ ├── Details/
│ ├── Home/
│ ├── Ingredients/
│ ├── Layout/
│ ├── LoadingScreen/
│ ├── NotFound/
│ ├── Routes/
│ └── Sidebar/
│
│── Search/
│── App.css
│── App.jsx
│── index.css
│── main.jsx
```

---

## 🧪 Axios Example

Here is the API service code used in the project:

```javascript

import axios from "axios";
  async function getCatigoris() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        SetData(res.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getCatigoris();
  }, []);

```

---

## 🔍 Using TanStack Query Example

```javascript

import { useQuery } from "@tanstack/react-query";

const { data, isLoading } = useQuery({
    queryKey: ["Detail"],
    queryFn: Details,
    enabled: !!IdDetails,
  });

  async function Details() {
    const DataDetail = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${IdDetails}`
    );
    return DataDetail.data.meals;
  }

```

---

## 🚀 Setup & Installation

### 1️⃣ Clone the repo

```
git clone https://github.com/abdoo-ahmed/Yummy.git
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Run the development server

```
npm run dev
```

---

## 🛠️ Building for Production

```
npm run build
```

The final optimized files are generated in the `dist/` folder.

---


## 👨‍💻 Author

**Abdelrahman Ahmed** – React Frontend Developer
