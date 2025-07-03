<template>
  <div class="min-h-screen bg-[var(--color-green-very-light)] flex flex-col justify-center items-center text-center px-6 py-20">
    <div class="max-w-2xl w-full">
      <h1 class="text-4xl md:text-5xl font-bold text-[var(--color-green-dark)] mb-4">
        ระบบจองสนามกีฬา
      </h1>
      <p class="text-lg text-[var(--color-green-medium)] mb-10">
        จองสนาม ฟุตซอล | แบดมินตัน | Pickle Ball | มวยไทย ได้ง่าย ๆ แค่ปลายนิ้ว
      </p>

      <div class="flex gap-4 flex-wrap justify-center">
        <router-link
          to="/login"
          class="px-6 py-3 min-w-[140px] text-base font-semibold rounded-lg shadow transition-all duration-300 text-white bg-[var(--color-green-medium)] hover:bg-[var(--color-green-dark)] text-center"
        >
          เข้าสู่ระบบ
        </router-link>

        <router-link
          to="/register"
          class="px-6 py-3 min-w-[140px] text-base font-semibold rounded-lg shadow transition-all duration-300 text-[var(--color-green-dark)] border border-[var(--color-green-light)] bg-white hover:bg-[var(--color-green-light)] hover:text-white text-center"
        >
          สมัครสมาชิก
        </router-link>
      </div>
    </div>
  </div>
</template>
