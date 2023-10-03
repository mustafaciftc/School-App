<template>
  <div class="home">
    <button @click="goToAboutPage" class="btn btn-secondary" style="margin-top: 2px;">About Us</button>
    <button @click="goToStudentPage" class="btn btn-danger" style="margin-top: 2px;">Students</button>

    <router-view></router-view>

    <div class="container-fluid">
      <h2 class="alert alert-warning mt-2">School App</h2>
      
            <div>
              <h2 class="alert alert-info mt-2">Create A New Student</h2>
              <form @submit.prevent="saveStudent()">
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label class="form-label float-left ml-2">Name</label>
                      <input type="text" class="form-control" v-model="student.name">
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label class="form-label float-left ml-2">Email</label>
                      <input type="email" class="form-control" v-model="student.email">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label class="form-label float-left ml-2">Course</label>
                      <input type="text" class="form-control" v-model="student.course">
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label class="form-label float-left ml-2">Gender</label>
                      <input type="text" class="form-control" v-model="student.gender">
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 400px; margin-top: 50px;">Save</button>
              </form>
            </div>
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
      axios
        .get(this.api + 'student/')
        .then((response) => {
          this.students = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    saveStudent() {
      axios
        .post(this.api + 'student/', this.student)
        .then((response) => {
          console.log(response.data);
          this.student = {};
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editBtn(id) {
      this.students.forEach((student) => {
        if (student.id === id) {
          this.currentStudent = { ...student };
        }
      });
    },
    updateStudent(id) {
      axios
        .put(this.api + `student/${id}/`, this.currentStudent)
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
      axios
        .delete(this.api + `student/${id}/`)
        .then((response) => {
          console.log(response.data);
          this.getStudents();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goToAboutPage() {
      this.$router.push('/about');
    },
    goToStudentPage() {
      this.$router.push('/student');
    },
  },
};
</script>
