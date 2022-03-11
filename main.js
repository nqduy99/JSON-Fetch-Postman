function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();
  
// ===========================Promise===========================

// var promise = new Promise(
//     function(resolve, reject) {
//         resolve('789');
//     }
// )

// promise
//     .then(function(data){
//         // console.log(data)
//         return new Promise(function(resolve, reject)
//         {
//             setTimeout(function(){
//                 resolve([1, 2, 3])
//             },3000)
//         })
//     }
        
//     )
    // .then(data => console.log(data))
    // .catch(data => console.log(data))

// ===========================Vi du khi su dung Callback va Promise de xu ly bat dong bo===========================

// setTimeout(function() {
//     console.log(1)
//     setTimeout(function() {
//         console.log(2)
//         setTimeout(function() {
//             console.log(3)
//             setTimeout(function() {
//                 console.log(4)
//                 setTimeout(function() {
//                     console.log(5)
//                     setTimeout(function() {
//                         console.log(6)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// const sleep = (ms) => {
//     return new Promise(
//         function(resolve, reject) {
//             return setTimeout(resolve, 1000)
//         }
//     )
// }

// sleep(1000)
//     .then(function(data) {
//         console.log(1)
//         return sleep(1000)
//     })
//     .then(function(data) {
//         console.log(2)
//         return sleep(1000)
//     })
//     .then(function(data) {
//         console.log(3)
//         return sleep(1000)
//     })


// ===========================Them xoa sua khoa hoc voi fetch API===========================

// var courseApi = 'http://localhost:3000/courses'

// function start(){
//     getCourses(renderCourses);

//     handleCreateForm();
// }

// // Start app
// start();

// //Function

// function getCourses(callback){
//     fetch(courseApi)
//         .then(function(response){
//             return response.json()
//         })
//         .then(callback)
// }

// function createCourse(data, callback){
//     var options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }

//     fetch(courseApi, options)
//         .then(function(response){
//             response.json();
//         })
//         .then(callback)
// }

// function handleDeleteCourse(id){
//     var options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     }

//     fetch(courseApi+'/'+id, options)
//         .then(function(response){
//             response.json();
//         })
//         .then(function(){
//             var courseItem = document.querySelector('.course-item-'+id)
//             if(courseItem){
//                 courseItem.remove();
//             }
//         })
// }

// function renderCourses(courses){
//     var listCoursesBlock = document.querySelector('#list-courses');
//     var htmls = courses.map(function(course){
//         return `
//             <li class = "course-item-${course.id}">
//                 <h4>${course.name}</h4>
//                 <p>${course.description}</p>
//                 <button onclick = "handleDeleteCourse(${course.id})" >Xóa</button>    
//             </li>
//         `;
//     });
//     listCoursesBlock.innerHTML = htmls.join('')
// }

// function handleCreateForm(){
//     var createBtn = document.querySelector('#create');

//     createBtn.onclick = function(){
//         var name = document.querySelector('input[name="name"]').value;
//         var description = document.querySelector('input[name="description"]').value;

//         var formData = {
//             name: name,
//             description: description
//         }

//         createCourse(formData);
//     }
// }

// const Course = function(name, price){
//     this.name = name;
//     this.price = price
// }

// console.log(window)

// ===========================Chức năng bình luận===========================

// const users = [
//     {
//         id: 1,
//         name: 'Duy Nguyen'
//     },
//     {
//         id: 2,
//         name: 'Son Dang'
//     },
//     {
//         id: 3, 
//         name: 'Nhat Nguyen'
//     }
// ]

// const comments = [
//     {
//         id: 1,
//         content: 'Anh Son day rat hay va de hieu',
//         user_id: 1
//     },
//     {
//         id: 2,
//         content: 'Cam on em nhe',
//         user_id: 2
//     }
// ]

// const getComments = () => {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function(){
//             resolve(comments)
//         }, 1000)
//     })
// }

// const getUsersById = (userIds) => {
//     return new Promise(function(resolve){
//         var usersComment = users.filter((user, index) => {
//             return userIds.includes(user.id);
//         })
//         setTimeout(function(){
//             resolve(usersComment)
//         }, 1000)
//     })
// }

// getComments()
//     .then(function(comments) {
//         var usersId = comments.map((comment) => {
//             return comment.user_id;
//         })
//         return getUsersById(usersId)
//             .then(function(users){
//                 return {
//                     users: users,
//                     comments: comments
//                 };
//             })
//     })
//     .then(function(data){
//         var html = ''
//         data.comments.forEach((comment) => {
//             var user = data.users.find((user) => {
//                 return user.id === comment.user_id;
//             })
//             html += `<li>${user.name} : ${comment.content}</li>`
//         })
//         const comment = document.querySelector('#list-comments');
//         comment.innerHTML = html;
//     })

// ================ Fetch là một hàm được định nghĩa sẵn, giá trị trả về của nó là một Promise ================

// varApi = 'https://jsonplaceholder.typicode.com/posts'

// fetch(varApi)
//     .then(function(response){
//         // console.log(response)
//         return response.json();
//     })
//     .then(function(data){
//         var htmls = data.map(function(html){
//             return `<li>
//                         <h2>${html.title}</h2>
//                         <div>${html.body}</div>
//                     </li>`
//         }).join('')
//         const list = document.getElementById('list-comments');
//         list.innerHTML = htmls;
//     })

// =========================== json_server ===========================
// var courseAPI = 'http://localhost:3000/courses'
// fetch(courseAPI)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         htmls = data.map((html) => {
//             return `<li>
//                         <h2>Ten Khoa Hoc: ${html.name}</h2>
//                         <p>Mo ta: ${html.description}</p>
//                     </li>`
//         }).join('')
//         const listCourses = document.getElementById('list-comments');
//         listCourses.innerHTML = htmls;
//     })

// ===========================Them xoa sua khoa hoc voi fetch API 2 ^^ ===========================


// var courseAPI = 'http://localhost:3000/courses'

// function start() {
//     getCourses(renderCourses);
//     handleCreateForm();
//     handleEditForm();
// }

// //Start App
// start();

// function getCourses(callback) {
//     fetch(courseAPI)
//         .then((response) => response.json())
//         .then(callback)
// }

// function renderCourses(courses) {
//     var listCoursesBlock = document.getElementById('list-courses')

//     var htmls = courses.map((course) => {
//         return `<li class="course-item-${course.id}">
//                     <h4>${course.name}</h4>
//                     <p>${course.description}</p>
//                     <button onclick="handleDeleteCourse(${course.id})">Xóa ❌</button>
//                 </li>`
//     }).join('')

//     listCoursesBlock.innerHTML = htmls
// }

// function handleCreateForm() {
//     var createBtn = document.getElementById('create');
//     createBtn.onclick = function() {
//         var name = document.querySelector('input[name="name"]').value;
//         var description = document.querySelector('input[name="description"]').value;

//         var formData = {
//             name: name, 
//             description: description
//         }

//         createCourse(formData, function() {
//             getCourses(renderCourses);
//         })
//     }
// }

// function createCourse(data,callback) {
//     options = {
//         method: 'POST', 
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }

//     fetch(courseAPI, options)
//         .then((response) => {
//             return response.json();
//         })
//         .then(callback);
// }

// function handleDeleteCourse(id) {
//     options = {
//         method: 'DELETE', 
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }

//     fetch(courseAPI + '/' + id, options)
//         .then((response) => {
//             return response.json();
//         })
//         .then(function() {
//             var courseItem = document.querySelector(`.course-item-${id}`)
//             if(courseItem) {
//                 courseItem.remove();
//             }
//         });
// }

// function handleEditForm() {
//     var editBtn = document.querySelector('#edit')
//     editBtn.onclick = function() {
//         var courseId = document.querySelector('input[name="courseId"]').value
//         var editName = document.querySelector('input[name="editName"]').value
//         var editDescription = document.querySelector('input[name="editDescription"]').value
//         var data = {
//             name: editName,
//             description: editDescription
//         }
//         editCourse(courseId ,data, function() {
//             getCourses(renderCourses);
//         })
//     }
// }

// function editCourse(id, data, callback) {
//     options = {
//         method: 'PUT',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }

//     fetch(courseAPI + '/' + id, options)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback)
// }