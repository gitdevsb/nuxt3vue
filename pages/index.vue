<script setup lang="ts">

const router = useRouter()
const onHome = () => {
    router.push('/home')
}
</script>
<template>
    <div class="bg-blue gap:4">
        <div>
            /index
        </div>
        <ElButton type="success" @click="onHome">
            按钮
        </ElButton>

        <NuxtLink to="/home">
            <ElButton type="primary">
                去homeindex
            </ElButton>
        </NuxtLink>

        <NuxtLink to="/list">
            <ElButton type="warning">
                去list
            </ElButton>
        </NuxtLink>

    </div>
</template>

<style lang="scss" scoped></style>