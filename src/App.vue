<template>
  <div>
  
<!--แสดงเมนู-->
  <Navebar />>
<!--แสดงหน้าเพจ-->
  <router-view/>
  <!--แสดง footers-->
  <Footer />
</div>
</template>


<script>
import Navebar from './components/Navebar.vue';
import Footer from './components/Footer.vue';


export default {
  name: "app",
  components: {Navebar,Footer}
};

</script>