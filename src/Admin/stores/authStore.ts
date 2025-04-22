import { defineStore } from "pinia";
import { type User } from "@/Admin/Types/User";
import { loginUser } from "@/Admin/Services/AuthService";
import { ref, computed } from "vue";
import { getProfile } from "@/Admin/Services/UserService";

export const useAuthStore = defineStore("auth", () => {
    const user = ref<User | null>(null);
    const isAuthenticated = computed(() => !!user.value);
    const isAdmin = computed(() => user.value?.roles.includes("admin") || false);
    const bearerToken = ref<string | null>(null);
    const login = async (email: string, password: string) => {
        const token = await loginUser(email, password);
        if (token) {
            bearerToken.value = token;
            localStorage.setItem("bearerToken", token);
            
            user.value = await getProfile(token) as User;
        }

    }

    return { user, isAuthenticated, isAdmin, bearerToken, login };
})
    