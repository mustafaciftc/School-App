<template>
     <div>
          <button @click="goToAboutPage" class="btn btn-secondary" style="margin-top: 5px;">About Us</button>

          <button @click="goToHomePage" class="btn btn-success" style="margin-top: 5px;">Home</button>
          <router-view></router-view>
     </div>

     <h2 class="alert alert-success" style="margin-top: 5px;">List of Students</h2>

     <table class="table table-bordered mt-4">
          <thead>
               <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Course</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Action</th>
               </tr>
          </thead>
          <tbody>
               <tr v-for="student in students" :key="student.id">
                    <td>{{ student.id }}</td>
                    <td>{{ student.name }}</td>
                    <td>{{ student.course }}</td>
                    <td>{{ student.email }}</td>
                    <td>{{ student.gender }}</td>
                    <td>
                         <button class="btn btn-warning btn-sm" @click="editBtn(student.id)">Edit</button>
                         <button class="btn btn-danger btn-sm" @click="deleteStudent(student.id)">Delete</button>
                    </td>
               </tr>
          </tbody>
     </table>


     <div class="col-md-12">


          <div v-if="Object.keys(this.currentStudent).length !== 0">


               <h2 class="alert alert-warning">Edit Student Details</h2>

               <form @submit.prevent="updateStudent(currentStudent.id)">

                    <div class="row">

                         <div class="col">
                              <div class="form-group">
                                   <label class="form-label float-left ml-2">Name</label>
                                   <input type="text" class="form-control" v-model="currentStudent.name">
                              </div>
                         </div>

                         <div class="col">
                              <div class="form-group">
                                   <label class="form-label float-left ml-2">Email</label>
                                   <input type="email" class="form-control" v-model="currentStudent.email">
                              </div>
                         </div>
                    </div>



                    <div class="row">
                         <div class="col">
                              <div class="form-group">
                                   <label class="form-label float-left ml-2">Course</label>
                                   <input type="text" class="form-control" v-model="currentStudent.course">
                              </div>
                         </div>
                         <div class="col">

                              <div class="form-group">
                                   <label class="form-label float-left ml-2">Gender</label>
                                   <input type="text" class="form-control" v-model="currentStudent.gender">
                              </div>
                         </div>
 
                    </div>
                    <button type="submit" class="btn btn-success float-left ml-2" style="width: 400px; margin-top: 8px;">Update</button>
               </form>

          </div>

</div>
     

</template>
 
 
<script>
import axios from 'axios';

export default {
     data() {
          return {
               students: [],
               currentStudent: {},
               api: 'http://127.0.0.1:8000/',
               student: {
                    name: '',
                    email: '',
                    course: '',
                    gender: '',
               },
          };
     },
     created() {
          this.getStudents();
     },
     methods: {
          getStudents() {
               axios.get(this.api + 'student/')
                    .then((response) => {
                         this.students = response.data;
                    })
                    .catch((error) => {
                         console.log(error);
                    });
          },
          saveStudent() {
               axios.post(this.api + 'student/', this.student)
                    .then((response) => {
                         console.log(response.data);
                         this.student = {};
                    })
                    .catch((error) => {
                         console.log(error);
                    });
          },
          editBtn(id) {
               console.log(id)
               this.students.map(student => {
                    if (student.id === id) {
                         console.log(student.name)
                         this.currentStudent = { 'id': student.id, 'name': student.name, 'email': student.email, 'course': student.course, 'gender': student.gender }
                    }

               })

          },

          updateStudent(id) {
               axios.put(this.api + `student/${id}/`, this.currentStudent)
                    .then((response) => {
                         console.log(response.data);
                         this.getStudents();
                         this.currentStudent = {};

                    })
                    .catch((error) => {
                         console.log(error);
                    });
          },
          deleteStudent(id) {
               axios.delete(this.api + `student/${id}/`)
                    .then((response) => {
                         console.log(response.data);
                         this.getStudents();
                    })
                    .catch((error) => {
                         console.log(error);
                    });
          },
          goToAboutPage() {
               this.$router.push("/about");
          },
          goToHomePage() {
               this.$router.push("/");
          },
     },

};

</script>