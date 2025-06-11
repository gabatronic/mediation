export const loginUser = async (email: string, password: string): Promise<string> => {
    const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
    try {
        const response = await fetch(`${API_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.text();        
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
}