<template>
    <div class="min-h-screen bg-[var(--color-green-very-light)] px-6 py-12">
      <div class="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow">
        <!-- Header -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 class="text-3xl font-bold text-[var(--color-green-dark)]">ยินดีต้อนรับ, คุณผู้ใช้</h1>
            <p class="text-[var(--color-green-medium)] mt-1">แดชบอร์ดผู้ใช้งานระบบจองสนามกีฬา</p>
          </div>
  
          <!-- ปุ่มจองสนาม -->
          <router-link
            to="/book"
            class="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-semibold bg-[var(--color-green-medium)] text-white hover:bg-[var(--color-green-dark)] transition duration-300 shadow-md"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>จองสนาม</span>
          </router-link>
        </div>
  
        <!-- Booking Table -->
        <div>
          <h2 class="text-xl font-semibold text-[var(--color-green-dark)] mb-4">รายการจองล่าสุด</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full border border-gray-300 text-left text-[var(--color-green-dark)]">
              <thead class="bg-[var(--color-green-light)] text-white">
                <tr>
                  <th class="px-4 py-2 border">กีฬา</th>
                  <th class="px-4 py-2 border">สนาม</th>
                  <th class="px-4 py-2 border">วันที่</th>
                  <th class="px-4 py-2 border">เวลา</th>
                  <th class="px-4 py-2 border">สถานะ</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="booking in bookings"
                  :key="booking.id"
                  class="hover:bg-[var(--color-green-very-light)] transition"
                >
                  <td class="border px-4 py-2">{{ booking.sportType }}</td>
                  <td class="border px-4 py-2">{{ booking.courtId }}</td>
                  <td class="border px-4 py-2">{{ booking.date }}</td>
                  <td class="border px-4 py-2">{{ booking.startTime }} - {{ booking.endTime }}</td>
                  <td class="border px-4 py-2">
                    <span :class="statusClass(booking.status)">
                      {{ booking.status }}
                    </span>
                  </td>
                </tr>
                <tr v-if="!loading && bookings.length === 0">
                  <td colspan="5" class="text-center py-6 text-gray-400">ยังไม่มีการจอง</td>
                </tr>
                <tr v-if="loading">
                  <td colspan="5" class="text-center py-6 text-gray-400">กำลังโหลด...</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p v-if="errorMessage" class="mt-4 text-sm text-red-600">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { getBookings } from '../api'
  
  const bookings = ref([])
  const loading = ref(false)
  const errorMessage = ref('')
  
  onMounted(async () => {
    loading.value = true
    try {
      bookings.value = await getBookings()
    } catch (error) {
      errorMessage.value = error.message || 'ไม่สามารถโหลดรายการจองได้'
    } finally {
      loading.value = false
    }
  })
  
  function statusClass(status) {
    switch (status) {
      case 'ยืนยันแล้ว': return 'text-green-600 font-medium'
      case 'รอตรวจสอบ': return 'text-yellow-600 font-medium'
      case 'confirmed': return 'text-green-600 font-medium'
      case 'pending': return 'text-yellow-600 font-medium'
      default: return 'text-gray-600'
    }
  }
  </script>
  
