<template>
  <div>
  
<!--แสดงเมนู-->
  <Navebar />>
<!--แสดงหน้าเพจ-->
  <router-view/>
</div>
</template>


<script>
import Navebar from './components/Navebar.vue';

export default {
  name: "App",
  components: {Navebar}
};

</script>