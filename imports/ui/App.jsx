import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import axios from 'axios'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Logo } from './components/Logo'
import { HomePage } from './Page/HomePage'
// import { Router } from 'express'
// import { Switch } from 'react-router'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// export const App = () => {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [accounts, setAccounts] = useState([])
//   const [image, setImage] = useState()

//   useEffect(() => {
//     getAccounts()
//   }, [])

//   async function uploadImage() {
//     if (!image) return alert('Please upload image')
//     try {
//       const formData = new FormData()
//       formData.append('profile', image)
//       formData.append('username', 'john')

//       const { data } = await axios.post(
//         'http://localhost:3030/upload',
//         formData
//       )
//       alert('OK')
//     } catch (error) {
//       alert(error)
//     }
//   }
//   async function getAccounts() {
//     try {
//       const { data } = await axios.get('http://localhost:3030/api/accounts')
//       setAccounts(data)
//     } catch (error) {
//       alert(error)
//     }
//   }

//   async function signup(e) {
//     e.preventDefault()
//     if (!username) return alert('Please enter username')
//     if (!password) return alert('Please enter password')

//     const account = {
//       username,
//       password,
//     }
//     try {
//       const { data } = await axios.post(
//         'http://localhost:3030/api/signup',
//         account
//       )
//       alert(JSON.stringify(data))
//     } catch (error) {
//       alert(error)
//     }
//     setUsername('')
//     setPassword('')
//   }

//   return (
//     <div>
//       <form onSubmit={signup}>
//         <input
//           type='text'
//           placeholder='Username'
//           onChange={(e) => setUsername(e.target.value)}
//           value={username}
//         />
//         <br />
//         <br />
//         <input
//           type='password'
//           placeholder='password'
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//         />

//         <br />
//         <br />
//         <button>CreateUser</button>
//       </form>
//       <button onClick={getAccounts}>UpdateUser</button>
//       <br />
//       <br />
//       <input type='file' onChange={(e) => setImage(e.target.files[0])} />
//       <button onClick={uploadImage}>Upload</button>
//       <br />
//       <br />
//       <img
//         border='0'
//         height='200'
//         width='200'
//         hspace='0'
//         src='/img/profile-1614771464242.png'
//       />
//       <br />
//       <br />
//       <img
//         src='/img/profile-1615198782451.jpeg'
//         border='0'
//         height='400'
//         width='650'
//         hspace='0'
//       />
//       <br />
//       <br />

//       {JSON.stringify(accounts)}
//     </div>
//   )
// }
export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Logo />
      <Switch>
        <Route to='/home' component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}
