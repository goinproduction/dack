# Mini ECommerce Website

**Table of Contents**

1. [Resource](#resouce)
2. [Tổ chức folder](#to-chuc-folder)
3. [How to contribute](#how-to-contribute)

---

## I. Resource

1. [Figma](https://www.figma.com/file/zd8VPeNsj75ROTp89SCGED/React-Ecommerce?node-id=0%3A1)
2. [Prototype](https://www.figma.com/proto/zd8VPeNsj75ROTp89SCGED/React-Ecommerce?page-id=0%3A1&node-id=3%3A2&viewport=392%2C48%2C0.11&scaling=scale-down&starting-point-node-id=3%3A2)
3. [Trello](https://trello.com/invite/b/nzG8sKtI/430981746e70ff3be99abd3ad04e78aa/ecommerce-vinova-intern-11-2021)
4. [Backend API Document](https://gitlab.com/vinova/vinova-intern-11-2021/web-final-project/web-final-project-backend/-/blob/develop/README.md)

## II. Tổ chức folder

```
src
|__ api (axiosClient, userApi, productApi,...)
|__ app (redux store, rootSaga)
|__ assets (images)
|__ constants (reusable variables)
|__ utils (reusable functions)
|__ components (shared components)
|__ features (Auth, Product, Cart, MyAccount)
|__ App.js
|__ index.js
```

### 1. Feature Auth

```
Auth
|__ components
|   |__ LoginForm
|   |__ RegisterForm
|
|__ pages
|   |__ Login
|   |__ Register
|
|__ userSlice.js
|__ index.js
```

### 2. Feature Product

```
Product
|__ components
|  |__ ProductList
|  |__ Product
|  |__ ...
|
|__ pages
|  |__ DetailPage
|  |__ ListPage
|
|__ productSlice.js
|__ index.js
```

## III. How to contribute

### 1. Clone

```
git clone https://gitlab.com/vinova/vinova-intern-11-2021/web-final-project/web-final-project-frontend.git
```

### 2. NPM Install

```
cd web-final-project-frontend
npm install
```

### 3. Run Project

```
npm start
```

### 4. Checkout a new branch

```
git checkout -b [brandname]
```

### 5. Conventional Commits

- `feat:` thêm một feature
- `fix`: fix bug cho hệ thống, vá lỗi trong codebase
- `refactor`: sửa code nhưng không fix bug cũng không thêm feature hoặc đôi khi bug cũng được fix từ việc refactor.
- `docs`: thêm/thay đổi document
- `chore`: những sửa đổi nhỏ nhặt không liên quan tới code
- `style`: những thay đổi không làm thay đổi ý nghĩa của code như thay đổi css/ui chẳng hạn.
- `perf`: code cải tiến về mặt hiệu năng xử lý
- `vendor`: cập nhật version cho các dependencies, packages.

```
git commit -m "[feat] -những công việc làm"
```
