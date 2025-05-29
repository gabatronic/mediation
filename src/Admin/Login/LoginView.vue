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
    <div class="container mx-auto p-4 flex justify-center items-center min-h-screen">
        <div class="w-full sm:w-1/3 md:w-1/2 lg:w-1/3 mx-auto bg-gray-800 p-6 rounded-lg shadow-md ">
            <h1 class="text-2xl font-bold mb-6 w-full text-center p-4 ">Admin Login</h1>

            <form @submit.prevent="login">
                <div class="mb-4 flex flex-col gap-4">
                    <input type="text" id="username" v-model="username" required class="bg-gray-200 p-2 rounded-lg text-gray-900" placeholder="Usuario" />
                    <input type="password" id="password" v-model="password" required class="bg-gray-200 p-2 rounded-lg text-gray-900" placeholder="Contraseña" />                    
                    <button type="submit" class="bg-blue-500 text-white p-2 rounded-lg w-full mt-4">Login</button>
                </div>                
            </form>
        </div>
    </div>  
</template>