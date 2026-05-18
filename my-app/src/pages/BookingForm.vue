<template>
  <div class="min-h-screen bg-[var(--color-green-very-light)] flex items-center justify-center px-4 py-10">
    <div class="bg-white w-full max-w-lg rounded-xl shadow-lg p-8">
      <h2 class="text-2xl font-bold text-[var(--color-green-dark)] mb-6 text-center">จองสนามกีฬา</h2>

      <form @submit.prevent="submitBooking" class="space-y-4">
        <!-- ประเภทกีฬา -->
        <div>
          <label class="label-text">เลือกประเภทกีฬา</label>
          <select v-model="sportType" required class="custom-input">
            <option disabled value="">-- กรุณาเลือก --</option>
            <option>ฟุตซอล</option>
            <option>แบดมินตัน</option>
            <option>Pickle Ball</option>
            <option>มวยไทย</option>
          </select>
        </div>

        <!-- เลือกสนาม -->
        <div>
          <label class="label-text">เลือกสนาม</label>
          <select v-model="courtId" required class="custom-input">
            <option disabled value="">-- กรุณาเลือก --</option>
            <option>สนาม 1</option>
            <option>สนาม 2</option>
            <option>สนาม 3</option>
          </select>
        </div>

        <!-- วันที่ -->
        <div>
          <label class="label-text">วันที่</label>
          <input v-model="date" type="date" required class="custom-input" />
        </div>

        <!-- เวลา -->
        <div class="flex gap-4">
          <div class="flex-1">
            <label class="label-text">เวลาเริ่ม</label>
            <input v-model="startTime" type="time" required class="custom-input" />
          </div>
          <div class="flex-1">
            <label class="label-text">เวลาสิ้นสุด</label>
            <input v-model="endTime" type="time" required class="custom-input" />
          </div>
        </div>

        <p v-if="errorMessage" class="text-sm text-red-600">{{ errorMessage }}</p>
        <p v-if="successMessage" class="text-sm text-green-600">{{ successMessage }}</p>

        <button type="submit" class="custom-button" :disabled="submitting">
          {{ submitting ? 'กำลังบันทึก...' : 'ยืนยันการจอง' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createBooking } from '../api'

const router = useRouter()
const sportType = ref('')
const courtId = ref('')
const date = ref('')
const startTime = ref('')
const endTime = ref('')
const submitting = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

async function submitBooking() {
  errorMessage.value = ''
  successMessage.value = ''

  if (startTime.value >= endTime.value) {
    errorMessage.value = 'เวลาสิ้นสุดต้องมากกว่าเวลาเริ่ม'
    return
  }

  const bookingData = {
    sportType: sportType.value,
    courtId: courtId.value,
    date: date.value,
    startTime: startTime.value,
    endTime: endTime.value,
    status: 'รอตรวจสอบ'
  }

  submitting.value = true
  try {
    await createBooking(bookingData)
    successMessage.value = 'จองสำเร็จ'
    sportType.value = ''
    courtId.value = ''
    date.value = ''
    startTime.value = ''
    endTime.value = ''
    router.push('/dashboard')
  } catch (error) {
    errorMessage.value = error.message || 'ไม่สามารถบันทึกการจองได้'
  } finally {
    submitting.value = false
  }
}
</script>
