# Notebook


https://user-images.githubusercontent.com/51847270/143617359-cdaafeff-da92-41ec-8695-d09ae9b00870.mov


### Overview
this project allow user to create/maintain notes once they register into application. once registration is done user can create multiple notes, Edit or delete notes. the project is build using react-redux

### Dependencies
- axios `npm install axios`
- react-router-dom ` npm install react-router-dom`
- redux-thunk `npm install redux-thunk`
- redux `npm install redux`
- validator `npm install validator`
- sweetalert `npm install sweetalert`
- materialUI `npm install @material-ui/core`

### API Details
* userAuthentication
    - Post(Register User): `http://dct-user-auth.herokuapp.com/users/register`
    - Post(Login User): `http://dct-user-auth.herokuapp.com/users/login`
    - Get(User Details): `http://dct-user-auth.herokuapp.com/users/account`
* Notes
    - Post(Add Note): `http://dct-user-auth.herokuapp.com/api/notes`
    - Delete(Delete note): `http://dct-user-auth.herokuapp.com/api/notes/${_id}`
    - Get(Read Notes): `http://dct-user-auth.herokuapp.com/api/notes`
    - Put(Edit Notes): `http://dct-user-auth.herokuapp.com/api/notes/${formData._id}`

### Description
- UserAuthentication
  - allow user to register with username,email,password
  - registered user can login with email and password that will generate JWT token that gets stored in local storage
  - at the time of register and login, form validation is performed on username, email and password.
- Notes
  - allow user to create,Read, Edit and Delete notes 


