<template>
  <div class="container mt-4">
    <!-- หัวข้อหน้า -->
    <h2 class="mb-3">รายชื่อลูกค้า</h2>
    
    <!-- ตารางแสดงข้อมูลลูกค้า -->
     <div class="text-end mb-3">
      <a href="/Add_contact" class="btn btn-primary">Add+</a>
     </div>
    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>ลำดับที่</th>        <!-- Field name -->
          <th>ชนิดข้อมูล</th>     <!-- Data type -->
          <th>รายละเอียด</th>            <!-- details -->
          <th>ชื่อ-นามสกุล</th>            <!-- details -->
          <th>Email</th>            <!-- details -->
          <th>วันที่-เวลา</th>            <!-- details -->
        </tr>
      </thead>

      <tbody>
        <!-- วนลูปข้อมูล customers -->
        <tr v-for="(item,index) in customers" :key="item.contact_id">
          <td>{{ item.contact_id }}</td> <!-- รหัสการติดต่อ -->
          <td>{{ item.subject }}</td>   <!-- หัวข้อ -->
          <td>{{ item.detail }}</td>    <!-- รายละเอียด -->
          <td>{{ item.fullname }}</td>       <!-- ชื่อ-นามสกุล -->
          <td>{{ item.email }}</td>    <!-- Email -->
          <td>{{ item.created_at }}</td>    <!-- วันเวลาที่เพิ่มข้อมูล -->
        </tr>
      </tbody>
    </table>

    <!-- Loading: แสดงระหว่างรอข้อมูล -->
    <div v-if="loading" class="text-center">
      <p>กำลังโหลดข้อมูล...</p>
    </div>

    <!-- Error: แสดงเมื่อเกิดข้อผิดพลาด -->
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>
  </div>
</template>






<script>
// import ฟังก์ชันจาก Vue (Composition API)
import { ref, onMounted } from "vue";

export default {
  name: "ContactList", // ชื่อ component

  setup() {
    // -----------------------------
    // state (ตัวแปร reactive)
    // -----------------------------
    const customers = ref([]); // เก็บข้อมูลลูกค้า (array)
    const loading = ref(true); // สถานะโหลดข้อมูล
    const error = ref(null);   // เก็บ error

    // -----------------------------
    // ฟังก์ชันดึงข้อมูลจาก API
    // -----------------------------
    const fetchdata = async () => {
      try {
        // เรียก API (PHP)
        const response = await fetch("http://localhost/project-week4-68704662/php.api/show_contact.php");

        // ตรวจสอบว่าการเรียกสำเร็จหรือไม่
        if (!response.ok) {
          throw new Error("ไม่สามารถดึงข้อมูลได้");
        }

        // แปลง response เป็น JSON
        customers.value = await response.json();

      } catch (err) {
        // ถ้า error ให้เก็บข้อความไว้แสดง
        error.value = err.message;

      } finally {
        // ไม่ว่าจะสำเร็จหรือ error ให้หยุด loading
        loading.value = false;
      }
    };

    // -----------------------------
    // lifecycle: ทำงานเมื่อ component โหลดเสร็จ
    // -----------------------------
    onMounted(() => {
      fetchdata(); // เรียก API ทันที
    });

    // -----------------------------
    // return ค่าไปใช้ใน template
    // -----------------------------
    return {
      customers,
      loading,
      error
    };
  }
};
</script>
