
// ===========================Promise===========================

var promise = new Promise(
    function(resolve, reject) {
        resolve('789');
    }
)

promise
    .then(function(data){
        // console.log(data)
        return new Promise(function(resolve, reject)
        {
            setTimeout(function(){
                resolve([1, 2, 3])
            },3000)
        })
    }
        
    )
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

const sleep = (ms) => {
    return new Promise(
        function(resolve, reject) {
            return setTimeout(resolve, 1000)
        }
    )
}

sleep(1000)
    .then(function(data) {
        console.log(1)
        return sleep(1000)
    })
    .then(function(data) {
        console.log(2)
        return sleep(1000)
    })
    .then(function(data) {
        console.log(3)
        return sleep(1000)
    })


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