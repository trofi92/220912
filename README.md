this is prototype of new cafe-app-project
inspired by "생활코딩"

// SPA, dark mode, login modal pop-up, route each page, no redirection
// using Reactjs, styled components, Firebase

// Home.js : main page(main image, comment, sidebar menu)
// if you logged in, this page will show you "Post-detail.js"

// Modal.js : if user already joined, the user will click "I'm already joined" link,
//then pop-up modal login page

// Join.js : when click something before login, directly move to join page(auth with email address, pw)

// Post.js : posting page include cafe name, location(in progress, fetching NAVER API), some review, username

// Post-details.js : user can check another user's post(review, recommendation) and also hit the like button
// each user can hit the like button 1 time, and if user hit the button next time, it'll be canceled.
// post can be modified or deleted by writer and admin-user(in progress)

// Favorite.js : user can check their own liked posts in a list(in progress)

// SideBar.js : sidebar menu, fixed left of screen, dropdown feature,
// dark mode, home, posts, favorite, contact, logout(activate when user logged in)

// Layout.js : wrapped up components, sidebar included

// Router.js : control page routing, checking user login
