<script setup lang="ts">

const useUser = useUserStore()
useUser.loadUserInfo()

</script>
<template>
    <div>
        home/index + {{ useUser.userInfo }}
    </div>
</template>

<style lang="scss" scoped></style>