<template>
  <div class="dashboard">
    <aside class="sidebar">
      <h2 class="logo">Admin Panel</h2>
      <nav>
        <ul>
          <li :class="{ active: activeMenu === 'dashboard' }" @click="activeMenu = 'dashboard'">Dashboard</li>
          <li :class="{ active: activeMenu === 'users' }" @click="activeMenu = 'users'">Users</li>
          <li :class="{ active: activeMenu === 'reports' }" @click="activeMenu = 'reports'">Reports</li>
          <li :class="{ active: activeMenu === 'settings' }" @click="activeMenu = 'settings'">Settings</li>
        </ul>
      </nav>
    </aside>

    <main class="content">
      <header>
        <h1>{{ pageTitle }}</h1>
      </header>

      <section v-if="activeMenu === 'dashboard'">
        <h2>Welcome to the Dashboard</h2>
        <p>แสดงสถิติ หรือข้อมูลสรุปต่าง ๆ ที่นี่</p>
      </section>

      <section v-if="activeMenu === 'users'">
        <h2>จัดการผู้ใช้งาน</h2>
        <p>แสดงรายชื่อผู้ใช้งาน และจัดการข้อมูล</p>
      </section>

      <section v-if="activeMenu === 'reports'">
        <h2>รายงาน</h2>
        <p>ข้อมูลรายงานต่าง ๆ</p>
      </section>

      <section v-if="activeMenu === 'settings'">
        <h2>ตั้งค่าระบบ</h2>
        <p>หน้าแก้ไขตั้งค่าต่าง ๆ ของระบบ</p>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeMenu = ref('dashboard')

const pageTitle = computed(() => {
  switch (activeMenu.value) {
    case 'dashboard': return 'Dashboard'
    case 'users': return 'Users Management'
    case 'reports': return 'Reports'
    case 'settings': return 'Settings'
    default: return ''
  }
})
</script>

<style scoped>
.dashboard {
  display: flex;
  height: 100vh;
  font-family: "Sarabun", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.sidebar {
  width: 220px;
  background-color: #135d66;
  color: white;
  padding: 1.5rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.logo {
  margin: 0 0 2rem 0;
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 2px;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
}

nav ul li {
  padding: 0.8rem 1rem;
  cursor: pointer;
  border-radius: 6px;
  margin-bottom: 0.6rem;
  user-select: none;
  transition: background-color 0.3s ease;
}

nav ul li:hover {
  background-color: #77b0aa;
  color: #003c43;
}

nav ul li.active {
  background-color: #77b0aa;
  color: #003c43;
  font-weight: 700;
}

.content {
  flex-grow: 1;
  background-color: #e3fef7;
  padding: 2rem;
  box-sizing: border-box;
  overflow-y: auto;
}

.content header h1 {
  margin: 0 0 1rem 0;
  color: #135d66;
}

section h2 {
  margin-top: 0;
  color: #003c43;
}
</style>
