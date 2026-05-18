<template>
  <div class="min-h-screen bg-[var(--color-green-very-light)] px-6 py-12">
    <div class="mx-auto max-w-5xl bg-white p-8 rounded-xl shadow">
      <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 class="text-3xl font-bold text-[var(--color-green-dark)]">การจองของฉัน</h1>
          <p class="mt-1 text-[var(--color-green-medium)]">ตรวจสอบและยกเลิกการจองสนาม</p>
        </div>

        <router-link
          to="/book"
          class="inline-flex items-center justify-center rounded-lg bg-[var(--color-green-medium)] px-5 py-2.5 font-semibold text-white hover:bg-[var(--color-green-dark)]"
        >
          จองสนามเพิ่ม
        </router-link>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full border border-gray-300 text-left text-[var(--color-green-dark)]">
          <thead class="bg-[var(--color-green-light)] text-white">
            <tr>
              <th class="border px-4 py-2">กีฬา</th>
              <th class="border px-4 py-2">สนาม</th>
              <th class="border px-4 py-2">วันที่</th>
              <th class="border px-4 py-2">เวลา</th>
              <th class="border px-4 py-2">สถานะ</th>
              <th class="border px-4 py-2">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="booking in bookings" :key="booking.id">
              <td class="border px-4 py-2">{{ booking.sportType }}</td>
              <td class="border px-4 py-2">{{ booking.courtId }}</td>
              <td class="border px-4 py-2">{{ booking.date }}</td>
              <td class="border px-4 py-2">{{ booking.startTime }} - {{ booking.endTime }}</td>
              <td class="border px-4 py-2">{{ booking.status }}</td>
              <td class="border px-4 py-2">
                <button
                  type="button"
                  class="rounded-md bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700"
                  @click="removeBooking(booking.id)"
                >
                  ยกเลิก
                </button>
              </td>
            </tr>
            <tr v-if="!loading && bookings.length === 0">
              <td colspan="6" class="py-6 text-center text-gray-400">ยังไม่มีการจอง</td>
            </tr>
            <tr v-if="loading">
              <td colspan="6" class="py-6 text-center text-gray-400">กำลังโหลด...</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p v-if="errorMessage" class="mt-4 text-sm text-red-600">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { cancelBooking, getBookings } from '../api'

const bookings = ref([])
const loading = ref(false)
const errorMessage = ref('')

async function loadBookings() {
  loading.value = true
  errorMessage.value = ''
  try {
    bookings.value = await getBookings()
  } catch (error) {
    errorMessage.value = error.message || 'ไม่สามารถโหลดรายการจองได้'
  } finally {
    loading.value = false
  }
}

async function removeBooking(id) {
  errorMessage.value = ''
  try {
    await cancelBooking(id)
    bookings.value = bookings.value.filter((booking) => booking.id !== id)
  } catch (error) {
    errorMessage.value = error.message || 'ไม่สามารถยกเลิกการจองได้'
  }
}

onMounted(loadBookings)
</script>
