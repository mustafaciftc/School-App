<template>
     <div class="about">

          <button @click="goToHomePage" class="btn btn-secondary" style="margin-top: -20px;">Home</button>
          <button @click="goToStudentPage" class="btn btn-danger" style="margin-top: -20px;">Students</button>

          <router-view></router-view>

          <div class="container-fluid">
               <h2 class="alert alert-secondary mt-2">About Us</h2>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ea, fugiat sint maiores voluptatibus eos
                    quo
                    sequi quis eius sed amet vel, enim fuga a tenetur beatae corrupti! Odio, autem!</p>
               <hr>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, perspiciatis modi. Repellendus quo
                    obcaecati
                    non esse provident voluptatem ducimus accusamus autem fugiat magni? Quae inventore provident vel
                    temporibus
                    corrupti. Minima?</p>
               <hr>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem doloremque atque dolorem
                    quibusdam
                    labore molestiae vel dolore laborum maiores temporibus a similique, hic magnam provident, tempore illo
                    quas
                    voluptas!</p>
               <br>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veniam recusandae cupiditate vitae,
                    voluptatum ut
                    corporis ipsam sequi neque nulla mollitia vero aut iure soluta reiciendis voluptatem ratione optio
                    temporibus.
               </p>
          </div>
     </div>
</template>
   
<script>
export default {
     name: "AboutPage",

     methods: {
          goToHomePage() {
               this.$router.push('/');
          },
          goToStudentPage() {
               this.$router.push('/student');
          },

     },
};

</script>
   
<style scoped>
.about {
     text-align: center;
     margin-top: 20px;
}
</style>
   