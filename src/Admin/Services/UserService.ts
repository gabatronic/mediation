import { type User } from '@/Admin/Types/User';
export const getProfile = async (bearerToken: string): Promise<User | null> => {
    const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
    try {
        const response = await fetch(`${API_URL}/api/users/profile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json() as User;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        return null;
    }
}