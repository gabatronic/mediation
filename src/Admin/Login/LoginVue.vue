<script lang="ts" setup>
import { useAuthStore } from '../stores/authStore';
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const login = async() => {
    const authStore = useAuthStore();
    try {
        await authStore.login(username.value, password.value);
        // Redirect to the dashboard or another page after successful login
        // window.location.href = '/dashboard';
    } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials.');
    }
};
</script>
<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="login">
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required />
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
        </form>
    </div>
</template>